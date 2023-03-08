import React, { useState, useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import { Swipeable, GestureHandlerRootView } from 'react-native-gesture-handler';
import {
    Image,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Dimensions,
    Switch,
    RefreshControl,
    FlatList,
    ImageURISource,
    Animated
} from 'react-native';
import { Header, TextInput, RoutineSection } from '../../components/index';
import { Images } from '../../config';
import ToggleSwitch from 'toggle-switch-react-native'
import { useDispatch, connect, useSelector } from 'react-redux';
import { fetchRedord, reorderData } from "../../actions/index";
import * as actionTypes from "../../actions/actionTypes";
import Styles from "./styles";

let width = Dimensions.get('window').width;

interface docs {
    "_id": String,
    "type": String,
    "ctaOrdering": Number,
    "entityType": String,
    "devices": [],
    "libraryType": String,
    "ordering": Number,
    "clientId": String,
    "createdBy": String,
    "notifications": [],
    "visualAidUrl": ImageURISource,
    "duration": Number,
    "schedule": {},
    "name": String,
    "__v": Number,
    "createdAt": Date,
    "updatedAt": String,
    "id": String
};


export interface Props {
    item: docs
}

const Item: React.FC<Props> = props => {
    const { item } = props;
    const dispatch = useDispatch();
    let schedukla = '';
    {
      Object.keys(item.schedule).map(function (key) {
        schedukla += key + ", ";

      })
    }

    const RightActions = (
        progress: Animated.AnimatedInterpolation,
        dragAnimatedValue: Animated.AnimatedInterpolation,
        item: docs
    ) => {
        const opacity = dragAnimatedValue.interpolate({
            inputRange: [-50, 0],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        })
        return (
            <TouchableOpacity
                onPress={() => {
                    dispatch({ type: actionTypes.DELETE_ITEM, payload: item.id });
                }}
                style={{ borderRadius: 4, backgroundColor: 'red', opacity, marginBottom: 5, justifyContent: 'center', alignContent: 'center', padding: 10 }}>
                <Text style={{ color: "#fff" }}>Delete</Text>
            </TouchableOpacity>
        )
    }
    return (
        <GestureHandlerRootView>
            <Swipeable renderRightActions={(progress, dragAnimatedValue) => RightActions(progress, dragAnimatedValue, item)}>
                <View style={{ borderRadius: 0, backgroundColor: '#ffffff', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', borderBottomWidth: 1, height: 50, marginBottom: 5, borderColor: 'lightgray' }}>
                    <Image source={{ uri: item.visualAidUrl }} defaultSource={Images.rplaceHolder} style={{ height: 40, width: 40 }} />
                    <View style={{ marginHorizontal: 5, width: width - 40 - 20 - 40 }}>
                        <Text>{item.name.toString()}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={Images.bell} style={{ height: 18, width: 18, marginRight: 5 }} />
                            <Text>{schedukla.substring(0, schedukla.length - 2)}</Text>
                        </View>
                    </View>
                    <Image source={Images.LeftarrowBlack} style={{ height: 14, width: 7, marginRight: 10 }} />
                </View>
            </Swipeable>
        </GestureHandlerRootView>
    );
}


export default Item;
