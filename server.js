const express = require('express');
const path = require('path');

const app = express()
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    
});

app.get('/notes', (req, res) => {
    res.send(notes.html)
});


app.listen(PORT, () => {
    console.log('App is listening at PORT 3001')
});