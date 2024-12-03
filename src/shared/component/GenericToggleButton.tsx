import {useState} from 'react';
import {StyleProp, Switch, View, ViewStyle} from 'react-native';
import {GenericToggleButtonStyles} from '../../styles/styles';

type Props = {
  containerStyles?: StyleProp<ViewStyle>;
  switchContainerStyles?: StyleProp<ViewStyle>;
  falseColor?: string;
  trueColor?: string;
  thumbColor?: string;
};

export default function GenericToggleButton({
  containerStyles,
  switchContainerStyles,
  falseColor = '#767577',
  trueColor = '#00A676',
  thumbColor = '#f4f3f4',
  ...rest
}: Props) {
  const [isEnabled, setIsEnabled] = useState(false);
  function switchValueChangeHandler(): void {
    setIsEnabled(!isEnabled);
  }
  return (
    <View style={[GenericToggleButtonStyles.container, containerStyles]}>
      <View
        style={[
          GenericToggleButtonStyles.switchContainer,
          switchContainerStyles,
        ]}>
        <Switch
          value={isEnabled}
          onValueChange={switchValueChangeHandler}
          trackColor={{false: falseColor, true: trueColor}}
          thumbColor={thumbColor}
          {...rest}
        />
      </View>
    </View>
  );
}
