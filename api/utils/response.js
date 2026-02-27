export function success(res, data = {}) {
  return res.status(200).json({
    success: true,
    data,
    timestamp: new Date().toISOString(),
  });
}

export function error(res, message = '') {
  return res.status(500).json({
    success: false,
    error: message,
    timestamp: new Date().toISOString(),
  });
}
