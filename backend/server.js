const express = require('express');
const cors = require('cors');

const stripe = require('stripe')('sk_test_51Om0ZiBPXRYAP6Unx2gF38rdOg2WTPuh7iDkAeu53z0I3xufr1oTxAaJVBMrLnQeKZPRgMh8DRh1TAwivK9sNJTE00Q6tuz96N'); // Replace with your actual secret key
const bodyParser = require('body-parser');

const app = express();
app.use(cors());

app.use(bodyParser.json());

app.post('/create-checkout-session', async (req, res) => {
    const { doctorId } = req.body;
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'egp',
                    product_data: {
                        name: 'Doctor Appointment',
                    },
                    unit_amount: 20000,
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel',
    });

    res.json({ id: session.id });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
