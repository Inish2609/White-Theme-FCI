import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  useWindowDimensions,
  FlatList,
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import * as Progress from 'react-native-progress';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import GenericToolTip from '../../component/GenericToolTip';
import ModalWithColors from '../../Form Components/Shed Operations/ModalWithColors';
import {useTranslation} from 'react-i18next';

interface shedItem {
  id: string;
  title: string;
  iconName: string;
  progress: number;
  stackCount: number;
  color: string;
}

const ShedOperations = () => {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const {width, height, fontScale} = useWindowDimensions();

  const [openToolTip, setOpenToolTip] = useState<boolean>(false);
  const [toolTipData, setToolTipData] = useState<{}>({});
  const data = [
    {
      id: '1',
      title: 'shed 1',
      iconName: 'warehouse',
      progress: 1,
      color: '#F44336',
      stackCount: 8,
    },
    {
      id: '2',
      title: 'shed 2',
      iconName: 'warehouse',
      progress: 0,
      color: '#4A4A4A',
      stackCount: 3,
    },
    {
      id: '3',
      title: 'shed 3',
      iconName: 'warehouse',
      progress: 0.8,
      color: '#004d40',
      stackCount: 5,
    },
    {
      id: '4',
      title: 'shed 4',
      iconName: 'warehouse',
      progress: 0.4,
      color: '#00897b',
      stackCount: 10,
    },
    {
      id: '5',
      title: 'shed 5',
      iconName: 'warehouse',
      progress: 0.8,
      color: '#004d40',
      stackCount: 5,
    },
    {
      id: '6',
      title: 'shed 6',
      iconName: 'warehouse',
      progress: 0,
      color: '#4A4A4A',
      stackCount: 1,
    },
    {
      id: '7',
      title: 'shed 7',
      iconName: 'warehouse',
      progress: 0.25,
      color: '#00897b',
      stackCount: 5,
    },
    {
      id: '8',
      title: 'shed 8',
      iconName: 'warehouse',
      progress: 0.6,
      color: '#004d40',
      stackCount: 2,
    },
    {
      id: '9',
      title: 'shed 9',
      iconName: 'warehouse',
      progress: 0,
      color: '#4A4A4A',
      stackCount: 5,
    },
    {
      id: '10',
      title: 'shed 10',
      iconName: 'warehouse',
      progress: 0.35,
      color: '#00897b',
      stackCount: 8,
    },
    {
      id: '11',
      title: 'shed 11',
      iconName: 'warehouse',
      progress: 0.45,
      color: '#00897b',
      stackCount: 6,
    },
    {
      id: '12',
      title: 'shed 12',
      iconName: 'warehouse',
      progress: 0.75,
      color: '#004d40',
      stackCount: 5,
    },
    {
      id: '13',
      title: 'shed 13',
      iconName: 'warehouse',
      progress: 0.9,
      color: '#004d40',
      stackCount: 9,
    },
    {
      id: '14',
      title: 'shed 14',
      iconName: 'warehouse',
      progress: 1,
      color: '#F44336',
      stackCount: 5,
    },
  ];

  const getColumn = () => {
    if (width < 360) {
      return 2;
    } else if (width >= 360 && width < 768) {
      return 3;
    } else if (width >= 768 && width < 1024) {
      return 5;
    } else return 6;
  };

  function handleToolTip(item: any) {
    setOpenToolTip(true);
    setToolTipData(item);
  }

  const {t} = useTranslation();

  const [openModalColor, setOpenModalColor] = useState<boolean>(false);

  const handleStackItem = (item: shedItem) =>
    navigation.navigate('Stacks', {id: item.id, stackCount: item.stackCount});

  const handleShed = ({item}: {item: shedItem}) => {
    const columnWidth = width / getColumn() - 20;
    const imageWidth = columnWidth * 0.8;
    return (
      <View
        style={[
          styles.shedContainer,
          {width: columnWidth},
          {marginHorizontal: width < 768 ? 1 : 5},
        ]}>
        <Pressable
          onPress={() => handleStackItem(item)}
          onLongPress={() => handleToolTip(item)}>
          <View style={[styles.cont, {padding: width < 768 ? 10 : 20}]}>
            <View
              style={{
                // backgroundColor: 'white',
                padding: 15,
                borderRadius: '50%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <FontAwesome5 name={item.iconName} color={item.color} size={35} />
            </View>

            <Text>{item.title}</Text>
            <Progress.Bar
              progress={item.progress}
              width={100}
              color="#003831"
            />
          </View>
        </Pressable>
      </View>
    );
  };
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
      <View style={[styles.scrollableContainer]}>
        <View
          style={[
            styles.titleContainer,
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            },
          ]}>
          <View style={{marginLeft: 30, zIndex: 20}}>
            <TouchableOpacity
              onPress={openDrawer}
              hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
              <Icon name="menu" color="#006a36" size={30} />
            </TouchableOpacity>
          </View>

          <Text
            style={[
              styles.titleStyles,
              {flex: 1, textAlign: 'center', marginLeft: -50},
            ]}>
            {t('Sheds')}
          </Text>

          {/* <TouchableOpacity
            onPress={() => setOpenModalColor(true)}
            hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>
            <Entypo
              name="info-with-circle"
              size={20}
              style={{position: 'absolute', right: 20, top: '-2%'}}
            />
          </TouchableOpacity> */}
          <Entypo
            name="info-with-circle"
            size={20}
            style={{position: 'absolute', right: 20}}
            onPress={() => setOpenModalColor(true)}
          />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.innerContainer}>
            <FlatList
              data={data}
              keyExtractor={item => item.id}
              renderItem={handleShed}
              contentContainerStyle={styles.flatlistContainer}
              numColumns={getColumn()}
              key={getColumn()}
            />
          </View>
        </ScrollView>
      </View>
      <GenericToolTip
        visible={openToolTip}
        setValue={setOpenToolTip}
        item={toolTipData}
      />
      <ModalWithColors visible={openModalColor} setValue={setOpenModalColor} />
    </View>
  );
};
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
    opacity: 0.5,
  },
  gradientOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '30%',
  },
  menuContainer: {
    position: 'absolute',
    top: 36,
    left: 25,
    zIndex: 20,
  },
  scrollableContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    // backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  scrollViewContent: {
    paddingBottom: 20,
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
  innerContainer: {
    flex: 1,
    padding: 20,
  },
  flatlistContainer: {
    flexGrow: 1,
    justifyContent: 'space-evenly',
  },
  shedContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginRight: 10,
  },
  cont: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 23,
  },
});

export default ShedOperations;
