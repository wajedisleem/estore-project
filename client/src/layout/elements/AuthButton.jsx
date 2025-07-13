import { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
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
          <FormattedMessage id="Layout.Logout" />
        </a>
      )}
      {!loading && !currentUser && (
        <a onClick={login} className={`${styles['btn-auth']} ${mobile && styles['btn-auth-mobile']}`}>
          <img src="/images/icons/google.svg" alt="Google Icon" />
          <span>
            <FormattedMessage id="Layout.Login" />
          </span>
        </a>
      )}
    </>
  );
};
export { AuthButton };
