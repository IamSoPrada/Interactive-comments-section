import { createContext } from 'react';

export default createContext({
  user_id: '',
  username: '',
  token: '',
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  setToken: () => {},
  setUsername: () => {},
  setUserId: () => {},
});
