import { redirect } from 'react-router-dom';

export const getToken = () => {
  const token = localStorage.getItem('token');
  return token;
};

export function checkAuthLoader() {
  //LOADER FN HARUS RETURN SESUATU, NULL JUGA GPP, HARUS!!!
  const token = getToken();

  if (!token) return redirect('/');

  return null;
}

export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem('expiration');
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}

export function getAuthToken() {
  const token = localStorage.getItem('token');

  if (!token) {
    return null;
  }

  const tokenDuration = getTokenDuration();

  if (tokenDuration < 0) {
    return 'EXPIRED';
  }

  return token;
}
