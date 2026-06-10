import express from "express"

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        "Hey" : "Node JS"
    });
})

app.listen(PORT, () => {
    console.log(`App is running at http://localhost:${PORT}`);
})