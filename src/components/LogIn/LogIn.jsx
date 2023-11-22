import { UseContext } from '../../UseContext/UseContext';
import FormLogIn from './FormLogIn/FormLogIn';
import s from './LogIn.module.css';
import { motion } from 'framer-motion';

const LogIn = () => {
  const { data, variantsLeft, variantsRight } = UseContext();
  const logInElem = data.logIn;

  return (
    <motion.section className={s.section} animate="animate" initial="initial">
      <motion.div className={s.container_one} variants={variantsLeft}>
        <motion.h2 className={s.title} variants={variantsLeft}>
          {logInElem?.title}
        </motion.h2>
        <motion.p className={s.text} variants={variantsLeft}>
          {logInElem?.text}
        </motion.p>
        <FormLogIn />
      </motion.div>
      <motion.div className={s.container_two} variants={variantsRight}>
        <motion.img
          className={s.logInImg}
          src={logInElem?.img.src}
          alt={logInElem?.img.alt}
          variants={variantsRight}
        />
      </motion.div>
    </motion.section>
  );
};

export default LogIn;
