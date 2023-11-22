import { Link } from 'react-router-dom';
import { UseContext } from '../../../UseContext/UseContext';
import ButtonBlue from '../../../ui/ButtonBlue/ButtonBlue';
import Links from '../Links/Links';
import s from './BurgerPopUp.module.css';
import { motion } from 'framer-motion';

const BurgerPopUp = () => {
  const {
    isBurgerPopUp,
    closeBurgerPopUp,
    stopPropagation,
    burgerVariants,
    adminPerson,
  } = UseContext();

  return (
    <motion.aside
      onClick={closeBurgerPopUp}
      className={s.popup}
      animate={isBurgerPopUp ? 'open' : 'closed'}
      variants={burgerVariants}
    >
      <div onClick={stopPropagation} className={s.block}>
        <div className={s.content_one}>
          <motion.div
            onClick={closeBurgerPopUp}
            className={s.close}
            variants={burgerVariants}
          >
            <span className={s.line}></span>
            <span className={s.line}></span>
          </motion.div>
        </div>
        <motion.div className={s.content_two} variants={burgerVariants}>
          <Links />
        </motion.div>
        <motion.div className={s.content_three} variants={burgerVariants}>
          {/* <Link to={'/log-in'}>
            <ButtonBlue name={'Log in'} />
          </Link> */}
          <Link to={adminPerson ? '/log-out' : '/log-in'}>
            <ButtonBlue name={adminPerson ? 'Log out' : 'Log in'} />
          </Link>
        </motion.div>
      </div>
    </motion.aside>
  );
};

export default BurgerPopUp;
