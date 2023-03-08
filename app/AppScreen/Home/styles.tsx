import React from "react";
import { StyleSheet, Dimensions } from "react-native";
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export default StyleSheet.create({
    sunImage:{ position: 'absolute', right: 1 },
    cloudImage: { position: 'absolute', right: 1, bottom: -10 },
    headerImage: { height: 40, width: 40, borderRadius: 20, backgroundColor: "#ffffff", justifyContent: "center", alignItems: 'center' },
    headerTitle:{ fontWeight: '500', fontSize: 18, color: "#ffffff" },
    header: { backgroundColor: "#182545", height: 60 },
    sectionContainer:{ justifyContent: 'space-around', flexDirection: 'row', marginTop: 10, padding: 10 },
    divider:{ borderWidth: 0.5, borderColor: 'lightgray' },
    searchContainer: { flexDirection: 'row', margin: 10 },
    input: { height: 40, width: width - 80, flexDirection: 'row' },
    searchIconContainer:{ borderBottomWidth: 1, height: 39, width: 40, backgroundColor: "#49B0AB", justifyContent: "center", alignItems: 'center' },
    filterContainer: { height: 38, width: 38, borderRadius: 20, backgroundColor: "#ffffff", justifyContent: "center", alignItems: 'center', borderWidth: 1 },
    filterImage: { height: 20, width: 20 },
    flatListContainer:{ height: height - 290 }

});
