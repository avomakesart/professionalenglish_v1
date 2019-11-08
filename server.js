const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 9000;

// let p = path.join(__dirname, 'client/public');
// console.log(p);

// app.use(express.static(p));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
  
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }
  app.get('/api/hello', (req, res, next) => {
    res.json('World');
});


const charge = (token, amt, email) => {
    return stripe.charges.create({
        amount: amt * 100,
        currency: 'mxn',
        source: token, 
        description: '',
        receipt_email: email
    });
};

app.post('/api/charges', async (req, res, next) => {
    try {
        let data = await charge(req.body.token.id, req.body.amount, req.body.email);
        console.log(data);
        res.send("Charged!");
    } catch(e) {
        console.log(e);
        res.status(500);
    }
});



app.listen(port, () =>  {
console.log(`Server listening on port: ${port}`)
})
