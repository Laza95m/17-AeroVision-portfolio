import { motion, AnimatePresence } from 'framer-motion';
import { UseContext } from '../../../UseContext/UseContext';
import s from './Skills.module.css';

const Skills = () => {
  const { data, selectSkill, skillVariants } = UseContext();
  const skillsElem = data.aboutMe?.skills;

  return (
    <motion.div
      className={s.block}
      key={selectSkill}
      initial="initial"
      animate="animate"
      variants={skillVariants}
    >
      {skillsElem?.[selectSkill].map((skill, i) => (
        <div key={i} className={s.content}>
          <motion.h3 className={s.title} variants={skillVariants}>
            {skill.title}
          </motion.h3>
          <motion.div className={s.line} variants={skillVariants}>
            <motion.div
              className={`${s.progress}`}
              variants={skillVariants}
              style={{ width: `${skill.progress}%` }}
            ></motion.div>
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
};

export default Skills;
