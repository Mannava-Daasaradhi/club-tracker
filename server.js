const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Load credentials
const credentials = JSON.parse(fs.readFileSync("credentials.json", "utf-8"));

// Login endpoint
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    const user = credentials.find((cred) => cred.username === username && cred.password === password);

    if (user) {
        res.status(200).json({ message: "Login successful" });
    } else {
        res.status(401).json({ message: "Invalid username or password" });
    }
});

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
