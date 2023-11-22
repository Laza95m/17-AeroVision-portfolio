import { Link } from 'react-router-dom';
import { UseContext } from '../../../UseContext/UseContext';
import ButtonBlue from '../../../ui/ButtonBlue/ButtonBlue';
import ButtonWhite from '../../../ui/ButtonWhite/ButtonWhite';
import s from './HeroSection.module.css';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const { data, variantsLeft, variantsRight } = UseContext();
  const heroElem = data.home?.heroSection;

  return (
    <section className={s.container}>
      {heroElem && (
        <>
          <motion.div
            className={s.block_one}
            initial="initial"
            animate="animate"
            variants={variantsLeft}
          >
            <div className={s.content_one}>
              <motion.h3 className={s.name} variants={variantsLeft}>
                {heroElem.name}
              </motion.h3>
              <motion.h1 className={s.title} variants={variantsLeft}>
                {heroElem.title[0]}
                <br />
                <b className={s.highlight}>{heroElem.title[1]}</b>
                <br />
                {heroElem.title[3]}
              </motion.h1>
              <motion.p className={s.description} variants={variantsLeft}>
                {heroElem.description}
              </motion.p>
            </div>
            <motion.div className={s.content_two} variants={variantsLeft}>
              <Link to={'/contact-me'}>
                <ButtonBlue name={heroElem.btnName[0]} />
              </Link>
              <ButtonWhite name={heroElem.btnName[1]} img={heroElem.btnImg} />
            </motion.div>
          </motion.div>
          <motion.div
            className={s.block_two}
            variants={variantsRight}
            initial="initial"
            animate="animate"
          >
            <img
              className={s.img}
              src={heroElem.myImg.src}
              alt={`${heroElem.myImg.alt} broken`}
            />
          </motion.div>
        </>
      )}
    </section>
  );
};

export default HeroSection;
