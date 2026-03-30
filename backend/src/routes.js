const express = require('express');
const { calculateForward, calculateBackward } = require('./calculation');

const router = express.Router();

// Status-Endpunkt: Prüft ob der Server läuft
router.get('/status', (_req, res) => {
  res.json({ status: 'ok' });
});

// Vorwärtskalkulation: Berechnet vom Listeneinkaufspreis zum Listenverkaufspreis
router.post('/forward', (req, res) => {
  try {
    const result = calculateForward(req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({ errors: [{ message: 'Ein unerwarteter Fehler ist aufgetreten' }] });
  }
});

// Rückwärtskalkulation: Berechnet vom Listenverkaufspreis zum Listeneinkaufspreis
router.post('/backward', (req, res) => {
  try {
    const result = calculateBackward(req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({ errors: [{ message: 'Ein unerwarteter Fehler ist aufgetreten' }] });
  }
});

// Differenzkalkulation — noch nicht implementiert
router.post('/difference', (_req, res) => {
  res.status(501).json({ message: 'Noch nicht implementiert' });
});

module.exports = router;
