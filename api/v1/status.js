import { success } from "../utils/response.js";

export default function handler(req, res) {
  return success(res, {
    service: "Dominexa API",
    version: "v1",
    status: "operational"
  });
}
