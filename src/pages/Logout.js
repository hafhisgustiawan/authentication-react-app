import { redirect } from 'react-router-dom';

export function action() {
  localStorage.removeItem('token');
  localStorage.removeItem('expiration');
  // btn redirect ini gabisa digunakan di dalam component function, sebagai gantinya bisa pake link atau navLink di component
  return redirect('/');
}
