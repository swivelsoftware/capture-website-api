import express from 'express';
import {capture, latestCapture, latestCapturePage, showResults} from "./helpers.js";

const port = process.env.PORT || 9002;
const app = express();
app.use(express.json())
app.get('/capture', capture);
app.post('/capture', capture);
if (showResults()) {
    app.get('/', latestCapturePage);
    app.get('/latest', latestCapture);
}

app.listen(port, () => console.log(`listening at port ${port}...`));
