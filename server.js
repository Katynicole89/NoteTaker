const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001; 
const app = express(); 
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//Express Midleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('./public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);





// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, './public/index.html'));
//   });

//   app.get('/notes', (req, res) => {
//     res.sendFile(path.join(__dirname, './public/notes.html'));
//   });

// //Sets index as default
//   app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, './public/index.html'));
//   });



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });