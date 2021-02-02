const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve(process.cwd(), 'public')));

app.use('/*', (req, res) =>
    res.sendFile(path.resolve(process.cwd(), 'build', 'index.html'))
);

port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running in port --> ${port}`));
