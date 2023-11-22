import { UseContext } from '../../UseContext/UseContext';
import s from './ContactMe.module.css';
import FormRequest from './FormRequest/FormRequest';
import Info from './Info/Info';
import { motion } from 'framer-motion';

const ContactMe = () => {
  const { variantsTop, contactMeVariants, data } = UseContext();
  const contactMeElem = data.contactMe;

  return (
    <motion.section
      className={s.section}
      animate="animate"
      initial="initial"
      variants={contactMeVariants}
    >
      <motion.div className={s.container} variants={variantsTop}>
        <div className={s.block_one}>
          <motion.h3 className={s.name} variants={variantsTop}>
            {contactMeElem?.name}
          </motion.h3>
          <motion.h2 className={s.title} variants={variantsTop}>
            {contactMeElem?.title}
          </motion.h2>
        </div>
        <div className={s.block_two}>
          <Info />
          <FormRequest />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ContactMe;
