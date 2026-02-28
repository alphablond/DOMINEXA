export default function handler(req, res) {
  return res.status(200).json({
    status: "ok",
    project: "Dominexa",
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
}
