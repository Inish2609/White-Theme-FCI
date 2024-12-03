import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../shared/screens/Login';
import ForgetPassword from '../../shared/screens/ForgetPassword';
import ContactUs from '../../shared/screens/ContactUs';
import StartScreen from '../../shared/screens/StartScreen';

const Stack = createNativeStackNavigator();

export default function LoginStackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Start Page"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login Page" component={Login} />
      <Stack.Screen name="Start Page" component={StartScreen} />
      <Stack.Screen name="Forget Password" component={ForgetPassword} />
      <Stack.Screen name="Contact Us" component={ContactUs} />
    </Stack.Navigator>
  );
}
