import crypto from 'crypto';

export const generateEsewaSignature = (req, res) => {
  try {
    const { total_amount, transaction_uuid, product_code } = req.body;

    if (!total_amount || !transaction_uuid || !product_code) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const secretKey = process.env.ESEWA_SECRET_KEY; // Add this in your .env
    const signaturePayload = `${total_amount},${transaction_uuid},${product_code}`;
    const signature = crypto.createHmac('sha256', secretKey).update(signaturePayload).digest('hex');

    res.json({ signature });
  } catch (error) {
    console.error("Error generating signature:", error.message);
    res.status(500).json({ message: "Server error generating signature" });
  }
};
