const express = require('express');
const app = express();
const axios = require('axios');

let flowers = require('./data');
app.use(express.static('/build'));

app.get('/', (req, res) => {
    const flowerLinks = flowers.map(flower => `<a href="/${flower.flowerID}">${flower.flowerName}</a>: $${flower.flowerPrice}`).join('<br>');
    res.status(200).send(flowerLinks);
});

app.get('/:id', (req, res) => {
    const flowerId = parseInt(req.params.id);
    const flower = flowers.find(flower => flower.flowerID === flowerId);

    if (!flower) {
        return res.status(404).send('Flower not found');
    }

    const flowerDetails = `Flower Name: ${flower.flowerName}\nFlower Description: ${flower.flowerDesc}\nFlower Price: $${flower.flowerPrice}`;
    res.status(200).send(flowerDetails);
});

app.listen(5000, () => {
    console.log('Server is listening on port 5000');
});
