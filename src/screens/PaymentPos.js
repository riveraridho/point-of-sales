import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  Card,
  Title,
  Button,
  TextInput,
  Headline,
  Provider as PaperProvider,
} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import {connect} from 'react-redux';
import {loadPos} from '../redux/action';
import TitleNavigation from '../components/TitleNavigation';

class PaymentPos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      paymentMeth: '',
    };
  }

  render() {
    const {navigation} = this.props;
    const data = this.props.pos;
    return (
      <View style={{flex: 1, backgroundColor: '#F1F1F1'}}>
        {/* Top Component/ScreenName */}
        <TitleNavigation
          title={this.props.route.name}
          total={data.filter(values => values.quantity).length}
        />

        {/* List Product */}

        <ScrollView showsVerticalScrollIndicator={false} Style={{flex: 1}}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            {data
              .filter(val => val.quantity)
              .map((item, index) => {
                return (
                  <View
                    style={{
                      height: 165,
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
                        width: 150,
                        height: 150,
                        backgroundColor: 'green',
                        alignItems: 'center',
                      }}>
                      <Text style={{color: 'black', fontSize: 18}}>asdas</Text>
                    </View>
                    <View
                      style={{
                        paddingLeft: 10,
                        flexDirection: 'column',
                        width: '60%',
                        height: '100%',
                      }}>
                      <Title style={{color: 'black', fontSize: 22}}>
                        {item.itemName}
                      </Title>
                      <Text style={{color: '#808080', fontSize: 14}}>
                        Options: Black
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          paddingTop: 60,
                        }}>
                        <Text
                          style={{
                            color: 'black',
                            fontWeight: 'bold',
                            fontSize: 16,
                          }}>
                          ${item.itemPrice}.00
                        </Text>
                        <View
                          style={{
                            backgroundColor: '#DCDCDC',
                            width: 35,
                            height: 25,
                            alignItems: 'center',
                            borderRadius: 15,
                          }}>
                          <Text
                            style={{
                              color: 'black',
                              fontWeight: 'bold',
                              fontSize: 16,
                            }}>
                            {item.quantity}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                );
              })}
          </View>
        </ScrollView>

        {/* Total Component */}
        <View
          style={{
            marginTop: 5,
            height: 50,
            width: '92%',
            alignSelf: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 18, color: 'black'}}>Sub total</Text>
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  alignSelf: 'flex-end',
                  fontSize: 22,
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                $9999
              </Text>
              <Text>(Total includes tax)</Text>
            </View>
          </View>
        </View>

        {/* Bottom Component */}
        <View
          style={{
            marginTop: 5,
            justifyContent: 'flex-end',
          }}>
          {/* Payment Button */}
          <View style={styles.bottomCenter}>
            <Card
              style={{
                alignItems: 'center',
                width: '92%',
                height: 55,
                borderRadius: 10,
                marginTop: 10,
              }}>
              <Picker
                style={{
                  width: 400,
                  height: 55,
                  alignItems: 'center',
                }}
                selectedValue={this.state.paymentMeth}
                onValueChange={itemValue => {
                  this.setState({paymentMeth: itemValue});
                }}>
                <Picker.Item label="Select Payment Method" value="" />
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
              </Picker>
            </Card>
          </View>

          {/* Chekcout Button */}
          <View
            style={{
              alignSelf: 'center',
              width: '92%',
              height: 55,
              borderRadius: 10,
              marginBottom: 15,
              backgroundColor: '#121212',
            }}>
            <TouchableOpacity onPress={() => console.log('test')}>
              <Title
                style={{
                  height: '100%',
                  fontSize: 18,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 10,
                  color: 'white'
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
  console.log('state', state);
  return {
    pos: state.pos,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchloadPos: data => dispatch(loadPos(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentPos);

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
  bottomCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
});
