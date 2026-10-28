require('dotenv').config();
const app = require('../src/app');

module.exports = (req, res) => {
  // Restore the original client request path on Vercel
  const originalPath = req.headers['x-forwarded-url'] || req.headers['x-matched-path'];
  if (originalPath) {
    req.url = originalPath;
  }
  return app(req, res);
};
