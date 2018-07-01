const express = require('express');
const app = express();

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './', 'index.html')));

app.listen(9090, () => console.log('Example app listening on port 9090!'));
