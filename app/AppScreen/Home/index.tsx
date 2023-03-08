import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  View,
  RefreshControl,
  FlatList,
  Pressable,
} from 'react-native';
import { Header, TextInput, RoutineSection } from '../../components/index';
import { Images } from '../../config';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRedord } from "../../actions/index";
import * as actionTypes from "../../actions/actionTypes";
import Styles from "./styles";
import Item from "./Items";

function Home(): JSX.Element {
  const dispatch = useDispatch();
  const API_DATA = useSelector((state: any) => state.API_DATA);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(fetchRedord.collectDataFromAPI(() => { setRefreshing(false); }));
  };

  return (
    <SafeAreaView>
      <Header
        style={Styles.header}
        styleTitle={Styles.headerTitle}
        title={"Routines"}
        renderLeft={() => {
          return (
            <View style={Styles.headerImage}>
              <Image source={Images.home} />
            </View>
          )
        }}
        renderRight={() => {
          return (
            <View style={Styles.headerImage}>
              <Image source={Images.setting} />
            </View>
          )
        }}
      />

      <View style={Styles.sectionContainer}>
        <RoutineSection
          style={{ backgroundColor: "#CFE4FF" }}
          day='Weekdays'
          time='7:00 AM'
          routien="Morning Routine"
          isOn={true}
          arrowImage={Images.LeftarrowBlack}
          image={
            <View style={{ height: 40, width: 25 }}>
              <Image source={Images.sun} style={Styles.sunImage} />
              <Image source={Images.cloud} style={Styles.cloudImage} />
            </View>
          }
        />
        <RoutineSection
          style={{ backgroundColor: "#103C58" }}
          styleText={{ color: "#fff" }}
          day='Everyday'
          time='9:00 PM'
          routien="Night Routine"
          isOn={false}
          arrowImage={Images.leftarrowWhite}
          image={<Image source={Images.moon} style={{ height: 40, width: 25 }} />}
        />
      </View>

      <View style={Styles.divider} />

      <View style={Styles.searchContainer}>
        <TextInput
          style={Styles.input}
          onChangeText={(text) => {
            dispatch({ type: actionTypes.SET_SEARCH_TEXT, payload: text });
          }}
          placeholder={""}
          value={API_DATA.searchText}
          icon={
            <View style={Styles.searchIconContainer}>
              <Image source={Images.search} />
            </View>
          }
        />
        <Pressable
          onPress={() => {
            if (API_DATA.isDesc) {
              dispatch(fetchRedord.setASC(API_DATA?.docsData ?? []));
            } else {
              dispatch(fetchRedord.setDSCE(API_DATA?.docsData ?? []));
            }
          }}
          style={Styles.filterContainer}>
          <Image style={Styles.filterImage} source={Images.filter_list} />
        </Pressable>
      </View>

      <View style={Styles.flatListContainer}>
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
          style={{ marginHorizontal: 10 }}
          showsVerticalScrollIndicator={false}
          data={API_DATA?.docsData ?? []}
          keyExtractor={(item, index) => item.id.toString()}
          renderItem={({ item }) => <Item item={item} />}
        />
      </View>
    </SafeAreaView>
  );
}

export default Home;
