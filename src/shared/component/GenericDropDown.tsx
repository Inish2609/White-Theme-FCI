import React, {useState} from 'react';
import {FlatList, StyleProp, View, ViewStyle} from 'react-native';
import {TextInput, Menu, Portal} from 'react-native-paper';
import {
  GenericDropDownStyles,
  GenericInputFieldStyles,
} from '../../styles/styles';
import {useTranslation} from 'react-i18next';

interface Option {
  title: string;
  value: string;
}

type Props = {
  Options: any[];
  containerStyles?: StyleProp<ViewStyle>;
  itemsStyles?: StyleProp<ViewStyle>;
  label: string;
  buttonContainerStyles?: StyleProp<ViewStyle>;
  icon?: string;
  editable?: boolean;
  setSearch?: React.Dispatch<React.SetStateAction<any[]>>;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
};

export default function GenericDropDown({
  Options,
  containerStyles,
  itemsStyles,
  label,
  buttonContainerStyles,
  icon = 'menu-down',
  editable,
  setSearch,
  setValue,
  ...rest
}: Props) {
  const options: any[] = Options;

  const [selected, setSelected] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false);
  const [searchedValue, setSearchedValue] = useState<Option[]>(options);
  const {t} = useTranslation();

  function openMenuHandler(): void {
    setVisible(true);
  }

  function closeMenuHandler(): void {
    setVisible(false);
  }

  function selectValueHandler(value: string): void {
    if (editable) {
      if (value === 'All') {
        setValue?.(value);
        setSelected(value);
        setSearch?.(options);
        closeMenuHandler();
        return;
      }
      const filter = options.filter(option => option.title === value);
      if (filter && setSearch) {
        setValue?.(value);
        setSelected(value);
        setSearch(filter);
        closeMenuHandler();
        return;
      }
    }

    const selectedOption = options.find(option => option.title === value);
    if (selectedOption) {
      setSelected(selectedOption.title);
      setValue?.(selectedOption.title);
    }
    closeMenuHandler();
  }

  function changeTextHandler(value: string): void {
    setSelected(value);
    const filter = options.filter(option =>
      option.title.toLowerCase().includes(value.toLowerCase()),
    );
    setSearchedValue(filter);
  }

  return (
    <View style={[GenericDropDownStyles.container, containerStyles]}>
      <Portal.Host>
        <Menu
          visible={visible}
          contentStyle={{backgroundColor: '#003831'}}
          onDismiss={closeMenuHandler}
          style={[GenericDropDownStyles.items, {zIndex: 10, top: '85%'}]}
          anchor={
            <TextInput
              // mode="outlined"
              label={t(label)}
              value={selected}
              style={[
                GenericInputFieldStyles.buttonContainer,
                buttonContainerStyles,
                {paddingHorizontal: 10},
              ]}
              underlineColor="transparent"
              editable={!editable}
              right={
                <TextInput.Icon
                  icon={icon}
                  onPress={openMenuHandler}
                  color={'#003831'}
                />
              }
              placeholderTextColor="#003831"
              textColor="black"
              theme={{
                roundness: 10,
                colors: {
                  primary: '#003831',
                  onPrimary: '#003831',
                  accent: '#003831',
                  onSurfaceVariant: '#003831',
                },
              }}
              // outlineColor="#003831"
              onBlur={closeMenuHandler}
              onFocus={openMenuHandler}
              onChangeText={changeTextHandler}
              {...rest}
            />
          }>
          <View style={[{zIndex: 20}]}>
            {editable && (
              <Menu.Item
                style={{backgroundColor: '#003831'}}
                key={'All'}
                onPress={() => selectValueHandler('All')}
                title={'All'}
                titleStyle={{color: 'white'}}
              />
            )}
            {searchedValue.map(item => {
              return (
                <Menu.Item
                  style={{backgroundColor: '#003831'}}
                  key={item.title}
                  onPress={() => selectValueHandler(item.title)}
                  title={item.title}
                  titleStyle={{color: 'white'}}
                />
              );
            })}
          </View>
        </Menu>
      </Portal.Host>
    </View>
  );
}
