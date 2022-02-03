import { useLocation } from 'react-router-dom';

const useRouterState = () => {
  const location = useLocation();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { state: routerState = {} } = location as Record<string, any>;

  return [routerState]
};

export default useRouterState;
