import {
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Text} from 'react-native';
import {SetStateAction, useEffect, useState} from 'react';
import GenericDropDown from '../../component/GenericDropDown';
import GenericCalenderField from '../../component/GenericCalenderField';
import GenericInputField from '../../component/GenericInputField';
import GenericCheckBox from '../../component/GenericCheckBox';
import GenericButton from '../../component/GenericButton';
import ModalAlert from '../../component/ModalAlert';
import GenericList from '../../component/GenericList';
import GenericSearch from '../../component/GenericSearch';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AddStack from './AddStack';
import CreateTemporaryStorage from './CreateTemporaryStorage';
import {useTranslation} from 'react-i18next';
import {
  ActivityData,
  ListData,
  OperationData,
  TemporaryStorageData,
  TokenData,
} from '../../../data';

interface DropDownValue {
  title: string;
  editable: boolean;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

interface Wagon {
  id: string;
  title: string;
  icons: string[];
  dropDownValues: DropDownValue[];
  checked: boolean;
}

export default function StackingFormComponents() {
  const [openModal, setOpenModal] = useState(false);

  const [dropDown1Value, setDropDown1Value] = useState<string>('');
  const [dropDown2Value, setDropDown2Value] = useState<string>('');

  const [values, setValues] = useState<{[key: string]: string}>({});

  useEffect(() => {
    const val = {
      noOfBags: '5',
      Commodity: 'Rice',
      bagType: 'Gunny',
      specification: 'Rice',
      category: 'Grade 1',
      variety: 'rice',
    };
    if (dropDown1Value !== '') {
      setValues(prev => ({...prev, ...val}));
    }
  }, [dropDown1Value, dropDown2Value]);

  function handleOpenModal() {
    setOpenModal(true);
  }

  function handleCamera() {
    console.log('Inish');
  }

  const [searchValue, setSearchValue] = useState<any[]>(ListData);
  const [openSecondaryStorage, setOpenSecondaryStorage] =
    useState<boolean>(false);
  const {t} = useTranslation();

  function handleOpenSecondaryStorage(checked: boolean) {
    setOpenSecondaryStorage(checked);
  }

  const [openModal2, setOpenModal2] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <GenericDropDown
        Options={TokenData}
        label={'Token Number'}
        containerStyles={{zIndex: 10}}
        setValue={setDropDown1Value}
      />
      <GenericDropDown
        Options={OperationData}
        label={'Transaction Type'}
        containerStyles={{zIndex: 9}}
        setValue={setDropDown1Value}
      />
      <GenericInputField
        label={'No of Bags'}
        placeholder={'No of Bags'}
        value={values['noOfBags']}
        keyboardType="numeric"
      />
      <GenericInputField
        label={'Commodity'}
        placeholder={'Commodity'}
        value={values['Commodity']}
      />
      <GenericInputField
        label={'Bag Type'}
        placeholder={'Bag Type'}
        value={values['bagType']}
      />
      <GenericInputField
        label={'Specification'}
        placeholder={'Specification'}
        value={values['specification']}
      />
      <GenericInputField
        label={'Category'}
        placeholder={'Category'}
        value={values['category']}
      />
      <GenericInputField
        label={'Variety'}
        placeholder={'Variety'}
        value={values['variety']}
      />
      <View style={styles.titleContainer}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 50,
            marginLeft: 10,
            marginTop: 15,
          }}>
          <Text style={styles.titleStyles}>{t('Stack Plan')}</Text>
        </View>
        <GenericButton
          title={'Add'}
          containerStyles={{marginVertical: 30}}
          buttonStyles={{position: 'absolute', right: 0, width: '80%'}}
          onPress={handleOpenModal}
        />
      </View>
      <View
        style={{
          backgroundColor: 'white',
          paddingHorizontal: 15,
          borderRadius: 10,
          marginTop: 10,
        }}>
        <View style={styles.searchContainer}>
          <GenericSearch
            placeholder={'Search'}
            searchedValue={searchValue}
            setSearchedValue={setSearchValue}
            items={ListData}
            containerStyles={{marginRight: 15, width: '40%', height: 50}}
            buttonContainerStyles={{
              width: '100%',
              height: 50,
            }}
          />
          <GenericDropDown
            Options={ListData}
            label={'All shed'}
            setSearch={setSearchValue}
            editable={true}
            containerStyles={{
              width: '40%',
              height: 50,
            }}
            buttonContainerStyles={{
              width: '100%',
              height: 50,
            }}
          />
        </View>
        <GenericList items={searchValue} checkBoxRequired={true} />
      </View>

      <GenericCheckBox
        checked={false}
        onCheck={checked => handleOpenSecondaryStorage(checked)}
        title="Create Temporary Storage"
        containerStyles={{marginTop: 15}}
      />
      {openSecondaryStorage && (
        <View
          style={{
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 10,
            marginBottom: 10,
            marginTop: 10,
          }}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={[styles.titleStyles, {marginBottom: 15}]}>
              {t('Temporary Storage')}
            </Text>
          </View>
          <GenericList items={TemporaryStorageData} />
          <View style={{marginLeft: 5}}>
            <Icon
              name="plus-circle"
              size={29}
              color="#003831"
              onPress={() => setOpenModal2(true)}
            />
          </View>
        </View>
      )}
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <GenericButton
          title="Cancel"
          buttonStyles={{width: '100%'}}
          onPress={() => {}}
          buttonColor="white"
          textColor="#003831"
        />
        <GenericButton
          title="Submit"
          containerStyles={{marginLeft: 30}}
          buttonStyles={{width: '100%'}}
          onPress={() => {}}
        />
      </View>

      <AddStack visible={openModal} setValue={setOpenModal} />
      <CreateTemporaryStorage visible={openModal2} setValue={setOpenModal2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    // backgroundColor: 'red',
  },
  titleStyles: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#003831',
  },
  searchContainer: {
    flexDirection: 'row',
    marginVertical: 25,
    marginTop: 15,
    alignItems: 'center', // Ensure alignment is consistent
    justifyContent: 'space-between', // Prevent components from overlapping
  },
});
