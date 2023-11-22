import SwiperTestimonial from './SwiperTestimonial/SwiperTestimonial';
import { motion } from 'framer-motion';
import s from './Testimonials.module.css';
import { UseContext } from '../../UseContext/UseContext';
import { useEffect } from 'react';

const Testimonials = () => {
  const { variantsLeft, data, variantsTop, getTestimonialsData, isLoading } =
    UseContext();

  useEffect(() => {
    getTestimonialsData();
  }, []);

  const testimonialsElem = data.testimonials;

  return (
    <>
      {testimonialsElem && (
        <section className={s.container}>
          <motion.div
            className={s.block}
            animate="animate"
            initial="initial"
            variants={variantsTop}
          >
            <motion.h3 className={s.name} variants={variantsTop}>
              {testimonialsElem.name}
            </motion.h3>
            <motion.h2 className={s.title} variants={variantsTop}>
              {testimonialsElem.title}
            </motion.h2>
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={variantsLeft}
          >
            <SwiperTestimonial />
          </motion.div>
        </section>
      )}
    </>
  );
};

export default Testimonials;
