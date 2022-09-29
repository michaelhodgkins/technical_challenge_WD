
const express = require('express');
const PORT = process.env.PORT || 3001
const app = express();

app.get("/api", (req, res) => {
    res.json({message: "Hello from my server!"})
});
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})

