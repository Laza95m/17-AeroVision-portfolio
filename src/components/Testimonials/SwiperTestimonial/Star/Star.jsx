import s from './Star.module.css';

const Star = ({ count }) => {
  return [...Array(count)].map((_, i) => (
    <img
      key={i}
      className={s.starImg}
      src="/starImg.svg"
      alt="starImg broken"
    />
  ));
};

export default Star;
