import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import StartScreen from './src/shared/screens/StartScreen';
import WelcomeScreen from './src/shared/screens/WelcomeScreen';
import { DrawerNavigation } from './src/navigation/DrawerNavigation';
import { NavigationContainer } from '@react-navigation/native';
import Settings from './src/shared/screens/Settings';

// const Drawer = createDrawerNavigator();

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // const [visible, setVisible] = useState<boolean>(false);
  // const [scannedData, setScannedData] = useState<{}>({});

  // if (visible) {
  //   return (
  //     <View style={{flex: 1}}>
  //       <GenericScanner
  //         openCamera={visible}
  //         setOpenCamera={setVisible}
  //         setScannedData={setScannedData}
  //       />
  //     </View>
  //   );
  // }

  return (
    <SafeAreaProvider >
      <StatusBar hidden={true} />
      <PaperProvider>
        <View style={styles.container}>
          {/* <Stacking /> */}
          {/* <StartScreen /> */}
          {/* <Settings /> */}
          {showWelcome ? (
            <WelcomeScreen />
          ) : (
            <NavigationContainer>
              <DrawerNavigation />
            </NavigationContainer>
          )}
          {/* <ForgetPassword /> */}
          {/* <ManualSync  /> */}
          {/* <Login /> */}
          {/* <ShedOperations /> */}
          {/* <StackManagement  /> */}
          {/* <ContactUs /> */}
          {/* <TouchableOpacity onPress={() => setVisible(true)}>
            <Text>Inish</Text>
          </TouchableOpacity> */}
        </View>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // scrollContainer: {
  //   flexGrow: 1,
  //   paddingBottom: 20,
  // },
});
