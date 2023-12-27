import {useNavigation} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../../Store';
import {getIsFirstSignIn, setIsFirstSignIn} from '../../Store/Startup';
import {getUserName} from '../../Store/User';

export const useSplashViewmodel = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const isFirstSignin = useAppSelector(getIsFirstSignIn);
  const username = useAppSelector(getUserName);

  const initializeApp = () => {
    setTimeout(() => {
      if (isFirstSignin) {
        navigation.reset({routes: [{name: 'Auth', path: 'Onboarding'}]});
        dispatch(setIsFirstSignIn(false));
      } else if (username) {
        navigation.reset({routes: [{name: 'App', path: 'Home'}]});
      } else {
        navigation.reset({routes: [{name: 'Auth', path: 'Login'}]});
      }
    }, 3000);
  };

  return {initializeApp};
};
