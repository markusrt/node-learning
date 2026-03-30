import { useState } from 'react';
import ForwardPage from './pages/ForwardPage.jsx';
import BackwardPage from './pages/BackwardPage.jsx';
import './App.css';

// Die drei Kalkulationsarten als Tabs
const TABS = [
  { id: 'forward', label: 'Vorwärtskalkulation' },
  { id: 'backward', label: 'Rückwärtskalkulation' },
  { id: 'difference', label: 'Differenzkalkulation' },
];

function App() {
  // Aktiver Tab — standardmäßig Vorwärtskalkulation
  const [activeTab, setActiveTab] = useState('forward');

  return (
    <div className="app">
      <h1 className="app-title">Kalkulationsrechner</h1>
      <p className="app-subtitle">Handelskalkulation für die Wirtschaftsschule</p>

      <nav className="tab-navigation" role="tablist" aria-label="Kalkulationsarten">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            className={`tab-button ${activeTab === tab.id ? 'tab-button--active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <main className="tab-content" role="tabpanel">
        {activeTab === 'forward' && <ForwardPage />}
        {activeTab === 'backward' && <BackwardPage />}
        {activeTab === 'difference' && (
          <p className="placeholder">Differenzkalkulation — wird in Meilenstein 7 implementiert.</p>
        )}
      </main>
    </div>
  );
}

export default App;
