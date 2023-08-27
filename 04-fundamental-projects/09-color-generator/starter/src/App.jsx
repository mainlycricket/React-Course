import { useState } from 'react';
import Values from 'values.js';
import { ToastContainer, toast } from 'react-toastify';

import ColorList from './ColorList';
import Form from './Form';

const App = () => {
  const [colors, setColors] = useState(new Values('#f15025').all(10));

  function toggleColor(color) {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (error) {
      toast.error('Invalid color', error.message);
    }
  }

  return (
    <main>
      <Form toggleColor={toggleColor} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  );
};
export default App;
