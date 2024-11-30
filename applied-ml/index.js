const express = require('express');
const app = express();
const routes = require('./src/predict.routes.js')
const cors = require('cors')
require('dotenv').config();
const path = require('path');
const multer = require('multer')

const cors_opstions = {
    origin: '*',
};

const staticPath = path.join(__dirname, 'public');
app.use(express.static(staticPath));app.use(cors(cors_opstions))
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

app.use(routes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.use((err, req, res, next) => {
    if (err instanceof multer.MulterError && err.code === 'LIMIT_FILE_SIZE') {
        return res.status(413).json({
            status: 'fail',
            message: 'Payload content length greater than maximum allowed: 1000000'
        });
    }
    next();
});