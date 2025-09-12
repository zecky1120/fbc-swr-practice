const express = require('express');

const app = express();
const PORT = 3001;

app.get('/:status', (req, res) => {
  const status = parseInt(req.params.status);
  const sleep = parseInt(req.query.sleep) || 0;
  res.set({ 'Access-Control-Allow-Origin': '*' });
  
  // 有効なHTTPステータスコードかチェック
  if (isNaN(status) || status < 100 || status > 599) {
    return res.status(400).json({
      error: 'Invalid status code',
      description: 'Status code must be between 100 and 599'
    });
  }

  // sleepパラメータがある場合は指定時間待機
  if (sleep > 0) {
    setTimeout(() => {
      res.status(status).json({
        code: status,
        description: getStatusDescription(status)
      });
    }, sleep);
  } else {
    res.status(status).json({
      code: status,
      description: getStatusDescription(status)
    });
  }
});

function getStatusDescription(status) {
  const descriptions = {
    200: 'OK',
    201: 'Created',
    204: 'No Content',
    301: 'Moved Permanently',
    302: 'Found',
    304: 'Not Modified',
    400: 'Bad Request',
    401: 'Unauthorized',
    403: 'Forbidden',
    404: 'Not Found',
    405: 'Method Not Allowed',
    408: 'Request Timeout',
    429: 'Too Many Requests',
    500: 'Internal Server Error',
    502: 'Bad Gateway',
    503: 'Service Unavailable',
    504: 'Gateway Timeout'
  };
  
  return descriptions[status] || `Status ${status}`;
}

// ルートエンドポイント
app.get('/', (req, res) => {
  res.json({
    message: 'Mock HTTP Status Server',
    description: 'Use /{status} to get a specific HTTP status response',
    examples: [
      '/200',
      '/404',
      '/500',
      '/200?sleep=2000'
    ]
  });
});

app.listen(PORT, () => {
  console.log(`Mock API server running at http://localhost:${PORT}`);
  console.log('Examples:');
  console.log(`  GET http://localhost:${PORT}/200`);
  console.log(`  GET http://localhost:${PORT}/404`);
  console.log(`  GET http://localhost:${PORT}/200?sleep=2000`);
}); 