import {StyleSheet} from 'react-native';

export const GenericInputFieldStyles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    paddingVertical: 8,
    borderRadius: 30,
  },
  buttonContainer: {
    width: '100%',
    backgroundColor: 'white',
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 2.5},
    shadowOpacity: 0.7,
    shadowRadius: 5,
    borderRadius: 10,
    // paddingHorizontal: 10,
  },
});

export const GenericDropDownStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 30,
    zIndex: 1,
  },
  menuItems: {
    // marginTop: 40,
  },
  items: {
    // marginTop: 55,
    width: '100%',
    // zIndex: 1000,
    // height: 150,
    // marginLeft: 6,
    left: 0,
  },
  menuItemsContainer: {
    width: '100%',
    // zIndex: 9999,  // Ensure it stays above other elements
  },
});

export const GenericPasswordFieldStyles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    paddingVertical: 8,
    borderRadius: 30,
  },
});

export const GenericButtonStyles = StyleSheet.create({
  conatiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // margin: 10,
    // width:"100%"
  },
  button: {
    // alignItems: "center",
    justifyContent: 'center',
    // borderWidth:2,
    borderColor: 'black',
    width: '100%',
  },
  labelStyle: {
    fontSize: 17,
    textAlign: 'center',
    flexWrap: 'wrap',
    width: '100%',
  },
});

export const GenericCalenderFieldStyles = StyleSheet.create({
  conatiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
});

export const GenericCheckBoxStyles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    marginLeft: 10,
    color: '#003831',
  },
});

export const GenericToggleButtonStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  switchContainer: {
    transform: [{scale: 1.5}],
  },
});

export const GenericHeaderStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dividerContainer: {
    borderWidth: 1.5,
    borderColor: 'black',
  },
});
