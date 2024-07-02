const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { spawn } = require('child_process');
const path = require('path');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/predict', (req, res) => {
    const inputData = req.body.inputData;

    const pythonProcess = spawn('python', [path.join(__dirname, 'predict.py'), ...inputData]);

    pythonProcess.stdout.on('data', (data) => {
        const prediction = data.toString().trim();
        res.json({ prediction });
    });

    pythonProcess.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    pythonProcess.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
