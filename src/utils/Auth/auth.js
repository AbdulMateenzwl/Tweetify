export default function isAuthenticated() {
  const token = localStorage.getItem('loggedUserId');
  return token !== null;
}