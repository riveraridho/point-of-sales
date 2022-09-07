import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  Card,
  Title,
  Paragraph,
  List,
  Provider as PaperProvider,
  Button,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import TitleNavigation from '../../components/TitleNavigation';

class ListProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [
        {id: 1, itemName: 'monitor', itemPrice: 199, stock: 51},
        {id: 2, itemName: 'keyboard', itemPrice: 100, stock: 12},
        {id: 3, itemName: 'headset', itemPrice: 20, stock: 21},
        {id: 4, itemName: 'mouse', itemPrice: 50, stock: 54},
        {id: 5, itemName: 'vga', itemPrice: 50, stock: 2},
        {id: 6, itemName: 'cable', itemPrice: 50, stock: 154},
        {id: 7, itemName: 'cpu', itemPrice: 50, stock: 14},
        {id: 8, itemName: 'casing', itemPrice: 50, stock: 94},
      ],
    };
  }
  render() {
    const data = this.state.product;
    const {navigation} = this.props;
    return (
      <View style={{flex: 1, backgroundColor: '#F1F1F1'}}>
        {/* Top Component/ScreenName */}
        <TitleNavigation
          title={this.props.route.name}
          total={data.filter(index => index.id).length}
        />
        {/* List item */}

        <ScrollView showsVerticalScrollIndicator={false} Style={{flex: 1}}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            {data.map((item, index) => {
              return (
                <View
                  style={{
                    height: 90,
                    width: '92%',
                    justifyContent: 'flex-start',
                    flexDirection: 'row',
                    borderBottomColor: 'grey',
                    borderBottomWidth: 1,
                    paddingHorizontal: 10,
                    paddingTop: 5,
                  }}>
                  <View
                    style={{
                      width: 75,
                      height: 75,
                      backgroundColor: 'green',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: 'black', fontSize: 18}}>
                      Picture only
                    </Text>
                  </View>

                  <View
                    style={{
                      paddingLeft: 10,
                      flexDirection: 'row',
                      width: '80%',
                      height: '100%',
                      justifyContent: 'space-between',
                    }}>
                    <Title style={{color: 'black', fontSize: 18}}>
                      {item.itemName}
                    </Title>
                    <View
                      style={{
                        flexDirection: 'column',
                        width: '40%',
                      }}>
                      <Text
                        style={{
                          color: 'black',
                          fontSize: 18,
                          fontWeight: 'bold',
                          textAlign: 'right',
                          marginRight: 3,
                        }}>
                        ${item.itemPrice}.00
                      </Text>

                      <View
                        style={{
                          backgroundColor: '#DCDCDC',
                          width: 35,
                          height: 25,
                          alignItems: 'center',
                          position: 'absolute',
                          borderRadius: 15,
                          marginLeft: 75,
                          marginTop: 25,
                        }}>
                        <Text
                          style={{
                            color: 'black',
                            fontWeight: 'bold',
                            fontSize: 16,
                          }}>
                          {item.stock}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>

        {/* Add button */}
        <TouchableOpacity
          style={{
            width: 70,
            height: 70,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            bottom: 20,
            right: 10,
            backgroundColor: '#121212',
            borderRadius: 100,
          }}
          onPress={() => navigation.navigate('CreateProduct')}>
          <Icon name="plus" size={30} color="white" />
        </TouchableOpacity>

        <View style={{height: 50, width: '100%', marginTop: 10}} />
      </View>
    );
  }
}

export default ListProduct;

const styles = StyleSheet.create({
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 18,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10,
    flex: 1,
    paddingHorizontal: 5,
    padding: 2,
    marginTop: 30,
    minHeight: 300,
  },
  card: {
    alignItems: 'center',
    width: 150,
    height: 150,
    borderRadius: 15,
  },
  productImage: {
    width: 75,
    height: 75,
    marginHorizontal: 10,
    marginTop: 5,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    paddingLeft: 5,
    backgroundColor: '#efefef',
    margin: 20,
    minHeight: 50,
  },
  swipedRow: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    paddingLeft: 5,
    backgroundColor: '#818181',
    margin: 20,
    minHeight: 50,
  },
  swipedConfirmationContainer: {
    flex: 1,
  },
  deleteConfirmationText: {
    color: '#fcfcfc',
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#b60000',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
  },
  deleteButtonText: {
    color: '#fcfcfc',
    fontWeight: 'bold',
    padding: 3,
  },
});
