const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Serwer działa poprawnie!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serwer działa na porcie ${PORT}`);
}).on('error', (err) => {
    console.error('Błąd serwera:', err);
});
