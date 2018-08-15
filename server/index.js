const express = require('express');
const bodyParser = require('body-parser');
const mC = require('./controllers/messages_controller.js');

const app = express();
app.use(bodyParser.json())

app.get('/api/messages', mC.read)
app.post('/api/messages', mC.create)
app.put('/api/messages/:id', mC.update)
app.delete('/api/messages/:id', mC.delete)

// const messagesBaseUrl = "/api/messages";
// app.post( messagesBaseUrl, mc.create );
// app.get( messagesBaseUrl, mc.read );
// app.put( `${messagesBaseUrl}/:id`, mc.update );
// app.delete( `${messagesBaseUrl}/:id`, mc.delete );

const port = 3000;
app.listen(port, () => {console.log(`Listening on ${port}`); });

