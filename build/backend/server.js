"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const path = require('path');
const cors = require('cors');
const imageRoutes_1 = require("./routes/imageRoutes");
const app = express();
const port = 3000;
app.use(cors());
app.use(express.static(path.join(__dirname, '../src/frontend')));
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/frontend/index.html'));
});
app.use('/api/images', imageRoutes_1.router);
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
exports.default = app;
