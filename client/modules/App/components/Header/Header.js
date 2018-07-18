import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

// Import Style
import styles from './Header.css';

function logout() {
  localStorage.removeItem('jwtToken');
  window.location.reload();
}

export function Header(props, context) {

  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <h1 className={styles['site-title']}>
          <Link><span>Shopping Made Easy!</span></Link>
        </h1>
        <button className={styles['logout-button']} onClick={logout}> Logout </button>
        <Link className={styles['view-cart-button']} to={'/cart'}> View Cart </Link>

      </div>
    </div>
  );
}

Header.contextTypes = {
  router: PropTypes.object,
};

Header.propTypes = {
  toggleAddPost: PropTypes.func.isRequired,
};

export default Header;
