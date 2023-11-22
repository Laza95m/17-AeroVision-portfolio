import { UseContext } from '../../UseContext/UseContext';
import { motion } from 'framer-motion';
import s from './Admin.module.css';
import Star from '../Testimonials/SwiperTestimonial/Star/Star';
import ButtonBlue from '../../ui/ButtonBlue/ButtonBlue';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Admin = () => {
  const {
    variantsLeft,
    testimonialsData,
    deleteUserById,
    getTestimonialsData,
  } = UseContext();

  useEffect(() => {
    getTestimonialsData();
  }, []);

  return (
    <motion.section animate="animate" initial="initial">
      <motion.div className={s.container_one} variants={variantsLeft}>
        <Link to={`/admin/add-new-user`}>
          <ButtonBlue name={'Add'} />
        </Link>
      </motion.div>
      <motion.div className={s.container_two}>
        {testimonialsData.map((el) => (
          <motion.div
            className={s.container}
            key={el.id}
            variants={variantsLeft}
          >
            <motion.img
              className={s.img}
              src={el.img.src}
              alt={el.img.alt}
              variants={variantsLeft}
            />
            <motion.div className={s.block} variants={variantsLeft}>
              <Star count={el.star} />
            </motion.div>
            <motion.p className={s.description} variants={variantsLeft}>
              {el.description}
            </motion.p>
            <motion.h4 className={s.name} variants={variantsLeft}>
              {el.name}
            </motion.h4>
            <motion.p className={s.position} variants={variantsLeft}>
              {el.position}
            </motion.p>
            <Link to={`/admin/${el.id}`}>
              <ButtonBlue name={'Change'} />
            </Link>
            <motion.div
              onClick={() => deleteUserById(el.id)}
              variants={variantsLeft}
            >
              <ButtonBlue name={'Delete'} />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Admin;
