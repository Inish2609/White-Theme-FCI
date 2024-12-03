import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native';
import {useState} from 'react';
import GenericDropDown from '../../component/GenericDropDown';
import GenericInputField from '../../component/GenericInputField';
import GenericButton from '../../component/GenericButton';
import GenericList from '../../component/GenericList';
import ModalAlert from '../../component/ModalAlert';
import {useTranslation} from 'react-i18next';
import {GangListData, OperationData, ReferenceNumberData} from '../../../data';


export default function Screen2FormComponents() {
  const [openModal, setOpenModal] = useState(false);
  const {t} = useTranslation();

  function handleOpenModal() {
    setOpenModal(true);
  }

  return (
    <View style={styles.container}>
      <GenericDropDown
        Options={ReferenceNumberData}
        label={'Reference Number'}
        containerStyles={{zIndex: 10}}
      />
      <GenericDropDown
        Options={OperationData}
        label={'Operation At'}
        containerStyles={{zIndex: 9}}
      />
      <GenericInputField label={'Date'} placeholder={'Date'} />
      <GenericInputField label={'Wagon'} placeholder={'Wagon'} />
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
