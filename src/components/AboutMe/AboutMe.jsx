import s from './AboutMe.module.css';
import Info from './Info/Info';
import Buttons from './Buttons/Buttons';
import Skills from './Skills/Skills';
import { UseContext } from '../../UseContext/UseContext';
import { motion } from 'framer-motion';

const AboutMe = () => {
  const { data, variantsLeft } = UseContext();
  const aboutMeElem = data.aboutMe?.myImg;

  return (
    <section className={s.block}>
      <motion.div
        className={s.content_one}
        initial="initial"
        animate="animate"
        variants={variantsLeft}
      >
        <img
          className={s.img}
          src={aboutMeElem?.src}
          alt={`${aboutMeElem?.alt} broken`}
        />
      </motion.div>
      <div className={s.content_two}>
        <Info />
        <Buttons />
        <Skills />
      </div>
    </section>
  );
};

export default AboutMe;
