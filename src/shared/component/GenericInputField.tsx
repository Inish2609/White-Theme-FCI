import {useState} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {HelperText, TextInput} from 'react-native-paper';
import {GenericInputFieldStyles} from '../../styles/styles';
import {useTranslation} from 'react-i18next';

type Props = {
  containerStyles?: StyleProp<ViewStyle>;
  label: string;
  placeholder: string;
  buttonContainerStyles?: StyleProp<ViewStyle>;
  multiline?: boolean;
  lines?: number;
  value?: string;
  keyboardType?: KeyboardTypeOptions;
};

export default function GenericInputField({
  containerStyles,
  label,
  placeholder,
  buttonContainerStyles,
  multiline,
  lines,
  value,
  keyboardType = 'default',

  ...rest
}: Props) {
  const [text, setText] = useState('');
  const [error, setError] = useState(false);
  const {t} = useTranslation();

  function blurHandler(): void {
    if (text === '') {
      setError(true);
    }
  }

  function changeTextHandler(value: string): void {
    setText(value);
    if (text !== '') {
      setError(false);
    }
  }

  return (
    <View style={[GenericInputFieldStyles.container, containerStyles]}>
      <TextInput
        label={t(label)}
        onBlur={blurHandler}
        value={value ? value : text}
        onChangeText={changeTextHandler}
        error={error}
        placeholder={t(placeholder)}
        style={[
          GenericInputFieldStyles.buttonContainer,
          buttonContainerStyles,
          error && {borderColor: '#b42720', borderWidth: 1},
        ]}
        underlineColor="transparent"
        placeholderTextColor="#003831"
        textColor="black"
        keyboardType={keyboardType}
        theme={{
          roundness: 10,
          colors: {
            primary: 'black',
            onPrimary: '#003831',
            accent: '#003831',
            onSurfaceVariant: '#003831',
          },
        }}
        multiline={multiline}
        numberOfLines={lines}
        {...rest}
      />
      {error && <HelperText type="error">You Must Fill The Field</HelperText>}
    </View>
  );
}
