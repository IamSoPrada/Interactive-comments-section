import React, { useState } from 'react';
import { supabase } from '../supabase/supabaseClient.js';
import AuthContext from '../contexts/authContext.jsx';

function AuthProvider(props) {
  const { children } = props;

  const [token, setToken] = useState(localStorage.getItem('token'));
  const [username, setUsername] = useState(localStorage.getItem('username'));
  const [user_id, setUserId] = useState(localStorage.getItem('user_id'));
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated')
  );

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    setIsAuthenticated(null);
    setUserId(null);
    setToken(null);
    setUsername(null);
    localStorage.clear();
  };

  const setCredentials = (session) => {
    if (!session) return localStorage.clear();
    localStorage.setItem('token', session.access_token);
    localStorage.setItem('username', session.user.email.split('@')[0]);
    localStorage.setItem('user_id', session.user.id);
    localStorage.setItem('isAuthenticated', true);
    setIsAuthenticated(true);
    setToken(session.access_token);
    setUsername(session.user.email.split('@')[0]);
    setUserId(session.user.id);
  };

  const value = {
    user_id,
    username,
    token,
    isAuthenticated,
    signOut,
    setCredentials,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
