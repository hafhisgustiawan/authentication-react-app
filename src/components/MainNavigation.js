import { NavLink, redirect, useSubmit } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import NewsletterSignup from './NewsletterSignup';

function MainNavigation() {
  const submit = useSubmit();
  const logoutHandler = () => {
    // routing /logout sudah disetting menggunakan sebuah action, cek app js
    submit(null, { method: 'post', action: '/logout' });
  };

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/newsletter"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Newsletter
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/auth?mode=login"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Authentication
            </NavLink>
          </li>
          <li>
            {/*Ini cara untuk trigger action tanpa harus ada element pada suatu routing, bisa juga pakai useSubmit yang merupakan bentuk imperative dari component Form ini */}
            {/* <Form action="/logout" method="post">
              <button>Logout</button>
            </Form> */}
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
}

export default MainNavigation;
