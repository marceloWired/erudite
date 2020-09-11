const express = require('express');
const app = express();
const port = process.env.PORT || 3333;
const routes = require('./routes');

app.use(express.json())
app.use(routes);

app.listen(port, () => {
    console.log(`Ready! Server up on localhost:${port}`)
})