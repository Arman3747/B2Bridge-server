const express = require('express');
const cors = require('cors');
require('dotenv').config();
// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app = express();
const port = process.env.PORT || 3000;


//middleware
app.use(cors());
app.use(express.json());










app.get('/', (req,res) => {
    res.send('B2Bridge is loading !')
})

app.listen(port, () => {
    console.log(`roomies server is running in port ${port}`)
})