import { Outlet, useLocation } from 'react-router-dom';
import { Nav } from './Menu';

const narrowRoutes = ['/mapa'];

export const Layout = () => {
  const { pathname } = useLocation();
  const widthClasses = narrowRoutes.includes(pathname) ? 'px-0 py-0 my-0 mx-0' : 'px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 py-16 lg:py-20';
  return (
    <div className="">
      <Nav />
      <div className={`${widthClasses}`}>
        <Outlet />
      </div>
    </div>
  );
};
