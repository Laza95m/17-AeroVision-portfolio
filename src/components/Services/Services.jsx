import s from './Services.module.css';
import { UseContext } from '../../UseContext/UseContext';
import { motion } from 'framer-motion';
import SwiperService from './SwiperService/SwiperService';

const Services = () => {
  const { data, variantsTop, variantsLeft } = UseContext();
  const servicesElem = data.services;

  return (
    <section className={s.block}>
      {servicesElem && (
        <>
          <motion.div
            className={s.content_one}
            initial="initial"
            animate="animate"
            variants={variantsTop}
          >
            <motion.h3 className={s.name} variants={variantsTop}>
              {servicesElem.name}
            </motion.h3>
            <motion.h2 className={s.title} variants={variantsTop}>
              {servicesElem.title[0]}
              <b className={s.highlight}>{servicesElem.title[1]}</b>
            </motion.h2>
            <motion.p className={s.description} variants={variantsTop}>
              {servicesElem.description}
            </motion.p>
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={variantsLeft}
          >
            <SwiperService />
          </motion.div>
        </>
      )}
    </section>
  );
};

export default Services;
