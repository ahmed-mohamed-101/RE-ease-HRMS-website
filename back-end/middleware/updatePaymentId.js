

const stripe_private_key = "sk_test_51PBNvfJo7stJPpDUQOdEtMbnn9EydhrSOqZRGk78edK3C91LPrpIiPLDuDWyu3gYV83DkbbFCmnVHLnVZzxOQIgO009hSBteNv"

const stripe = require("stripe")(stripe_private_key);

const updatePaymentId = async (req, res, next) => {
  try {
    
    next()
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

module.exports = updatePaymentId