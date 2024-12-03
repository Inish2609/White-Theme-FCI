import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {MENU_ITEMS} from './Menu';
import CustomMenuItem from './CustomMenuItem';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';

interface CustomSideNavigationProps {
  navigation: any;
}

interface MenuItem {
  name: string;
  role: string[];
}

const menuItems = MENU_ITEMS;

const CustomSideNavigation: React.FC<CustomSideNavigationProps> = ({
  navigation,
}) => {
  const {t} = useTranslation();

  return (
    <DrawerContentScrollView
      style={styles.drawerColor}
      contentContainerStyle={{paddingTop: 0}}>
      <View style={styles.headerContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/2.png')}
            style={styles.headerImage}
          />
        </View>

        <Text style={styles.headerText}>{t('Anna Darpan')}</Text>
      </View>

      {menuItems.map((item, index) => (
        <CustomMenuItem key={index} item={item} navigation={navigation} />
      ))}

      {/* <DrawerItem
        label="Logout"
        labelStyle={{color: 'red'}}
        onPress={() => {
          navigation.navigate('Login', {screen: 'Login Page'});
        }}
      /> */}
    </DrawerContentScrollView>
  );
};

export default CustomSideNavigation;

const styles = StyleSheet.create({
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.7,
    shadowRadius: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  drawerColor: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  backgroundCircle: {
    width: 120,
    height: 120,
    borderRadius: 70,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },

  textStyle: {
    justifyContent: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#003831',
    marginTop: -12,
    marginLeft: -12,
    marginRight: -12,
    marginBottom: 10,
  },
  headerImage: {
    width: 100,
    height: 100,
    borderRadius: 25,
  },
  headerText: {
    fontFamily: 'monospace',
    fontSize: 22,
    fontStyle: 'normal',
    fontWeight: 'bold',
    letterSpacing: 1.5,
    color: '#e6eceb',
    textShadowColor: 'black',
    textShadowRadius: 1.5,
    textShadowOffset: {width: 0.5, height: 0.5},
    marginLeft: 20,
    flexShrink: 1,
  },
});
