import { UseContext } from '../../UseContext/UseContext';
import s from './PageNotFound.module.css';

const PageNotFound = () => {
  const { data } = UseContext();
  const pageElem = data.pageNotFound;
  return (
    <>
      {pageElem && (
        <section className={s.section}>
          <div className={s.block}>
            <img
              className={s.img}
              src={pageElem.src}
              alt={`${pageElem.alt} broken `}
            />
          </div>
          <h2 className={s.title}>{pageElem.title}</h2>
          <p className={s.description}>{pageElem.description}</p>
        </section>
      )}
    </>
  );
};

export default PageNotFound;
