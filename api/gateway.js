export default function handler(req, res) {
  const { method, query } = req;

  if (method !== "GET") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  const version = query.version || "v1";

  if (version === "v1") {
    return res.status(200).json({
      message: "Gateway routing to v1",
      endpoint: "/api/v1/status",
      timestamp: new Date().toISOString()
    });
  }

  return res.status(400).json({
    error: "Invalid API version"
  });
}
