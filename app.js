const express = require('express');
const bodyParser = require('body-parser');
const resRoutes = require('./routers/Restaurant'); 


const PORT = 9095;
const app = express();


app.use(bodyParser.json());  

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/api', resRoutes);  


app.listen(PORT, () => {
    console.log(`the app has started on port:${PORT} `)
});