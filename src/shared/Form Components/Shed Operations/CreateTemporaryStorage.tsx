import React from 'react';
import {Modal, ScrollView, StyleSheet, Text, View} from 'react-native';
import GenericDropDown from '../../component/GenericDropDown';
import GenericButton from '../../component/GenericButton';
import GenericInputField from '../../component/GenericInputField';
import {useTranslation} from 'react-i18next';
import {ActivityData, LabourData} from '../../../data';

type Props = {
  visible: boolean;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CreateTemporaryStorage({visible, setValue}: Props) {
  function handleCloseModal() {
    setValue(false);
  }

  const {t} = useTranslation();

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onDismiss={handleCloseModal}
      onRequestClose={handleCloseModal}>
      <View style={styles.overlay}>
        <View style={styles.modalView}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleStyles}>
              {t('Create Temporary Storage')}
            </Text>
          </View>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}>
            <GenericDropDown
              Options={ActivityData}
              label={'Activity'}
              containerStyles={{zIndex: 3}}
            />
            <GenericDropDown
              Options={LabourData}
              label={'Labour Gang'}
              containerStyles={{zIndex: 1}}
            />
            <GenericInputField
              label={'Assigned Bags'}
              placeholder={'Assigned Bags'}
            />
            <GenericInputField
              label={'Capacity (MT)'}
              placeholder={'Capacity (MT)'}
            />
            <GenericInputField label={'Max Bags'} placeholder={'Max Bags'} />
            <GenericInputField label={'Lead'} placeholder={'Lead'} />
            <GenericInputField
              label={'Bags Per Layer'}
              placeholder={'Bags Per Layer'}
            />
            <GenericInputField
              label={'Location Description'}
              placeholder={'Location Description'}
            />
            <GenericInputField label={'Comments'} placeholder={'Comments'} />
            <View style={styles.buttonContainer}>
              <GenericButton
                title={'Cancel'}
                onPress={handleCloseModal}
                buttonStyles={{width: '100%', height: 50}}
                buttonColor="white"
                textColor="black"
              />
              <GenericButton
                title={'Submit'}
                onPress={handleCloseModal}
                containerStyles={{marginLeft: 30}}
                buttonStyles={{width: '100%', height: 50}}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '90%',
    borderRadius: 10,
    backgroundColor: '#D3D3D3',
    maxHeight: '80%',
  },
  titleContainer: {
    backgroundColor: 'rgba(0,56,49,255)',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  titleStyles: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  contentContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});
