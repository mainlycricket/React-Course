import { useEffect, useState } from 'react';

export default function useFetchUser(url) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser(url);
  }, []);

  async function fetchUser(url) {
    try {
      const resp = await fetch(url);
      if (!resp.ok) {
        setIsError(true);
        setIsLoading(false);
        return;
      }
      const user = await resp.json();
      setUser(user);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  }

  return { isError, isLoading, user };
}
