const express = require('express');

const app = express();

const path = require('path');

const port = process.env.PORT || 5000;

if(process.env.NODE_ENV === "production"){
    app.use(express.static('public'));
    app.get('*', (req, res)=> {
        req.sendFile(path.resolve(__dirname, 'public', 'render-page.js'))
    })
}

app.listen(port, (err) => {
  
    if (err) return console.log(err);

    console.log('Server is running on port: ',port)

})



