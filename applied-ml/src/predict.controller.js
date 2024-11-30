const { predict_classification } = require("./predict.service.js");
const { save_data } = require("./predict.service.js");
const { load_model } = require("./predict.service.js");
const { get_data } = require("./predict.service.js");
const crypto = require('crypto');

// Fungsi untuk melakukan prediksi
async function predict(req, res) {
    try {
        console.log("Received request to make a prediction");

        const { file } = req;

        // Menampilkan informasi file yang diterima
        console.log("Received file:", file);

        console.log("Loading model...");
        const model = await load_model();
        console.log("Model loaded successfully");

        console.log("Starting prediction...");
        const { label, suggestion } = await predict_classification(model, file.buffer);
        console.log(`Prediction result: ${label}, Suggestion: ${suggestion}`);

        // Membuat ID unik dan mencatat waktu pembuatan
        const id = crypto.randomUUID();
        const createdAt = new Date().toISOString();

        // Menyusun data yang akan disimpan
        const data = {
            id: id,
            result: label,
            suggestion: suggestion,
            createdAt: createdAt
        };

        console.log("Saving prediction data to Firestore...");
        await save_data(id, data);
        console.log("Prediction data saved successfully");

        // Mengirim respons sukses
        return res.status(201).json({
            status: 'success',
            message: 'Model is predicted successfully',
            data: data
        });
    } catch (error) {
        console.error("Error during prediction process:", error);
        return res.status(400).json({
            status: 'fail',
            message: error.message
        });
    }
}

// Fungsi untuk mengambil data prediksi
async function get_predict(req, res) {
    try {
        console.log("Fetching prediction history from Firestore...");

        const data = await get_data();

        console.log(data)
        const format_data = [];
        data.forEach(doc => {
            const current_data = doc.data();
            format_data.push({
                id: doc.id,
                history: {
                    result: current_data.result,
                    createdAt: current_data.createdAt,
                    suggestion: current_data.suggestion,
                    id: doc.id
                }
            });
        });

        console.log("Data formatted successfully");

        return res.status(200).json({
            status: 'success',
            message: 'Data successfully retrieved',
            data: format_data
        });
    } catch (error) {
        console.error("Error during fetching predictions:", error);
        return res.status(500).json({
            status: 'fail',
            message: error.message
        });
    }
}

module.exports = { predict, get_predict };
