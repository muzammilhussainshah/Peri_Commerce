// @app
import React, {
  useEffect,
  useState
} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign'
import { RFPercentage } from 'react-native-responsive-fontsize';

import Colors from '../../styles/Colors';
import Title from '../../components/Title';
import { styles } from './styles';
import { ArrivalCart } from '../Home/Components/ArrivalCart';

const Category = ({ navigation, route }) => {

  const [selectedCompany, setSeletedCompany] = useState('')
  const [selectedModal, setSeletedModal] = useState('')

  const selectedProduct = route?.params?.item

  if (selectedProduct?.data?.subcategories) {
    var COMPANY = Object.entries(selectedProduct?.data?.subcategories).map(([key, value]) => ({ key, value }));
    var COMPANYPRODUCTS = selectedCompany && Object.entries(selectedProduct?.data?.subcategories[selectedCompany]?.items).map(([key, value]) => ({ key: selectedCompany, value }));
  }
  useEffect(() => {
    var keys = Object.keys(selectedProduct?.data?.subcategories);
    if (keys?.length > 0) setSeletedCompany(keys[0])
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>

        <TouchableOpacity activeOpacity={.8}
          onPress={() => navigation.pop()}
          style={styles.rowContainer}>
          <AntDesign
            name={`left`}
            size={RFPercentage(2)}
            style={styles.mr1}
            color={Colors.primary} />
          <Title title={selectedProduct?.id} type={'Poppin-16'} weight={'600'} color={Colors.primary} />
        </TouchableOpacity>

        <View style={styles.rowContainer}>
          <AntDesign
            name={`search1`}
            size={RFPercentage(3)}
            style={styles.mr1}
            color={Colors.fontColor} />
          <AntDesign
            style={styles.mr1}
            name={`shoppingcart`}
            size={RFPercentage(3)}
            color={Colors.fontColorV2} />
        </View>
      </View>

      <View style={styles.row}>
        <Title
          title={`${COMPANYPRODUCTS?.length} results in ${selectedCompany}`}
          weight={'600'}
          color={Colors.gray}
          type={'Poppin-14'} />
        <Image source={require('../../assets/system-uicons_filtering.png')} />
      </View>

      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          data={COMPANY}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => setSeletedCompany(item?.key)} style={[styles.companyWrapper, { paddingHorizontal: 0 }]}>
                <Title
                  title={item?.key}
                  weight={selectedCompany == item?.key ? "600" : '400'}
                  color={selectedCompany == item?.key ? Colors.black : Colors.gray}
                  type={'Poppin-14'} />
              </TouchableOpacity>
            )
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      {/* <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          data={MODAL}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => setSeletedModal(item)} style={[styles.companyWrapper, { backgroundColor: Colors.lightGray, }]}>
                <Title
                  title={item}
                  weight={selectedModal == item ? "600" : '400'}
                  color={selectedModal == item ? Colors.black : Colors.gray}
                  type={'Poppin-14'} />
              </TouchableOpacity>
            )
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View> */}

      <FlatList
        data={COMPANYPRODUCTS}
        numColumns={2}
        contentContainerStyle={styles.listContainer2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={(item) => {
          return (<ArrivalCart  selectedProduct={selectedProduct} item={item.item} category navigation={navigation} />)
        }}
        keyExtractor={(item, index) => index.toString()}
      />

    </SafeAreaView >
  );
};
export default Category;
