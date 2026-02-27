import { success, error } from '../utils/response'; 

export default async function handler(req, res) {
    try {
        if (req.method === 'GET') {
            const statusData = {
                status: 'online',
                service: 'DOMINEXA Core',
                version: '1.0.0',
                timestamp: new Date().toISOString(),
            };

            return success(res, statusData);  // Chamando função de sucesso
        } else {
            return error(res, 'Method Not Allowed');  // Retornando erro caso o método não seja GET
        }
    } catch (err) {
        return error(res, 'Internal Server Error');
    }
}
