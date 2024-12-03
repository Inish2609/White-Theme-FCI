import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import GenericDropDown from '../component/GenericDropDown';
import GenericInputField from '../component/GenericInputField';
import GenericPasswordField from '../component/GenericPasswordField';
import GenericButton from '../component/GenericButton';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useTranslation} from 'react-i18next';

export default function Login() {
  const navigation = useNavigation();

  const {t} = useTranslation();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContentContainer}
        keyboardShouldPersistTaps="handled">
        <View style={styles.menuContainer}>
          <TouchableOpacity
            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
            onPress={() => {
              navigation.navigate('Start Page');
            }}>
            <Ionicons
              name="arrow-back-circle-sharp"
              color="#006a36"
              size={40}
            />
          </TouchableOpacity>
        </View>
        {/* <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/1.jpg')}
          style={styles.imageStyles}
        />
        <LinearGradient
          colors={['transparent', '#003831']}
          style={styles.gradientOverlay}
        />
      </View> */}
        <View style={styles.formContainer}>
          <View style={styles.logoCenterStyles}>
            <View style={styles.logoContainer}>
              <Image
                source={require('../../assets/2.png')}
                style={styles.logoStyles}
              />
            </View>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.titleStyles}>{t('Anna Darpan')}</Text>
          </View>
          <View style={styles.fieldsContainer}>
            <GenericDropDown
              Options={[
                {title: 'Miller', value: 'Miller'},
                {title: 'Farmer', value: 'Farmer'},
                {title: 'FCI Admin', value: 'FCI Admin'},
              ]}
              label={'Login Type'}
              containerStyles={{width: '85%'}}
              buttonContainerStyles={{height: 50}}
            />
            <GenericInputField
              label={'Username'}
              placeholder={'Username'}
              containerStyles={{width: '85%'}}
              buttonContainerStyles={{height: 50}}
            />
            <GenericPasswordField
              label={'Password'}
              placeholder={'Password'}
              containerStyles={{width: '85%'}}
              buttonContainerStyles={{height: 50}}
            />
            <View style={styles.otpContainer}>
              <GenericInputField
                label={'OTP'}
                placeholder={'Enter OTP'}
                containerStyles={{flex: 6, marginRight: 10}}
                buttonContainerStyles={{height: 50}}
              />
              <GenericButton
                title={'OTP'}
                onPress={() => {}}
                containerStyles={styles.otpButtonContainer}
                buttonStyles={{height: 50}}
              />
            </View>

            <GenericButton
              title={'Submit'}
              onPress={() => {
                navigation.navigate('Master Sync');
              }}
              containerStyles={{width: '40%'}}
            />
            <View
              style={{
                marginBottom: 5,
                marginTop: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Forget Password')}
                hitSlop={{top: 10, bottom: 10, left: 20, right: 20}}>
                <Text style={styles.contactText}>{t('Forget Password')}?</Text>
              </TouchableOpacity>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Contact Us')}
                hitSlop={{top: 10, bottom: 10, left: 20, right: 20}}>
                <Text style={styles.contactText}>
                  {t('Contact Us & Support')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#003831',
  },
  scrollContentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingBottom: 20,
  },
  imageContainer: {
    width: '100%',
    height: 400,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    overflow: 'hidden',
  },
  imageStyles: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    opacity: 0.8,
  },
  gradientOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '30%',
  },
  formContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    // marginTop: -300,
  },
  logoContainer: {
    width: 200,
    height: 200,
    // backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 80,
    // elevation: 30,
    // shadowColor: 'green',
  },
  logoStyles: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
  menuContainer: {
    position: 'absolute',
    top: 35,
    left: 20,
    zIndex: 20,
  },
  logoCenterStyles: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  titleStyles: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#006a36',
  },
  fieldsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  otpButtonContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactText: {
    color: '#006a36',
    marginTop: 15,
  },
});
