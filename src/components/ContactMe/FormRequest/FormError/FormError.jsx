import s from './FormError.module.css';

const FormError = ({ message }) => {
  return <div className={s.error}>{message}</div>;
};

export default FormError;
