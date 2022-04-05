import React, { useState, useMemo } from 'react';
import { supabase } from '../supabaseClient.js';
import AuthContext from '../contexts/authContext.jsx';

function AuthProvider(props) {
  const { children } = props;

  const [token, setToken] = useState(localStorage.getItem('token'));
  const [username, setUsername] = useState(localStorage.getItem('username'));
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated')
  );

  const signOut = () => {
    setIsAuthenticated(null);
    setToken(null);
    setUsername(null);
    localStorage.clear();
    supabase.auth.signOut();
  };

  const setCredentials = (session) => {
    if (!session) return;
    localStorage.setItem('token', session.access_token);
    localStorage.setItem('username', session.user.email);
    localStorage.setItem('isAuthenticated', true);
    setIsAuthenticated(true);
    setToken(session.access_token);
    setUsername(session.user.email);
  };

  const value = {
    username,
    token,
    isAuthenticated,
    setIsAuthenticated,
    setToken,
    setUsername,
    signOut,
    setCredentials,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
