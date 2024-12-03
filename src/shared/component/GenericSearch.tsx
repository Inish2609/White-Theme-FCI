import {useState} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {HelperText, TextInput} from 'react-native-paper';
import {GenericInputFieldStyles} from '../../styles/styles';
import { useTranslation } from 'react-i18next';

type Props = {
  containerStyles?: StyleProp<ViewStyle>;
  label?: string;
  placeholder: string;
  buttonContainerStyles?: StyleProp<ViewStyle>;
  multiline?: boolean;
  lines?: number;
  searchedValue: any[];
  setSearchedValue: React.Dispatch<React.SetStateAction<any[]>>;
  items: any[];
};

export default function GenericSearch({
  containerStyles,
  label,
  placeholder,
  buttonContainerStyles,
  multiline,
  lines,
  searchedValue,
  setSearchedValue,
  items,
  ...rest
}: Props) {
  const [text, setText] = useState<string>('');
  const {t} = useTranslation()

  function changeTextHandler(value: string): void {
    setText(value);
    const filterItems = items.filter(item =>
      item.title.toLowerCase().includes(value.toLowerCase()),
    );
    setSearchedValue(filterItems);
  }

  return (
    <View style={[GenericInputFieldStyles.container, containerStyles]}>
      <TextInput
        // mode="outlined"
        
        label={t(label)}
        value={text}
        onChangeText={changeTextHandler}
        placeholder={t(placeholder)}
        style={[GenericInputFieldStyles.buttonContainer, buttonContainerStyles]}
        placeholderTextColor="#003831"
        textColor="black"
        theme={{
          roundness: 10,
          colors: {
            primary: 'black',
            onPrimary: '#003831',
            accent: '#003831',
            onSurfaceVariant: '#003831',
          },
        }}
        right={<TextInput.Icon icon="magnify" />}
        underlineColor='trnasparent'
        multiline={multiline}
        numberOfLines={lines}
        {...rest}
      />
    </View>
  );
}
