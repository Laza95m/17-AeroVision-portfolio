import { motion } from 'framer-motion';
import s from './ServicesPopUp.module.css';
import { UseContext } from '../../../UseContext/UseContext';

const ServicesPopUp = () => {
  const {
    isServicesPopUp,
    closeServicesPopUp,
    stopPropagation,
    servicesPopUpVariants,
    data,
  } = UseContext();

  const servicesElem = data.services.info.data;

  return (
    <>
      <motion.div
        className={s.container}
        animate={isServicesPopUp ? 'open' : 'closed'}
        variants={servicesPopUpVariants}
        onClick={closeServicesPopUp}
      >
        <div className={s.block} onClick={stopPropagation}>
          <div className={s.content_one}>
            <div className={s.close} onClick={closeServicesPopUp}>
              <span className={s.line}></span>
              <span className={s.line}></span>
            </div>
          </div>
          {servicesElem
            .filter((el) => el.id === isServicesPopUp)
            .map((info) => (
              <motion.div
                className={s.content_two}
                variants={servicesPopUpVariants}
                key={info.id}
              >
                <h2 className={s.title}>{info.title}</h2>
                <p className={s.description}>{info.description}</p>
              </motion.div>
            ))}
        </div>
      </motion.div>
    </>
  );
};

export default ServicesPopUp;
