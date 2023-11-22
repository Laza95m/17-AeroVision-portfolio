import { UseContext } from '../../../UseContext/UseContext';
import s from './Info.module.css';
import { motion } from 'framer-motion';

const Info = () => {
  const { data, variantsLeft } = UseContext();
  const infoElem = data.services.info;

  return (
    <>
      {infoElem.data.map((el) => (
        <div key={el.id} className={s.block}>
          <motion.img
            className={s.front_img}
            variants={variantsLeft}
            src={infoElem.src}
            alt={infoElem.alt}
          />
          <motion.h2 className={s.title} variants={variantsLeft}>
            {el.title}
          </motion.h2>
          <motion.p className={s.description} variants={variantsLeft}>
            {el.description}
          </motion.p>
          <motion.div className={s.content} variants={variantsLeft}>
            <motion.p className={s.text} variants={variantsLeft}>
              {infoElem.text}
            </motion.p>
            <motion.img
              className={s.arrow_img}
              variants={variantsLeft}
              src={infoElem.img.src}
              alt={infoElem.img.alt}
            />
          </motion.div>
        </div>
      ))}
    </>
  );
};

export default Info;
