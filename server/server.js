import express from "express";

const app = express();
const port = 3000; //add your port here
const PUBLISHABLE_KEY = "pk_test_51QpvtcH6lYCFLgQA18yluYMLvFURh31EVmMaMhOsWvwcl7qerEvNNgxUYLeKyP11k4H3kva7ZTy7jTBSKIjZrW4g00VNm8caJs";
const SECRET_KEY = "sk_test_51QpvtcH6lYCFLgQAwDuCVfnS5ERlVQfLEJYNSGN5fjZgmcF93jcLfPdebQ6r9VAzkkHsYRHyws0YTOk6BqQsx7Kk00AQJCYnUm";
import Stripe from "stripe";

//Confirm the API version from your stripe dashboard
const stripe = Stripe(SECRET_KEY, { apiVersion: "2025-01-27.acacia" });

app.listen(port, () => {
  console.log(`Example app listening at http://192.168.1.16:${port}`);
});

app.post ("/create-payment-intent", async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1000, //lowest denomination of particular currency
      currency: "sgd",
      payment_method_types: ["paynow", "card"], //by default
    });

    const clientSecret = paymentIntent.client_secret;

    res.json({
      clientSecret: clientSecret,
    });
  } catch (e) {
    console.log(e.message);
    res.json({ error: e.message });
  }
});