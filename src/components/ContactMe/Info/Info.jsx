import { UseContext } from '../../../UseContext/UseContext';
import s from './Info.module.css';
import { motion } from 'framer-motion';

const Info = () => {
  const { variantsLeft, data } = UseContext();
  const infoElem = data.contactMe?.info;

  return (
    <motion.div className={s.container} variants={variantsLeft}>
      <div className={s.block}>
        <div className={s.box}>
          <motion.h4 className={s.name} variants={variantsLeft}>
            {infoElem?.name}
          </motion.h4>
          <motion.h2 className={s.phone} variants={variantsLeft}>
            {infoElem?.phone}
          </motion.h2>
        </div>
        <div className={s.box}>
          <motion.p className={s.text} variants={variantsLeft}>
            <b className={s.bold}>{infoElem?.address[0]}</b>
            {infoElem?.address[1]}
          </motion.p>
          <motion.p className={s.text} variants={variantsLeft}>
            <b className={s.bold}>{infoElem?.email[0]}</b>
            {infoElem?.email[1]}
          </motion.p>
          <motion.p className={s.text} variants={variantsLeft}>
            <b className={s.bold}>{infoElem?.fax[0]}</b>
            {infoElem?.fax[1]}
          </motion.p>
          <motion.p className={s.text} variants={variantsLeft}>
            <b className={s.bold}>{infoElem?.workHour[0]}</b>
            {infoElem?.workHour[1]}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default Info;
