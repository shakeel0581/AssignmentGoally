import {StyleSheet, Dimensions} from 'react-native';
let width = Dimensions.get('window').width;

export default StyleSheet.create({
  container: { alignItems: "center" },
  innerContainer: { width: (width / 2) - 20, borderRadius: 10, padding: 10 },
  routineText: { marginBottom: 5, fontWeight: "600", color: '#000' },
  schedualContainer: { justifyContent: 'space-between', flexDirection: 'row' },
  toggleContainer:{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  arrowImage: { height: 14, width: 7 },
  sunImage:{ position: 'absolute', right: 1 },
  cloudImage: { position: 'absolute', right: 1, bottom: -10 }

});
