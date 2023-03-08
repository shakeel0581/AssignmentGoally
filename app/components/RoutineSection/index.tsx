import React, { PropsWithChildren } from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';
import { Images } from '../../config';
import ToggleSwitch from 'toggle-switch-react-native'
import Styles from "./styles";

export interface Props {
  routien: string;
  day: string;
  time: string;
  image: JSX.Element;
  arrowImage: React.ComponentProps<typeof Image>['source'];
  isOn: boolean,
  style: Object
  styleText?: Object
}

const RoutineSection: React.FC<Props> = props => {
  const {routien,day, time, image, isOn, arrowImage, style, styleText } = props;
  return (
    <View style={[Styles.container, ]}>
      <Text style={Styles.routineText}>{routien}</Text>
      <View style={[Styles.innerContainer, style]}>
        <View style={Styles.schedualContainer}>
          <View>
            <Text style={[styleText]}> {day} </Text>
            <Text style={[styleText]}> {time} </Text>
          </View>
          {image}
        </View>
        <View style={Styles.toggleContainer}>
          <ToggleSwitch
            isOn={isOn}
            onColor="#72CEBC"
            offColor="#72777F"
            labelStyle={{ color: "black", fontWeight: "900" }}
            size="medium"
            onToggle={isOn => console.log("changed to : ", isOn)}
          />
          <Image style={Styles.arrowImage} source={arrowImage} />
        </View>
      </View>
    </View>
  );
}

export default RoutineSection;
