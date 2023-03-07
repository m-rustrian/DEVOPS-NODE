const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
  });
  
  app.get('/section', (req, res) => {
    res.sendFile(__dirname + '/public/section.html');
  });

// app.get('/', (req, res) => {
//  res.status(200).json({
//     message: 'Hola mundo'
//  })
// })



app.listen(port, () => {
 console.log(`Servidor escuchando en http://localhost:${port}`);
})