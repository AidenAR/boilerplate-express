let express = require('express');
let app = express();


app.get('/', (req, res) => {
    res.send('Hello World');
  });
  
  const PORT = 3001;
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
  });




































 module.exports = app;
