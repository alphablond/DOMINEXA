import { success, error } from '../../utils/response.js';

export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      const statusData = {
        status: 'online',
        service: 'DOMINEXA Core',
        version: '1.0.0',
        timestamp: new Date(),
      };
      return success(res, statusData);
    } else {
      return error(res, 'Method Not Allowed');
    }
  } catch (err) {
    return error(res, err.message);
  }
}
