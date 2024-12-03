import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from '../../../assets/stack.svg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation, useRoute} from '@react-navigation/native';
import ToolTipStack from '../../Form Components/Shed Operations/ToolTipStack';
import ModalWithColors from '../../Form Components/Shed Operations/ModalWithColors';
import Entypo from 'react-native-vector-icons/Entypo';
import {useTranslation} from 'react-i18next';

const StackData = [
  {
    id: '1',
    title: 'Stack 1',
    capacity: '100 QT',
    stackName: '1A001',
    utilization: '77%',
    cropYear: '2014-15',
    color: '#004d40',
  },
  {
    id: '2',
    title: 'Stack 2',
    capacity: '80 QT',
    stackName: '2A001',
    utilization: '100%',
    cropYear: '2014-15',
    color: '#F44336',
  },
  {
    id: '3',
    title: 'Stack 3',
    capacity: '100 QT',
    stackName: '3A001',
    utilization: '0%',
    cropYear: '2015-16',
    color: '#4A4A4A',
  },
  {
    id: '4',
    title: 'Stack 4',
    capacity: '80 QT',
    stackName: '4A001',
    utilization: '30%',
    cropYear: '2017-18',
    color: '#00897b',
  },
  {
    id: '5',
    title: 'Stack 5',
    capacity: '100 QT',
    stackName: '5A001',
    utilization: '65%',
    cropYear: '2014-15',
    color: '#004d40',
  },
  {
    id: '6',
    title: 'Stack 6',
    capacity: '80 QT',
    stackName: '6A001',
    utilization: '100%',
    cropYear: '2019-20',
    color: '#F44336',
  },
  {
    id: '7',
    title: 'Stack 7',
    capacity: '100 QT',
    stackName: '7A001',
    utilization: '70%',
    cropYear: '2015-16',
    color: '#004d40',
  },
  {
    id: '8',
    title: 'Stack 8',
    capacity: '80 QT',
    stackName: '8A001',
    utilization: '50%',
    cropYear: '2017-18',
    color: '#004d40',
  },
  {
    id: '9',
    title: 'Stack 9',
    capacity: '40 QT',
    stackName: '9A001',
    utilization: '20%',
    cropYear: '2015-16',
    color: '#00897b',
  },
  {
    id: '10',
    title: 'Stack 10',
    capacity: '70 QT',
    stackName: '10A001',
    utilization: '50%',
    cropYear: '2017-18',
    color: '#004d40',
  },
  {
    id: '11',
    title: 'Stack 11',
    capacity: '100 QT',
    stackName: '11A001',
    utilization: '90%',
    cropYear: '2014-15',
    color: '#004d40',
  },
  {
    id: '12',
    title: 'Stack 12',
    capacity: '80 QT',
    stackName: '12A001',
    utilization: '100%',
    cropYear: '2019-20',
    color: '#F44336',
  },
  {
    id: '13',
    title: 'Stack 13',
    capacity: '20 QT',
    stackName: '13A001',
    utilization: '50%',
    cropYear: '2014-15',
    color: '#004d40',
  },
  {
    id: '14',
    title: 'Stack 14',
    capacity: '100 QT',
    stackName: '14A001',
    utilization: '0%',
    cropYear: '2015-16',
    color: '#4A4A4A',
  },
  {
    id: '15',
    title: 'Stack 15',
    capacity: '80 QT',
    stackName: '15A001',
    utilization: '50%',
    cropYear: '2018-19',
    color: '#004d40',
  },
];
const StackManagement = () => {
  const {width} = useWindowDimensions();

  const navigation = useNavigation();

  const [openToolTip, setOpenToolTip] = useState<boolean>(false);
  const [toolTipData, setToolTipData] = useState<{}>({});

  const {t} = useTranslation();

  const openDrawer = () => {
    navigation.navigate('Sheds');
  };

  const route = useRoute();
  const id = route.params?.id;
  const stackCount = route.params?.stackCount;

  const data = Array.from({length: stackCount}, (_, index) => ({
    id: StackData[index]?.id,
    values: StackData[index],
  }));

  const [openModalColor, setOpenModalColor] = useState<boolean>(false);

  const getColumn = () => {
    if (width < 360) return 2;
    else if (width >= 360 && width < 768) return 3;
    else if (width >= 768 && width < 1024) return 4;
    return 5;
  };

  function handleToolTip(item: any) {
    setOpenToolTip(true);
    setToolTipData(item);
    console.log(item);
  }

  const renderStackIcon = ({item, index}: {item: any; index: number}) => {
    const columnWidth = width / getColumn() - 20;
    const imageWidth = columnWidth * 0.8;

    return (
      <View
        style={[
          styles.shedContainer,
          {width: columnWidth, marginHorizontal: 10},
        ]}>
        <View style={[styles.cont, {padding: width < 768 ? 10 : 20}]}>
          <TouchableOpacity onLongPress={() => handleToolTip(item)}>
            <View
              style={{
                // backgroundColor: 'white',
                padding: 15,
                borderRadius: '50%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon width={60} height={60} fill={item.values.color} />
            </View>

            <Text style={{textAlign: 'center'}}>Stack {index + 1}</Text>
          </TouchableOpacity>
        </View>
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

      {/* <View style={styles.menuContainer}></View> */}

      <View style={[styles.scrollableContainer]}>
        <View style={[styles.titleContainer]}>
          <TouchableOpacity onPress={openDrawer}>
            <Ionicons
              name="arrow-back-circle-sharp"
              color="#006a36"
              size={40}
            />
          </TouchableOpacity>
          <Text style={styles.titleStyles}>
            {t('Stacks in Shed')} {id}
          </Text>
          <Entypo
            name="info-with-circle"
            size={20}
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
              renderItem={renderStackIcon}
              contentContainerStyle={styles.flatlistContainer}
              numColumns={getColumn()}
              key={getColumn()}
            />
          </View>
        </ScrollView>
      </View>
      <ToolTipStack
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
    top: 35,
    left: 20,
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
    borderRadius: 10,
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  titleStyles: {
    fontFamily: 'Roboto',
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#006a36',
    textAlign: 'center',
    flex: 1,
  },
  innerContainer: {
    flex: 1,
  },
  flatlistContainer: {
    flexGrow: 1,
    justifyContent: 'space-evenly',
  },
  shedContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  cont: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
  wheatImage: {},
  iconContainer: {
    marginRight: 95,
    marginLeft: -100,
  },
  headerStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },

  title: {
    fontSize: 20,
    fontFamily: 'Roboto',
  },
});

export default StackManagement;
