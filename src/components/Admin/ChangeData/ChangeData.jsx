import s from './ChangeData.module.css';
import { useParams } from 'react-router-dom';
import { UseContext } from '../../../UseContext/UseContext';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import FormError from '../../ContactMe/FormRequest/FormError/FormError';

const ChangeData = () => {
  const {
    testimonialsDataById,
    getUsersDataById,
    putUserById,
    variantsTop,
    validSrc,
    validAlt,
    validStar,
    validDescription,
    validUserName,
    validPosition,
  } = UseContext();

  const { id } = useParams();

  useEffect(() => {
    getUsersDataById(id);
  }, [id]);

  useEffect(() => {
    if (testimonialsDataById) {
      setValue('src', testimonialsDataById.img?.src);
      setValue('alt', testimonialsDataById.img?.alt);
      setValue('star', testimonialsDataById.star);
      setValue('description', testimonialsDataById.description);
      setValue('name', testimonialsDataById.name);
      setValue('position', testimonialsDataById.position);
    }
  }, [testimonialsDataById]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    putUserById(id, data);
  };

  return (
    <motion.section
      className={s.section}
      animate="animate"
      initial="initial"
      variants={variantsTop}
    >
      {testimonialsDataById && (
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className={s.container}
          variants={variantsTop}
          autoComplete="off"
        >
          <motion.h2 className={s.title} variants={variantsTop}>
            ID: {testimonialsDataById.id}
          </motion.h2>
          <motion.img
            className={s.img}
            variants={variantsTop}
            src={testimonialsDataById.img?.src}
            alt={testimonialsDataById.img?.alt}
          />

          <motion.h4 className={s.name} variants={variantsTop}>
            Image
          </motion.h4>
          <motion.input
            {...register('src', validSrc)}
            className={s.input}
            variants={variantsTop}
            type="text"
          />
          {errors.src && <FormError message={errors.src.message} />}

          <motion.h4 className={s.name} variants={variantsTop}>
            ALT
          </motion.h4>
          <motion.input
            {...register('alt', validAlt)}
            className={s.input}
            variants={variantsTop}
            type="text"
          />
          {errors.alt && <FormError message={errors.alt.message} />}

          <motion.h4 className={s.name} variants={variantsTop}>
            Number of star
          </motion.h4>
          <motion.input
            {...register('star', validStar)}
            className={s.input}
            variants={variantsTop}
            type="number"
          />
          {errors.star && <FormError message={errors.star.message} />}

          <motion.h4 className={s.name} variants={variantsTop}>
            Description
          </motion.h4>
          <motion.textarea
            {...register('description', validDescription)}
            className={s.textarea}
            variants={variantsTop}
          />
          {errors.description && (
            <FormError message={errors.description.message} />
          )}

          <motion.h4 className={s.name} variants={variantsTop}>
            Name
          </motion.h4>
          <motion.input
            {...register('name', validUserName)}
            className={s.input}
            variants={variantsTop}
            type="text"
          />
          {errors.name && <FormError message={errors.name.message} />}

          <motion.h4 className={s.name} variants={variantsTop}>
            Position
          </motion.h4>
          <motion.input
            {...register('position', validPosition)}
            className={s.input}
            variants={variantsTop}
            type="text"
          />
          {errors.position && <FormError message={errors.position.message} />}

          <motion.input
            className={s.submit}
            variants={variantsTop}
            type="submit"
            value="Change"
          />
        </motion.form>
      )}
    </motion.section>
  );
};

export default ChangeData;
