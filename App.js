import React from 'react';
import RootNavigation from './src/navigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import reduxStore from './src/redux/store';

const App = () => {
  const {store, persistor} = reduxStore();
  console.log(store);
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <RootNavigation />
      {/* </PersistGate> */}
    </Provider>
  );
};
export default App;
