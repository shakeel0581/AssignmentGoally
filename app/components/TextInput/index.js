import React from 'react';
import { TextInput, View, I18nManager } from 'react-native';
import PropTypes from 'prop-types';
import { Text } from '@components';
export default function Index(props) {
  const {
    style,
    onChangeText,
    onFocus,
    placeholder,
    value,
    success,
    secureTextEntry,
    keyboardType,
    multiline,
    textAlignVertical,
    icon,
    onSubmitEditing,
    label,
    max
  } = props;
  return (
    <View style={{ flex: 1 }}>
      {label &&
        <Text caption1 light style={{ marginBottom: 5 }}>
          {label}
        </Text>
      }
      <View style={[ {   borderWidth: 1 }, style]}>
        <TextInput
          style={{
            fontFamily: 'Raleway',
            flex: 1,
            height: '100%',
            textAlign: I18nManager.isRTL ? 'right' : 'left',
            paddingTop: 5,
            paddingBottom: 5,
          }}
          onChangeText={text => onChangeText(text)}
          onFocus={() => onFocus()}
          autoCorrect={false}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          value={value}
          maxLength={max}
          keyboardType={keyboardType}
          multiline={multiline}
          textAlignVertical={textAlignVertical}
          onSubmitEditing={onSubmitEditing}
        />
        {icon}
      </View>
    </View>
  );
}

Index.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onChangeText: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  success: PropTypes.bool,
  secureTextEntry: PropTypes.bool,
  keyboardType: PropTypes.string,
  multiline: PropTypes.bool,
  textAlignVertical: PropTypes.string,
  icon: PropTypes.node,
  onSubmitEditing: PropTypes.func,
};

Index.defaultProps = {
  style: {},
  onChangeText: text => { },
  onFocus: () => { },
  placeholder: 'Placeholder',
  value: '',
  success: true,
  secureTextEntry: false,
  keyboardType: 'default',
  multiline: false,
  textAlignVertical: 'center',
  icon: null,
  onSubmitEditing: () => { },
};
