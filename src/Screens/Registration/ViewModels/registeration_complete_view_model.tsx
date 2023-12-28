import {useAppSelector} from '../../../Store';
import {getUserName} from '../../../Store/User';
import {useNavigation} from '@react-navigation/native';

export const useRegistrationCompleteViewModel = () => {
  const navigation = useNavigation();

  const username = useAppSelector(getUserName);

  const onButtonPress = () => {
    navigation.reset({routes: [{name: 'App'}]});
  };
  return {username, onButtonPress};
};
