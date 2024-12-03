import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Screen1FormComponents from '../../Form Components/Labour Management/Screen1FormComponents';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import Header from '../../component/Header';
import GenericScanner from '../../component/GenericScanner';
import {useState} from 'react';
import {useTranslation} from 'react-i18next';

export default function LabourGangUsage() {
  const navigation = useNavigation();

  const {t} = useTranslation();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const [visible, setVisible] = useState<boolean>(false);
  const [scannedData, setScannedData] = useState<{}>({});

  if (visible) {
    return (
      <View style={{flex: 1}}>
        <GenericScanner
          openCamera={visible}
          setOpenCamera={setVisible}
          setScannedData={setScannedData}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/5.jpg')}
          style={styles.imageStyles}
        />
        <LinearGradient
          colors={['transparent', '#003831']}
          style={styles.gradientOverlay}
        />
      </View> */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          onPress={openDrawer}
          hitSlop={{top: 10, bottom: 10, left: 20, right: 20}}>
          <Icon name="menu" color="#006a36" size={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.scannerContainer}>
        <TouchableOpacity
          onPress={() => setVisible(true)}
          hitSlop={{top: 10, bottom: 10, left: 20, right: 20}}>
          <Icon name="camera" size={28} color={'#006a36'} />
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleStyles}>{t('Labour Gang Usage')}</Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">
          <View style={{flex: 1, padding: 10, marginTop: 5}}>
            <Screen1FormComponents />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#003831',
  },
  imageContainer: {
    width: '100%',
    height: '80%',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyles: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    opacity: 0.7,
  },
  gradientOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '30%',
  },
  card: {
    position: 'absolute',
    top: '6%',
    left: '3%',
    right: '3%',
    bottom: '1%',
    padding: 20,
    // backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 6,
    zIndex: 5,
  },
  scannerContainer: {
    position: 'absolute',
    top: '3%',
    left: '50%',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{translateX: -30}], // Centers the container
    zIndex: 10,
  },
  menuContainer: {
    position: 'absolute',
    top: '5%',
    left: 50,
    zIndex: 20,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  titleStyles: {
    fontFamily: 'Roboto',
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#006a36',
  },
});
