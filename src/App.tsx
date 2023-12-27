import 'react-native-gesture-handler';
import React from 'react';

import {RootStackNavigator} from './Navigators/RootStackNavigator';
import {Provider} from 'react-redux';
import {persistor, store} from './Store';
import {PersistGate} from 'redux-persist/integration/react';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootStackNavigator />
      </PersistGate>
    </Provider>
  );
}

export default App;
