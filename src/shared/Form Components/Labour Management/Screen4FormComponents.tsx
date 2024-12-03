import {KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native';
import {useState} from 'react';
import GenericDropDown from '../../component/GenericDropDown';
import GenericButton from '../../component/GenericButton';
import GenericList from '../../component/GenericList';
import ModalAlert2 from './ModalAlert2';
import {useTranslation} from 'react-i18next';
import {GangListData, ReferenceNumberData} from '../../../data';

interface DropDownValue {
  title: string;
  editable: boolean;
}

interface Wagon {
  id: string;
  title: string;
  icons: string[];
  dropDownValues: DropDownValue[];
}

export default function Screen4FormComponents() {
  const [openModal, setOpenModal] = useState(false);
  const {t} = useTranslation();

  function handleOpenModal() {
    setOpenModal(true);
  }

  function handleCloseModal() {
    setOpenModal(false);
  }

  return (
    <View style={styles.container}>
      <GenericDropDown
        Options={ReferenceNumberData}
        label={'Reference Number'}
      />
      <View style={styles.titleContainer}>
        <View style={styles.titleWrapper}>
          <Text style={styles.titleStyles}>{t('Labour Usage Allocation')}</Text>
        </View>
        <GenericButton
          title={'Add'}
          buttonStyles={{position: 'absolute', right: 0}}
          onPress={handleOpenModal}
        />
      </View>
      <GenericList items={GangListData} />
      <GenericButton
        title="Submit"
        buttonStyles={{width: '50%'}}
        onPress={() => {}}
      />
      <ModalAlert2 visible={openModal} setValue={setOpenModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    paddingVertical: 16,
  },
  titleWrapper: {
    flex: 1,
    marginRight: 10,
  },
  titleStyles: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#003831',
    textAlign: 'center',
  },
});
