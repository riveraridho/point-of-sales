import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {
  Card,
  Title,
  Button,
  TextInput,
  Headline,
  Searchbar,
  Provider as PaperProvider,
} from 'react-native-paper';
import PosItem from '../components/PosItem';
import {connect} from 'react-redux';
import {setPos} from '../redux/action';

class Pos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {id: 1, itemName: 'monitor', itemPrice: 199, quantity: 0},
        {id: 2, itemName: 'keyboard', itemPrice: 100, quantity: 0},
        {id: 3, itemName: 'headset', itemPrice: 20, quantity: 0},
        {id: 4, itemName: 'mouse', itemPrice: 50, quantity: 0},
      ],
      //buttonDisable: true,
    };
  }

  onSave = async () => {
    const {navigation} = this.props;
    this.props.dispatchsetPos(this.state.products);
    navigation.navigate('Payment Pos');
  };

  onSubtract = (item, index) => {
    const products = [...this.state.products];
    products[index].quantity -= 1;
    this.setState({products});
  };

  onAdd = (item, index) => {
    // this.setState({quantity: this.state.quantity + 1});'
    const products = [...this.state.products];
    products[index].quantity += 1;
    this.setState({products});
  };

  // disable = (item, index) => {
  //   const products = [...this.state.products];
  //   products[index].quantity < 0
  //     ? this.setState({buttonDisable: true})
  //     : this.setState({buttonDisable: false});
  // };

  render() {
    const products = this.state.products;
    let totalQuantity = 0;
    products.forEach(item => {
      totalQuantity += item.quantity;
    });
    // if (totalQuantity != 0) {
    //   this.setState({
    //     buttonDisable: false,
    //   });
    // }

    return (
      <View style={{flex: 1, backgroundColor: '#F1F1F1'}}>
        {/* Top Component/ScreenName */}
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'column',
              width: '92%',
              borderBottomColor: 'black',
              borderBottomWidth: 2,
              justifyContent: 'space-between',
            }}>
            <Title
              style={{
                fontSize: 28,
                fontWeight: 'bold',
                textAlign: 'left',
              }}>
              {this.props.route.name}
            </Title>
          </View>
        </View>
        <View style={{marginHorizontal: 15, marginTop: 10}}>
          <Searchbar
            style={{marginBottom: 10, borderRadius: 10}}
            placeholder="Search Customer"
            //onChangeText={onChangeSearch}
            //value={searchQuery}
          />
          <Searchbar style={{borderRadius: 10}} placeholder="Search Product" />
        </View>

        {/* List Product */}
        <View style={{height: '60%', marginTop: 15}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={products}
            renderItem={({item, index}) => (
              <PosItem
                item={item}
                //disable={() => this.disable(item, index)}
                onSubtract={() => this.onSubtract(item, index)}
                onAdd={() => this.onAdd(item, index)}
              />
            )}
            keyExtractor={item => item.id}
          />
        </View>

        {/* Button Checkout */}

        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              alignSelf: 'center',
              width: '92%',
              height: 55,
              borderRadius: 10,
              marginBottom: 10,
              backgroundColor: '#121212',
            }}>
            <TouchableOpacity onPress={this.onSave}>
              <Title
                style={{
                  height: '100%',
                  fontSize: 18,
                  textAlign: 'center',
                  marginTop: 10,
                  color: 'white',
                }}>
                Check Out
              </Title>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    pos: state.pos,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchsetPos: data => dispatch(setPos(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pos);

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
    margin: 5,
    padding: 2,
    marginTop: 15,
  },
  card: {
    alignItems: 'center',
    width: 150,
    height: 150,
    borderRadius: 15,
  },
  productImage: {
    width: 115,
    height: 115,
  },
  containerList: {},
  bottomCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
  },
});
