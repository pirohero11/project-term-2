const express = require('express');
const path = require('path');
const cors = require('cors');
import { router } from './routes/imageRoutes';

const app = express();
const port = 3000;

app.use(cors());

app.use(express.static(path.join(__dirname, '../src/frontend')));
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

app.get('/', (req: any, res: any) => {
  res.sendFile(path.join(__dirname, '../../src/frontend/index.html'));
});

app.use('/api/images', router);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

export default app;
