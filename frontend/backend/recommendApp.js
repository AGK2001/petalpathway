
const express = require('express');
const bodyParser = require('body-parser');
//const cors = require('cors');
const flowers = require('./data');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', flowers);
//app.use(cors());

app.use(express.static('/build'));

const recipientOptions = ['friend', 'girlfriend', 'mom'];
const occasionOptions = ['birthday', 'just because', 'valentines day'];
const feelingOptions = ['happiness', 'romance', 'sorrow'];

app.get('/getrecommendation', (req, res) => {
  res.status(200).json({
    recipient: recipientOptions,
    occasion: occasionOptions,
    feeling: feelingOptions,
  });
});

app.post('/recommend', (req, res) => {
  const { recipient, occasion, feeling } = req.body;

  const matchingFlowers = flowers.filter((flower) =>
    (Array.isArray(flower.flowerProfiles.recipient)
      ? flower.flowerProfiles.recipient.includes(recipient)
      : flower.flowerProfiles.recipient === recipient) &&
    (Array.isArray(flower.flowerProfiles.occasion)
      ? flower.flowerProfiles.occasion.includes(occasion)
      : flower.flowerProfiles.occasion === occasion) &&
    (Array.isArray(flower.flowerProfiles.feeling)
      ? flower.flowerProfiles.feeling.includes(feeling)
      : flower.flowerProfiles.feeling === feeling)
  );

  if (matchingFlowers.length > 0) {
    res.status(200).json(matchingFlowers[0]);
  } else {
    res.status(404).json({ message: 'No flower found for the given criteria' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});