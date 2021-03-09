require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const productRouter = require('./routes/productRouter');
const port = process.env.PORT || 3000;
const app = express();


app.use(express.json());
app.use('/api/products', productRouter);

app.listen(port, () => {
    console.log(`Your Server is runnig on ${port}`);
});

//Connet to MongoDB
const URL = process.env.MONGODB_URL;
mongoose.connect(URL, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}, err => {
    if (err) throw err;
    console.log('MongoDB is Connected')
});