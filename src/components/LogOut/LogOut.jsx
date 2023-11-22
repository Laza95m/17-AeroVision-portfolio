import s from './LogOut.module.css';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { UseContext } from '../../UseContext/UseContext';

const LogOut = () => {
  const { data, variantsLeft, variantsRight, logOut } = UseContext();
  const logOutElem = data.logOut;

  const { handleSubmit } = useForm();

  const onSubmit = () => {
    logOut();
  };

  return (
    <motion.section className={s.section} animate="animate" initial="initial">
      <motion.div className={s.container_one} variants={variantsRight}>
        <motion.h2 className={s.title} variants={variantsRight}>
          {logOutElem?.title}
        </motion.h2>
        <motion.p className={s.text} variants={variantsRight}>
          {logOutElem?.text}
        </motion.p>
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className={s.form}
          variants={variantsRight}
        >
          <motion.input
            className={s.btn}
            type="submit"
            value="LOG OUT"
            variants={variantsRight}
          />
        </motion.form>
      </motion.div>
      <motion.div className={s.container_two} variants={variantsLeft}>
        <motion.img
          className={s.logInImg}
          src={logOutElem?.img.src}
          alt={logOutElem?.img.alt}
          variants={variantsLeft}
        />
      </motion.div>
    </motion.section>
  );
};

export default LogOut;
