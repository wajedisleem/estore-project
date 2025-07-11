import { useEffect } from 'react';
import { useAuth } from '../../auth/AuthProvider';

import styles from './AuthButton.module.css';

const AuthButton = ({ mobile = false }) => {
  const { loading, login, verify, currentUser, logout } = useAuth();

  useEffect(() => {
    verify();
  }, [verify]);

  return (
    <>
      {!loading && currentUser && (
        <a onClick={logout} className={`${styles['btn-auth']} ${mobile && styles['btn-auth-mobile']}`}>
          Logout
        </a>
      )}
      {!loading && !currentUser && (
        <a onClick={login} className={`${styles['btn-auth']} ${mobile && styles['btn-auth-mobile']}`}>
          <img src="/images/icons/google.svg" alt="Google Icon" />
          <span>Login</span>
        </a>
      )}
    </>
  );
};
export { AuthButton };
