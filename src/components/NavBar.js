import { Link } from 'react-router-dom';
import logo from '../assets/testify.png';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const { t } = useTranslation();
  const auth = useSelector((store) => store);

  return (
    <nav className="navbar navbar-expand navbar-light bg-light shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/" title="Home">
          <img src={logo} alt="Testify" width="60" />
          Testify
        </Link>
        <ul className="navbar-nav">
          {!auth.isLoggedIn && (
            <>
              <Link className="nav-link" to="/signup">
                {t('signUp')}
              </Link>
              <Link className="nav-link" to="/login">
                {t('login')}
              </Link>
            </>
          )}
          {auth.isLoggedIn && (
            <Link className="nav-link" to={`/user/${auth.id}`}>
              My Profile
            </Link>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
