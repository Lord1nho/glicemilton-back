// src/controllers/health.controller.js

export function healthCheck(req, res) {
    console.log('Health check acionado ✅');

    res.status(200).json('oi');
}