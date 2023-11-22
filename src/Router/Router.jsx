import { Route, Routes } from 'react-router-dom';
import { UseContext } from '../UseContext/UseContext';

const Router = () => {
  const { adminPerson, routePages, adminPage, userPage } = UseContext();

  return (
    <main>
      <Routes>
        {routePages &&
          routePages.map(({ path, element }, i) => (
            <Route key={i} path={path} element={element} />
          ))}

        {adminPerson && adminPage
          ? adminPage.map(({ path, element }, i) => (
              <Route key={i} path={path} element={element} />
            ))
          : userPage.map(({ path, element }, i) => (
              <Route key={i} path={path} element={element} />
            ))}
      </Routes>
    </main>
  );
};

export default Router;
