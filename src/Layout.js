
import { PrimeReactProvider } from 'primereact/api';
import { Outlet } from 'react-router-dom';

export const Layout = () => {

  return (
    <PrimeReactProvider value={{ ripple: true}}>
      <Outlet />
    </PrimeReactProvider>
  );
}
