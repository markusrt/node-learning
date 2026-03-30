const express = require('express');
const { calculateForward, calculateBackward, calculateDifference } = require('./calculation');
const { validateInput, FORWARD_FIELDS, BACKWARD_FIELDS, DIFFERENCE_FIELDS } = require('./validation');

const router = express.Router();

// Status-Endpunkt: Prüft ob der Server läuft
router.get('/status', (_req, res) => {
  res.json({ status: 'ok' });
});

// Vorwärtskalkulation: Berechnet vom Listeneinkaufspreis zum Listenverkaufspreis
router.post('/forward', (req, res) => {
  try {
    // Eingaben validieren, bevor die Berechnung durchgeführt wird
    const validation = validateInput(req.body, FORWARD_FIELDS);
    if (!validation.valid) {
      return res.status(400).json({ errors: validation.errors });
    }

    const result = calculateForward(req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({ errors: [{ message: 'Ein unerwarteter Fehler ist aufgetreten' }] });
  }
});

// Rückwärtskalkulation: Berechnet vom Listenverkaufspreis zum Listeneinkaufspreis
router.post('/backward', (req, res) => {
  try {
    const validation = validateInput(req.body, BACKWARD_FIELDS);
    if (!validation.valid) {
      return res.status(400).json({ errors: validation.errors });
    }

    const result = calculateBackward(req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({ errors: [{ message: 'Ein unerwarteter Fehler ist aufgetreten' }] });
  }
});

// Differenzkalkulation: Ermittelt den Gewinn bei gegebenem Einkaufs- und Verkaufspreis
router.post('/difference', (req, res) => {
  try {
    const validation = validateInput(req.body, DIFFERENCE_FIELDS);
    if (!validation.valid) {
      return res.status(400).json({ errors: validation.errors });
    }

    const result = calculateDifference(req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({ errors: [{ message: 'Ein unerwarteter Fehler ist aufgetreten' }] });
  }
});

module.exports = router;
