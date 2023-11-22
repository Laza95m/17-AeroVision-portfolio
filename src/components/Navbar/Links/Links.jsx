import { UseContext } from '../../../UseContext/UseContext';
import s from './Links.module.css';
import { NavLink } from 'react-router-dom';

const Links = () => {
  const { links, adminPerson } = UseContext();

  const linkStyle = ({ isActive }) =>
    isActive ? `${s.link} ${s.active}` : s.link;

  return (
    <>
      {links?.map((link, i) => (
        <NavLink className={linkStyle} key={i} to={link.to}>
          {link.name}
        </NavLink>
      ))}
      {adminPerson && (
        <NavLink className={linkStyle} to={'/admin'}>
          Admin
        </NavLink>
      )}
    </>
  );
};

export default Links;
