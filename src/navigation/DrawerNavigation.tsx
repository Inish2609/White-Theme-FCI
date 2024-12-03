import {createDrawerNavigator} from '@react-navigation/drawer';
import LabourGangUsage from '../shared/screens/Labour Management/LabourGangUsage';
import LabourGangUsageRail from '../shared/screens/Labour Management/LabourGangUsageRail';
import GangUsageForMiscellaneous from '../shared/screens/Labour Management/GangUsageForMiscellaneous';
import LabourGangAllocation from '../shared/screens/Labour Management/LabourGangAllocation';
import React from 'react';
import CustomSideNavigation from './sharedNavigation/CustomSideNavigation';
import Stacking from '../shared/screens/Shed Operaion/Stacking';
import ManualSync from '../shared/screens/ManualSync';
import StackNavigation from './StackNavigation/StackNavigation';
import LoginStackNavigation from './StackNavigation/LoginStackNavigation';
import Settings from '../shared/screens/Settings';

const Drawer = createDrawerNavigator();

export function DrawerNavigation() {

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomSideNavigation {...props} />}
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        drawerStyle: {width: '80%'},

        headerStyle: {
          backgroundColor: '#00A676',
        },
        headerTintColor: '#FFFFFF',
        headerTitleAlign: 'center',
        headerTitleStyle: {fontWeight: 'bold'},
      }}>
      <Drawer.Screen
        name="Login"
        component={LoginStackNavigation}
        options={{drawerItemStyle: {display: 'none'}}}
      />
      <Drawer.Screen name="Labour Gang Usage" component={LabourGangUsage} />
      <Drawer.Screen
        name="Labour Gang Usage Rail"
        component={LabourGangUsageRail}
      />
      <Drawer.Screen
        name="Gang Usage For Miscellaneous"
        component={GangUsageForMiscellaneous}
      />
      <Drawer.Screen
        name="Labour Gang Allocation"
        component={LabourGangAllocation}
      />
      <Drawer.Screen
        name="Stacking"
        component={Stacking}
        options={{drawerLabelStyle: {color: 'red'}}}
      />
      <Drawer.Screen
        name="Logout"
        component={LoginStackNavigation}
        options={{drawerLabelStyle: {color: 'red'}}}
      />
      <Drawer.Screen
        name="Home"
        component={StackNavigation}
        options={{drawerLabelStyle: {color: 'red'}}}
      />

      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Master Sync" component={ManualSync} />
    </Drawer.Navigator>
  );
}
