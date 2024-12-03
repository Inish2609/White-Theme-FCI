import {
  StyleSheet,
  View,
} from 'react-native';
import GenericDropDown from '../../component/GenericDropDown';
import GenericCalenderField from '../../component/GenericCalenderField';
import {Text} from 'react-native';
import GenericButton from '../../component/GenericButton';
import GenericList from '../../component/GenericList';
import {useState} from 'react';
import ModalAlert from '../../component/ModalAlert';
import {useTranslation} from 'react-i18next';
import {GangListData, TokenData} from '../../../data';


export default function Screen1FormComponents() {
  const [openModal, setOpenModal] = useState(false);
  const {t} = useTranslation();

  function handleOpenModal() {
    setOpenModal(true);
  }

  return (
    <View style={styles.container}>
      <GenericDropDown Options={TokenData} label={'Token Number'} />
      <GenericCalenderField label={'Date'} placeholder={'Date'} />
      <View style={styles.titleContainer}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 50,
            marginLeft: 10,
          }}>
          <Text style={styles.titleStyles}>{t('Labour Usage')}</Text>
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

      <ModalAlert visible={openModal} setValue={setOpenModal} />
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
    paddingVertical: 16,
  },
  titleStyles: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#003831',
  },
});
