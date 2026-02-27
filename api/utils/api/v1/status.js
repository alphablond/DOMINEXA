import { success } from "../utils/response.js";

export default function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  return success(res, {
    status: "online",
    service: "DOMINEXA",
    version: "1.0.0"
  });
}
