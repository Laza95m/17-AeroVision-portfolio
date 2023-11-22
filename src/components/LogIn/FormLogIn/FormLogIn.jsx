import { useForm } from 'react-hook-form';
import { UseContext } from '../../../UseContext/UseContext';
import s from './FormLogIn.module.css';
import { motion } from 'framer-motion';

const FormLogIn = () => {
  const { data, variantsLeft, checkLogIn } = UseContext();
  const inpName = data.logIn?.input.name;
  const inpPassword = data.logIn?.input.password;
  const adminData = data.admin;

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    checkLogIn(data, adminData);
  };

  return (
    <>
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className={s.form}
        variants={variantsLeft}
      >
        <motion.div className={s.block} variants={variantsLeft}>
          <motion.img
            className={s.img}
            src={inpName?.src}
            alt={inpName?.alt}
            variants={variantsLeft}
          />
          <motion.input
            {...register('name')}
            className={s.input}
            type={inpName?.type}
            placeholder={inpName?.placeholder}
            variants={variantsLeft}
          />
        </motion.div>
        <motion.div className={s.block} variants={variantsLeft}>
          <motion.img
            className={s.img}
            src={inpPassword?.src}
            alt={inpPassword?.alt}
            variants={variantsLeft}
          />
          <motion.input
            {...register('password')}
            className={s.input}
            type={inpPassword?.type}
            placeholder={inpPassword?.placeholder}
            variants={variantsLeft}
            autoComplete="off"
          />
        </motion.div>
        <motion.input
          className={s.btn}
          type="submit"
          value="NEXT"
          variants={variantsLeft}
        />
      </motion.form>
    </>
  );
};

export default FormLogIn;
