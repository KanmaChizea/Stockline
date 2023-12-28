import {useNavigation} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../../Store';
import {getIsFirstSignIn, setIsFirstSignIn} from '../../Store/Startup';
import {getUserName} from '../../Store/User';
import {RootStackParamList} from '../../Navigators/types';

export const useSplashViewmodel = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const isFirstSignin = useAppSelector(getIsFirstSignIn);
  const username = useAppSelector(getUserName);

  const initializeApp = () => {
    if (isFirstSignin) {
      // dispatch(setIsFirstSignIn(false));
      waitAndNavigate({name: 'Auth', path: 'Onboarding'});
    } else if (username) {
      waitAndNavigate({name: 'App', path: 'Home'});
    } else {
      waitAndNavigate({name: 'Auth', path: 'Login'});
    }
  };

  const waitAndNavigate = ({
    name,
    path,
  }: {
    name: keyof RootStackParamList;
    path: string;
  }) =>
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: name, params: {screen: path}}],
      });
    }, 3000);

  return {initializeApp};
};
