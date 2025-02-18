const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Serwer działa!');
});

app.listen(PORT, () => {
    console.log(`Serwer działa na http://localhost:${PORT}`);
});
