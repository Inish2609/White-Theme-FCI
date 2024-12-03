import React from 'react';
import {Modal, ScrollView, StyleSheet, Text, View} from 'react-native';
import GenericDropDown from '../../component/GenericDropDown';
import GenericInputField from '../../component/GenericInputField';
import GenericButton from '../../component/GenericButton';
import {useTranslation} from 'react-i18next';
import {ActivityData, GangData, ShedData} from '../../../data';

type Props = {
  visible: boolean;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ModalAlert2({visible, setValue}: Props) {
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
              {t('Labour Gang Usage Details')}
            </Text>
          </View>
          <ScrollView
            contentContainerStyle={styles.contentContainer}
            keyboardShouldPersistTaps="handled">
            <GenericDropDown
              Options={GangData}
              label={'Gang Number'}
              containerStyles={{zIndex: 10}}
            />
            <GenericDropDown
              Options={ActivityData}
              label={'Activity'}
              containerStyles={{zIndex: 9}}
            />
            <GenericDropDown
              Options={ShedData}
              label={'Shed Number'}
              containerStyles={{zIndex: 8}}
            />
            <GenericInputField
              label={'No Of Bags'}
              keyboardType="numeric"
              placeholder={'No Of Bags'}
            />
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
    zIndex: 0,
  },
  modalView: {
    width: '90%',
    borderRadius: 10,
    backgroundColor: '#D3D3D3',
    maxHeight: '80%',
    zIndex: 0,
  },
  titleContainer: {
    backgroundColor: '#003831',
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
