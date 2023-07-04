const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;
let data = [];
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.send('test');
});

app.post('/pushData', (req, res) =>{
  console.log(req.body);
  // const bpm = req.body.bpm; // Assuming the BPM value is passed in the request body

data.push(req.body.bpm);
// console.log(data);
  res.status(200).send({message: 'Nachricht ist angekommen'});
})

app.get('/getData', (req, res) => {
  res.status(200).send(
    {
      message: 'Daten sind angekommen', 
      data
    }
    );
}

)

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});