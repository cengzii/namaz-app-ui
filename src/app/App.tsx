import { useEffect } from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import { AppProvider } from './context/AppContext';

function DarkModeEnforcer() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.documentElement.style.background = '#07070F';
    document.body.style.background = '#07070F';
    document.body.style.fontFamily = 'Inter, sans-serif';
  }, []);
  return null;
}

export default function App() {
  return (
    <AppProvider>
      <DarkModeEnforcer />
      <RouterProvider router={router} />
    </AppProvider>
  );
}
