const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    return res.send('Kanban Home Page');
});

app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`);
});