const express = require('express');

const router = express.Router();

// Status-Endpunkt: Prüft ob der Server läuft
router.get('/status', (_req, res) => {
  res.json({ status: 'ok' });
});

// Vorwärtskalkulation — noch nicht implementiert
router.post('/forward', (_req, res) => {
  res.status(501).json({ message: 'Noch nicht implementiert' });
});

// Rückwärtskalkulation — noch nicht implementiert
router.post('/backward', (_req, res) => {
  res.status(501).json({ message: 'Noch nicht implementiert' });
});

// Differenzkalkulation — noch nicht implementiert
router.post('/difference', (_req, res) => {
  res.status(501).json({ message: 'Noch nicht implementiert' });
});

module.exports = router;
