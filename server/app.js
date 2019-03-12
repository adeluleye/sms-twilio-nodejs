const express = require('express');
const cors = require('cors');
const Twilio = require('twilio');

// Twilio setup
const accountSid = 'YOUR_ACCOUNT_SID';
const authToken = 'YOUR_AUTH_TOKEN';
const client = new Twilio(accountSid, authToken);

// Fireup express
const app = express();

// using cors for blocking browser for data restriction
app.use(cors());

// home route
app.get('/', (req, res) => {
    res.send('Hello from Twilio app setup');
});

// send text
app.get('/send-text', (req, res) => {
    const { recipient, textmessage } = req.query;

    // Send text
    client.messages.create({
        body: textmessage,
        to: '+'+recipient,
        from: 'YOUR_TWILIO_NUMBER'
    }).then((message) => console.log(message.body));
})

const port = 3900;

// server setup
const server = app.listen(port, 
    () => console.log(`app listening on port ${port}`));