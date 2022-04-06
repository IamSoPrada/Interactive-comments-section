import React, { useEffect, useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthContext from '../../contexts/authContext.jsx';
import { supabase } from '../../supabase/supabaseClient';
import AuthorizationPage from '../../pages/AuthorizationPage';
import NotFoundPage from '../../pages/NotFoundPage';
import Comments from '../Comments';
import PrivateRoute from '../PrivateRoute';
import Layout from '../Layout';

function App() {
  const { setCredentials, token } = useContext(AuthContext);
  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      setCredentials(session);
    });
  }, [token]);
  if (!token) return <AuthorizationPage />;
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route index element={<Comments />} />
        </Route>
        <Route path='login' element={<AuthorizationPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
