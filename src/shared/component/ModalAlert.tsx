import React from 'react';
import {Modal, ScrollView, StyleSheet, Text, View} from 'react-native';
import GenericDropDown from '../component/GenericDropDown';
import GenericCalenderField from '../component/GenericCalenderField';
import GenericInputField from '../component/GenericInputField';
import GenericButton from '../component/GenericButton';
import {useTranslation} from 'react-i18next';

type Props = {
  visible: boolean;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ModalAlert({visible, setValue}: Props) {
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
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}>
            <GenericDropDown
              Options={[
                {title: 'Activity 01', value: 'Activity 01'},
                {title: 'Activity 02', value: 'Activity 02'},
                {title: 'Activity 03', value: 'Activity 03'},
              ]}
              containerStyles={{zIndex: 5}}
              label={'Activity'}
            />
            <GenericCalenderField
              label={'Start Time'}
              placeholder={'Start Time'}
            />
            <GenericCalenderField label={'End Time'} placeholder={'End Time'} />
            <GenericInputField
              label={'No Of Bags'}
              keyboardType="numeric"
              placeholder={'No Of Bags'}
            />
            <GenericDropDown
              Options={[
                {title: 'Labour 01', value: 'Labour 01'},
                {title: 'Labour 02', value: 'Labour 02'},
                {title: 'Labour 03', value: 'Labour 03'},
              ]}
              containerStyles={{zIndex: 3}}
              label={'Labour Gang'}
            />
            <GenericInputField label={'Lead'} placeholder={'Lead'} />
            <GenericDropDown
              Options={[
                {title: 'Shed 01', value: 'Shed 01'},
                {title: 'Shed 02', value: 'Shed 02'},
                {title: 'Shed 03', value: 'Shed 03'},
              ]}
              containerStyles={{zIndex: 2}}
              label={'Stack Name'}
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
