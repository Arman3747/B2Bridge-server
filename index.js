const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app = express();
const port = process.env.PORT || 3000;


//middleware
app.use(cors());
app.use(express.json());


//middleware
//middleware
//middleware

//
//

const uri = `mongodb+srv://${process.env.btobridge_DB_USER}:${process.env.btobridge_DB_PASS}@cluster0.nnagfsm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    const productsCollection = client.db('btobridge').collection('products')
    const orderCollection = client.db('btobridge').collection('order')

    //Read
    app.get('/allproducts', async (req, res)=>{
      const result = await productsCollection.find().toArray();
      res.send(result);
    })

    //Read 1 Product
    app.get('/allproducts/:id', async(req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await productsCollection.findOne(query);
      res.send(result);
    })

    //Create 
    app.post('/allproducts', async (req, res) => {
      const newProduct = req.body;
    //   console.log(newProduct);
      const result = await productsCollection.insertOne(newProduct);
      res.send(result);
    })

    //update
    app.put('/allproducts/:id', async (req,res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id)}
      const options = { upsert: true};
      const updatedProduct = req.body;
      const updatedDoc = {
        $set : updatedProduct
      }
      const result = await productsCollection.updateOne(filter, updatedDoc, options);
      res.send(result);
    })

    //patch
    app.patch('/allproducts/:id', async (req, res) => {
      // console.log( req.body );
      const id = req.params.id;

      const { total } = req.body; 
      const filter = { _id: new ObjectId(id)}
      const updatedDoc ={
        $set: {
            total: total,
        }
      }
      const result = await productsCollection.updateOne(filter, updatedDoc)
      res.send(result);
    })

    //Delete
    app.delete('/allproducts/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await productsCollection.deleteOne(query);
      res.send(result);
    })

    //categories
    app.get('/categories', async (req, res) => {
      const category = req.query.category;
      const query = {
        category: category
      }
      const result = await productsCollection.find(query).toArray();
      res.send(result);
    })


    //Read Order
    app.get('/orderProduct', async (req, res)=>{
      const result = await orderCollection.find().toArray();
      res.send(result);
    })


    // post Order 
    app.post('/orderProduct', async (req, res) => {
      const application = req.body;
      const result = await orderCollection.insertOne(application);
      res.send(result);
    })










    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);






app.get('/', (req,res) => {
    res.send('B2Bridge is loading !')
})

app.listen(port, () => {
    console.log(`B2Bridge server is running in port ${port}`)
})