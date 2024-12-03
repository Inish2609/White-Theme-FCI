import {StyleSheet, View} from 'react-native';
import {useState} from 'react';
import GenericDropDown from '../../component/GenericDropDown';
import GenericCalenderField from '../../component/GenericCalenderField';
import GenericInputField from '../../component/GenericInputField';
import GenericCheckBox from '../../component/GenericCheckBox';
import GenericButton from '../../component/GenericButton';
import ModalAlert from '../../component/ModalAlert';
import {useTranslation} from 'react-i18next';
import {ActivityData, LabourData} from '../../../data';

export default function Screen3FormComponents() {
  const [openModal, setOpenModal] = useState(false);

  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <GenericDropDown
        Options={ActivityData}
        label={'Activity'}
        containerStyles={{zIndex: 10}}
      />
      <GenericDropDown
        Options={LabourData}
        label={'Labour Gang'}
        containerStyles={{zIndex: 9}}
      />
      <GenericCalenderField label={'Date'} placeholder={'Date'} />
      <GenericInputField
        label={'No of Bags'}
        placeholder={'No of Bags'}
        keyboardType="numeric"
      />
      <GenericCalenderField label={'Start Date'} placeholder={'Start Date'} />
      <GenericCalenderField label={'End Date'} placeholder={'End Date'} />
      <GenericInputField
        label={'Remarks'}
        placeholder={'Remarks'}
        multiline={true}
        lines={4}
      />
      <GenericCheckBox checked={false} title={'Labour Assignment'} />
      <GenericButton
        title="Submit"
        containerStyles={{marginTop: 20}}
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
  },
  titleStyles: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#617c8d',
  },
});
