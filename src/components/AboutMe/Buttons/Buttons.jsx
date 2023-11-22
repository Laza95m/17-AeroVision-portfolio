import s from './Buttons.module.css';
import ButtonWhite from '../../../ui/ButtonWhite/ButtonWhite';
import { UseContext } from '../../../UseContext/UseContext';
import { motion } from 'framer-motion';

const Buttons = () => {
  const { data, selectSkill, setSelectSkill, variantsRight } = UseContext();
  const buttonsElem = data.aboutMe?.btn;

  return (
    <motion.div
      className={s.block}
      variants={variantsRight}
      initial="initial"
      animate="animate"
    >
      {buttonsElem?.map((el, i) => (
        <motion.div
          className={s.box}
          key={i}
          onClick={() => setSelectSkill(i)}
          variants={variantsRight}
        >
          <ButtonWhite name={el} el={i} selectSkill={selectSkill} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Buttons;
