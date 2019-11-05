import * as express from 'express';
import * as stripeLoader from 'stripe';

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});

const stripe = new stripeLoader('sk_live_Y7doa9cl08WfpPtTYp4UjO5400ob0FRjnQ');
  
const charge = (token: string, amt: number, email: string) => {
    return stripe.charges.create({
        amount: amt * 100,
        currency: 'mxn',
        source: token, 
        description: '',
        receipt_email: email
    });
};

router.post('/api/charges', async (req, res, next) => {
    try {
        let data = await charge(req.body.token.id, req.body.amount, req.body.email);
        console.log(data);
        res.send("Charged!");
    } catch(e) {
        console.log(e);
        res.status(500);
    }
});

export default router;