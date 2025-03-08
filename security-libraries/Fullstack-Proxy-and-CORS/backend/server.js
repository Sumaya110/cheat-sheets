import express from "express";
import 'dotenv/config';

const app = express();
app.use(express.json());

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            "id": 1,
            "title": "Jokes1",
            "content": "Details of jokes 1"
        },
        {
            "id": 2,
            "title": "Jokes2",
            "content": "Details of jokes 2"
        },
        {
            "id": 3,
            "title": "Jokes3",
            "content": "details of jokes 3"
        }
    ];

    res.send(jokes); 
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});
