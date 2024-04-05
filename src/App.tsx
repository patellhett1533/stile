import React from 'react';
import ApplicationNavigator from './navigators/Application';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App(): React.JSX.Element {
  return <ApplicationNavigator />;
}

export default App;
