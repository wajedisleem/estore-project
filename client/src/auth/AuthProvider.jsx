import axios from 'axios';
import { useCallback } from 'react';
import { createContext, useState, useContext } from 'react';
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, provider } from './Firebase';

const AUTH_LOCAL_STORAGE_KEY = 'estore-auth';
const BASE_URL = import.meta.env.VITE_API_URL;

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const login = useCallback(async () => {

    try {
      const result = await signInWithPopup(auth, provider);
      const token = await result.user.getIdToken();
      console.log('Firebase Token:', token);
      axios.post(`${BASE_URL}/login`, { token })
        .then((response) => {
          localStorage.setItem(AUTH_LOCAL_STORAGE_KEY, response.data.token);
          setCurrentUser(response.data.user);
        })
        .catch(() => {
          localStorage.removeItem(AUTH_LOCAL_STORAGE_KEY);
          setCurrentUser(null);
        })
        .finally(() => {
          setLoading(false);
        });

    } catch (err) {
      console.error(err.message);
    }


    setLoading(true);
    axios
      .post(`${BASE_URL}/login`)
      .then((response) => {
        localStorage.setItem(AUTH_LOCAL_STORAGE_KEY, response.data.token);
        setCurrentUser(response.data.user);
      })
      .catch(() => {
        localStorage.removeItem(AUTH_LOCAL_STORAGE_KEY);
        setCurrentUser(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const verify = useCallback(() => {
    let token = localStorage.getItem(AUTH_LOCAL_STORAGE_KEY);
    if (token) {
      setLoading(true);
      axios
        .get(`${BASE_URL}/verify`)
        .then((response) => {
          setCurrentUser(response.data);
        })
        .catch(() => {
          localStorage.removeItem(AUTH_LOCAL_STORAGE_KEY);
          setCurrentUser(null);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setCurrentUser(null);
    }
  }, []);

  const logout = useCallback(() => {
    signOut(auth);
    localStorage.removeItem(AUTH_LOCAL_STORAGE_KEY);
    setCurrentUser(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        loading,
        currentUser,
        login,
        logout,
        verify
      }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

export { AuthProvider, useAuth };
