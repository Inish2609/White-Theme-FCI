import {useState} from 'react';
import {View, Text, StyleProp, ViewStyle, TextStyle} from 'react-native';
import {Checkbox} from 'react-native-paper';
import {GenericCheckBoxStyles} from '../../styles/styles';
import {useTranslation} from 'react-i18next';

type Props = {
  containerStyles?: StyleProp<ViewStyle>;
  color?: string;
  uncheckedColor?: string;
  title?: string;
  textStyles?: StyleProp<TextStyle>;
  checked: boolean;
  onCheck?: (check: boolean) => void;
};

export default function GenericCheckBox({
  containerStyles,
  color = '#003831',
  uncheckedColor = '#003831',
  title,
  textStyles,
  checked,
  onCheck,
  ...rest
}: Props) {
  const [check, setCheck] = useState<boolean>(checked);
  const {t} = useTranslation();

  function checkhandler(): void {
    const newCheckedStatus = !check;
    setCheck(!check);
    onCheck?.(newCheckedStatus);
  }

  return (
    <View style={[GenericCheckBoxStyles.container, containerStyles]}>
      <Checkbox
        status={check ? 'checked' : 'unchecked'}
        onPress={checkhandler}
        color={color}
        uncheckedColor={uncheckedColor}
      />
      <Text {...rest} style={[GenericCheckBoxStyles.text, textStyles]}>
        {t(title)}
      </Text>
    </View>
  );
}
