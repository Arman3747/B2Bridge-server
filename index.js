const express = require('express');
const cors = require('cors');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app = express();
const port = process.env.PORT || 3000;


//middleware
app.use(cors({
  origin: ['http://localhost:5173'], 
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

const verifyToken = (req, res, next) => {
  const token = req?.cookies?.token;
  // console.log('cookie in the middleware', token);
  
  if(!token)
  {
    return res.status(401).send({ message: 'unauthorized access !' })
  }

  jwt.verify(token, process.env.JWT_ACCESS_SECRET, (err, decoded) => {
    if(err)
    {
      return res.status(401).send({ message: 'unauthorized access !' })
    }
    req.decoded = decoded;
    // console.log(decoded);
    next();
  })
}

//middleware

const uri = `mongodb+srv://${process.env.btobridge_DB_USER}:${process.env.btobridge_DB_PASS}@cluster0.nnagfsm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

//MongoClient
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
    const productsCollection = client.db('btobridge').collection('products')
    const orderCollection = client.db('btobridge').collection('order')

    //jwt
    app.post('/jwt', async(req, res) => {
      const userData = req.body;
      const token = jwt.sign(userData, process.env.JWT_ACCESS_SECRET, {expiresIn: '1d'})

      //set token in the cookies
      res.cookie('token', token, {
        httpOnly: true,
        secure: false
      })

      res.send({success: true})
    })

    /**
     * 
     * PUBLIC   --->  Use All Open no Auth or Token
     * 
     * 
    */

    //Read
    app.get('/publicAllProducts', async (req, res)=>{
      const result = await productsCollection.find().toArray();
      res.send(result);
    })

    //Read
    app.get('/allproducts', verifyToken, async (req, res)=>{
      const result = await productsCollection.find().toArray();
      res.send(result);
    })

    //Read 1 Product
    app.get('/allproducts/:id', verifyToken, async(req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await productsCollection.findOne(query);
      res.send(result);
    })

    //Create 
    app.post('/allproducts', verifyToken, async (req, res) => {
      const newProduct = req.body;
    //   console.log(newProduct);
      const result = await productsCollection.insertOne(newProduct);
      res.send(result);
    })

    //update
    app.put('/allproducts/:id', verifyToken, async (req,res) => {
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
    app.patch('/allproducts/:id', verifyToken, async (req, res) => {
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
    app.delete('/allproducts/:id', verifyToken, async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await productsCollection.deleteOne(query);
      res.send(result);
    })

    /**
     * 
     * PUBLIC  ---> OPEN for Category
     * 
    */

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
    app.get('/orderProduct', verifyToken, async (req, res)=>{
      const result = await orderCollection.find().toArray();
      res.send(result);
    })

    // post Order 
    app.post('/orderProduct', verifyToken, async (req, res) => {
      const application = req.body;
      const result = await orderCollection.insertOne(application);
      res.send(result);
    })

    //Delete
    app.delete('/orderProduct/:id', verifyToken, async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await orderCollection.deleteOne(query);
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