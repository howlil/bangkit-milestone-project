const tfjs = require('@tensorflow/tfjs-node');
const { Firestore } = require('@google-cloud/firestore');
require('dotenv').config();

const firestore = new Firestore({ 
    databaseId: "predictions",
    projectId: "submissionmlgc-mhdulilabshar",
    keyFilename: "sa.json" 

});


async function save_data(id, data) {
    try {
        console.log("Saving data to Firestore...");
        const predictions_data = firestore.collection('predictions');
        await predictions_data.doc(id).set(data);
        console.log(`Data saved with ID: ${id}`);
    } catch (error) {
        console.error("Error saving data to Firestore:", error);
    }
}




async function get_data() {
    try {
        console.log("Fetching data from Firestore...");
        const predictions_data = firestore.collection('predictions');
        const get_all = await predictions_data.get();
        return get_all;
    } catch (error) {
        console.error("Error fetching data from Firestore:", error);
    }
}


// Fungsi untuk memuat model
async function load_model() {
    console.log("Loading model from URL...");
    try {
        const model = await tfjs.loadGraphModel("https://storage.googleapis.com/models_buck/model/model.json");
        console.log("Model loaded successfully");
        return model;
    } catch (error) {
        console.error("Error loading model:", error);
        throw new Error("Error loading model.");
    }
}


// Fungsi untuk melakukan klasifikasi gambar
async function predict_classification(model, image) {
    console.log("Starting image classification...");

    try {
        console.log("Decoding and resizing image...");
        const tensor = tfjs.node
            .decodeJpeg(image)
            .resizeNearestNeighbor([224, 224])
            .expandDims()
            .toFloat();

        console.log("Running model prediction...");
        const prediction = model.predict(tensor);
        const score = await prediction.data();
        const confidence_score = Math.max(...score) * 100;

        console.log(`Confidence score: ${confidence_score}%`);

        // Menentukan label dan memberikan saran
        const label = confidence_score <= 50 ? 'Non-cancer' : 'Cancer';
        let suggestion;

        if (label === 'Cancer') {
            suggestion = 'Segera periksa ke dokter!';
        } else if (label === 'Non-cancer') {
            suggestion = 'Penyakit kanker tidak terdeteksi.';
        }

        console.log(`Prediction label: ${label}`);
        return { label, suggestion }

    } catch (error) {
        console.error("Error during image classification:", error);
        throw new Error(`Terjadi kesalahan dalam melakukan prediksi`);
    }
}

module.exports = { save_data, load_model, get_data, predict_classification };
