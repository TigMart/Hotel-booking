import axios from 'axios';

export const allHotels = async () =>
  await axios.get(`${import.meta.env.VITE_APP_API}/hotels`);
