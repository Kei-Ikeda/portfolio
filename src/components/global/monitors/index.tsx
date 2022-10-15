import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { storeLoginInfoState } from '@/redux/appData/selectors';
// import { enableLogin } from '@/redux/appData/actions';

const Monitors: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const loginInfoState = useSelector(storeLoginInfoState);

  useEffect(() => {
    // if (!loginInfoState.isLogin && router.pathname !== '/login') {
    //   router.push('/login');
    // }
  }, [dispatch, router, loginInfoState.isLogin]);

  return null;
};

export { Monitors };
