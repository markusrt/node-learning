const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Middleware einrichten
app.use(cors());
app.use(express.json());

// Test-Endpunkt, um zu prüfen ob der Server läuft
app.get('/api/status', (_req, res) => {
  res.json({ status: 'ok' });
});

// Server starten
app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});

module.exports = app;
