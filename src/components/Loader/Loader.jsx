import s from './Loader.module.css';

const Loader = () => {
  return (
    <section className={s.loader}>
      <div className={s.lds_spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default Loader;
