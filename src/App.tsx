import 'react-native-gesture-handler';
import React from 'react';
import {View} from 'react-native';

import {RootStackNavigator} from './Navigators/RootStackNavigator';

function App(): React.JSX.Element {
  return (
    <View>
      <RootStackNavigator />
    </View>
  );
}

export default App;
