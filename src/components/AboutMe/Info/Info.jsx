import s from './Info.module.css';
import { UseContext } from '../../../UseContext/UseContext';
import { motion } from 'framer-motion';

const Info = () => {
  const { data, variantsTop } = UseContext();
  const infoElem = data.aboutMe;

  return (
    <motion.div
      className={s.block}
      variants={variantsTop}
      initial="initial"
      animate="animate"
    >
      {infoElem && (
        <>
          <motion.h3 className={s.name} variants={variantsTop}>
            {infoElem.name}
          </motion.h3>
          <motion.h2 className={s.title} variants={variantsTop}>
            {infoElem.title[0]}
            <br />
            <b className={s.highlight}>{infoElem.title[1]}</b>
          </motion.h2>
          <motion.p className={s.description} variants={variantsTop}>
            {infoElem.description[0]}
            <b className={s.highlight}>{infoElem.description[1]}</b>
            {infoElem.description[2]}
            <b className={s.highlight}>{infoElem.description[3]}</b>
            {infoElem.description[4]}
          </motion.p>
        </>
      )}
    </motion.div>
  );
};

export default Info;
