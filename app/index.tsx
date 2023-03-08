import React, { useEffect } from 'react';
import { LogBox } from "react-native";
import { store, persistor } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './AppScreen';

import * as actionTypes from "@actions/actionTypes";
LogBox.ignoreAllLogs();
export default function mainApp() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </>
  );
}