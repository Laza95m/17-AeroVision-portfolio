import { Link, NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
import Links from './Links/Links';
import BurgerPopUp from './BurgerPopUp/BurgerPopUp';
import { UseContext } from '../../UseContext/UseContext';
import ButtonBlue from '../../ui/ButtonBlue/ButtonBlue';

const Navbar = () => {
  const { openBurgerPopUp, adminPerson } = UseContext();

  return (
    <nav className={s.nav}>
      <BurgerPopUp />
      <NavLink to="/">
        <img className={s.logo} src="/logoBlue.svg" alt="logo-image" />
      </NavLink>
      <div className={s.block_one}>
        <div className={s.links}>
          <Links />
        </div>
        <Link to={adminPerson ? '/log-out' : '/log-in'}>
          <ButtonBlue name={adminPerson ? 'Log out' : 'Log in'} />
        </Link>
      </div>
      <div onClick={openBurgerPopUp} className={s.block_two}>
        <div className={s.open}>
          <span className={s.line}></span>
          <span className={s.line}></span>
          <span className={s.line}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
