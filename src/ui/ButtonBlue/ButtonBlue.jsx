import s from './ButtonBlue.module.css';

const ButtonBlue = ({ name }) => {
  return <button className={s.btn}>{name}</button>;
};

export default ButtonBlue;
