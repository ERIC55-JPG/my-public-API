const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    try{
        res.json({
            email: process.env.EMAIL,
            current_datetime: new Date().toISOString(),
            github_url: process.env.GITHUB_URL
        });
        res.json(info);
    } catch (error) {
        res.status(500).json({ error: "internal server Error"});
    }
});

app.get("/pretty", (req, res) => {
    try {
        const info = {
            email: process.env.EMAIL,
            current_datetime: new Date().toISOString(),
            github_url: process.env.GITHUB_URL
        };
        res.send(`<pre>${JSON.stringify(info, null, 2)}</pre>`);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
});