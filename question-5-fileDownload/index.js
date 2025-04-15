import fs from "fs";
import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log(`_filename ${__filename}`)
console.log(`dirname ${__dirname}`)
app.get('/download', (req, res) => {
    const filePath = path.join(__dirname, 'files', 'sample.pdf');

    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            return res.status(404).json({ error: 'File not found' });
        }
        res.download(filePath, 'downloaded-file.pdf', (err) => {
            if (err) {
                return res.status(500).json({ error: 'Error in downloading file' });
            }
        });
    });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
