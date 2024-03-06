const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getHello = async () => {
  const data = (await fetch(`${BASE_URL}/`)).json();
  return data;
};
