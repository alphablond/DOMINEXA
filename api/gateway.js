// DOMINEXA Secure Gateway
// Zero dependency. Edge ready. HMAC verified.

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const secret = process.env.DOMINEXA_SECRET;

  if (!secret) {
    return res.status(500).json({ error: "Server misconfigured" });
  }

  const signature = req.headers["x-dominexa-signature"];
  if (!signature) {
    return res.status(401).json({ error: "Missing signature" });
  }

  const crypto = await import("crypto");

  const body = JSON.stringify(req.body);
  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(body)
    .digest("hex");

  if (signature !== expectedSignature) {
    return res.status(403).json({ error: "Invalid signature" });
  }

  // CORE EXECUTION
  const response = {
    status: "verified",
    timestamp: Date.now(),
    convergence: "active"
  };

  return res.status(200).json(response);
}
