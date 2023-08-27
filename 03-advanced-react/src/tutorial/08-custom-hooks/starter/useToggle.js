import { useState } from 'react';

export default function useToggle(defaultValue) {
  const [show, setShow] = useState(defaultValue);
  function toggle() {
    setShow(!show);
  }

  return { show, toggle };
}
