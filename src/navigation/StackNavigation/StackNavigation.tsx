import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ShedOperations from '../../shared/screens/Shed Operaion/ShedOperations';
import StackManagement from '../../shared/screens/Shed Operaion/StackManagement';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Sheds" component={ShedOperations} />
      <Stack.Screen name="Stacks" component={StackManagement} />
    </Stack.Navigator>
  );
}
