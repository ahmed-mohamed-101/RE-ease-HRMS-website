const express = require('express');

const router = express.Router();

// const payment = require('../controllers/payment');

const stripe_private_key = "sk_test_51PBNvfJo7stJPpDUQOdEtMbnn9EydhrSOqZRGk78edK3C91LPrpIiPLDuDWyu3gYV83DkbbFCmnVHLnVZzxOQIgO009hSBteNv"

const stripe_price_id_1 = "price_1PBO3YJo7stJPpDUxv32BIq3"

const stripe_price_id_2 = "price_1PBO4mJo7stJPpDUs1gqYLdL"

const stripe = require("stripe")(stripe_private_key);


router.post("/monthly", async (req, res) => {
  try {
    const paymentLink = await stripe.paymentLinks.create({
      line_items: [
        {
          price: stripe_price_id_1,
          quantity: 1000,
        },
      ],
      after_completion : {
        type: 'redirect',
        redirect: {
          url : 'http://localhost:4200/home',
        }
      },
    });
    const paymentLinkUrl = paymentLink.url;
    res.json({ url: paymentLinkUrl });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.post("/annually", async (req, res) => {
  try {
    const paymentLink = await stripe.paymentLinks.create({
      line_items: [
        {
          price: stripe_price_id_2,
          quantity: 11000,
        },
      ],
      after_completion : {
        type: 'redirect',
        redirect: {
          url : 'http://localhost:4200/home',
        }
      },
    });
    const paymentLinkUrl = paymentLink.url;
    res.json({ url: paymentLinkUrl });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});


module.exports = router;









// //==========================================================================================================================

// app.post("/create-checkout-session", async (req, res) => {
//   try {
//     const session = await stripe.checkout.sessions.create({
//       success_url: `http://localhost:4200/`,
//       cancel_url: `http://localhost:4200/`,
//       line_items: [
//         {
//           price: STRIPE_PRICE_ID,
//           quantity: quantity,
//         },
//       ],
//       mode: "subscription",
//     });
//     console.log("session: ", session.id, session.url, session);

//     // get id, save to user, return url
//     const sessionId = session.id;
//     console.log("sessionId: ", sessionId);

//     // save session.id to the user in your database


//     res.json({ url: session.url });
//   } catch (e) {
//     res.status(500).json({ error: e.message });
//   }
// });
// //==========

// app.get("/stripe-session", async (req, res) => {
//   console.log("req.body: ", req.body);
//   const { userId } = req.body;
//   console.log("userId: ", userId);

//   const db = req.app.get("db");

//   // get user from you database
//   const user = {
//     stripe_session_id: "asdfpouhwf;ljnqwfpqo",
//     paid_sub: false,
//   };

//   if (!user.stripe_session_id || user.paid_sub === true)
//     return res.send("fail");

//   try {
//     // check session
//     const session = await stripe.checkout.sessions.retrieve(
//       user.stripe_session_id
//     );
//     console.log("session: ", session);

//     // const sessionResult = {
//     //   id: 'cs_test_a1lpAti8opdtSIDZQIh9NZ6YhqMMwC0H5wrlwkUEYJc6GXokj2g5WyHkv4',
//     //   …
//     //   customer: 'cus_PD6t4AmeZrJ8zq',
//     //   …
//     //   status: 'complete',
//     //   …
//     //   subscription: 'sub_1OOgfhAikiJrlpwD7EQ5TLea',
//     //  …
//     // }

//     // update the user
//     if (session && session.status === "complete") {
//       let updatedUser = await db.update_user_stripe(userId, true);
//       updatedUser = updatedUser[0];
//       console.log(updatedUser);

//       return res.send("success");
//     } else {
//       return res.send("fail");
//     }
//   } catch (error) {
//     // handle the error
//     console.error(
//       "An error occurred while retrieving the Stripe session:",
//       error
//     );
//     return res.send("fail");
//   }
// });
// //==========================================================================================================================