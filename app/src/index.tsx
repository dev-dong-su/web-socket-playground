import React from 'react';
import App from './App';

import { createRoot } from 'react-dom/client';

const Root = () => {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<Root />);
