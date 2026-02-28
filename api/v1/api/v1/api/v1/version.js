export default function handler(req, res) {
  return res.status(200).json({
    name: "Dominexa",
    version: "1.0.0",
    api: "v1"
  });
}
