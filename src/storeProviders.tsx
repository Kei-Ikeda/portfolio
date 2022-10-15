import { Provider as ReduxProvider } from 'react-redux';

import { store } from '@/redux';

interface props {
  children: React.ReactNode;
}

const StoreProviders: React.FC<props> = ({ children }) => {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};

export { StoreProviders };
