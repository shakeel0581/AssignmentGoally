import React, { useEffect, useState } from 'react';
import { Alert, View, SafeAreaView, StatusBar } from 'react-native';
import { Loader } from '../components';
import Home from "./Home/index";
import { fetchRedord } from "../actions/index";
import { useDispatch } from 'react-redux';

export default function DrawerNavigator() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchRedord.collectDataFromAPI(() => {
      setIsLoading(false);
    }));
  }, []);

  return (
    <View>
      <Loader loading={isLoading} />
      <StatusBar
        backgroundColor={"#182545"}
        barStyle={'light-content'}
      />
      <Home />
    </View>
  );
}
