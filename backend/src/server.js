const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const PORT = 3001;

// Middleware einrichten
app.use(cors());
app.use(express.json());

// Alle /api-Routen an den Router delegieren
app.use('/api', routes);

// Server starten
app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});

module.exports = app;
