const express = require('express');
const execute = require('child_process').exec;
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors());
app.use(express.json())

app.post("/submit", async (req, res) => {
    let message = req.body.message;
    console.log(message);
    await execute(`yt-dlp -x --audio-format mp3 --no-playlist "${message}"`)
    res.json({status: "success", receivedMessage: message});
})
app.listen(port,'0.0.0.0', () => {

});