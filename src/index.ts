import express from 'express';
import bodyParser from 'body-parser';
import productRoutes from './routes/productRoutes';
import { connectDB } from './db/database';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api', productRoutes);

app.listen(port, async () => {
    await connectDB();
    console.log(`Server is running on http://localhost:${port}`);
});
