import { UseContext } from '../../../UseContext/UseContext';
import s from './SoftwareSection.module.css';
import { motion } from 'framer-motion';

const SoftwareSection = () => {
  const { data, softwareVariants } = UseContext();
  const softwareIcons = data.home?.softwareSection;

  return (
    <motion.section
      className={s.block}
      initial="initial"
      animate="animate"
      variants={softwareVariants}
    >
      <div className={s.content}>
        {softwareIcons?.map((icon, i) => (
          <motion.img
            key={i}
            className={s.img}
            src={icon.src}
            alt={`${icon.alt} broken`}
            variants={softwareVariants}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default SoftwareSection;
