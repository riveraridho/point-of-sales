import React, {Component} from 'react';
import {
  View,
  ScrollView,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  Card,
  Title,
  Paragraph,
  List,
  Provider as PaperProvider,
} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {connect} from 'react-redux';
import {setProduct} from '../../redux/action';

class CreateProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      street: '',
      city: '',
      province: '',
      zipcode: '',
      telfonnumber: '',
    };
  }

  onSave = () => {
    const {navigation} = this.props;
    this.props.dispatchsetCustomer(this.state);
    navigation.navigate('ListCustomer');
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#F1F1F1'}}>
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'column',
              width: '96%',
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
        <KeyboardAwareScrollView>
          <TouchableOpacity
            style={{
              height: 300,
              width: '100%',
              backgroundColor: '#ED760E',
              marginTop: 10,
            }}>
            <Text>Picture Only</Text>
          </TouchableOpacity>
          <TextInput
            placeholder="Product Name"
            value={this.state.firstname}
            mode="outlined"
            style={{
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              height: 55,
              marginHorizontal: 10,
              borderBottomWidth: 1,
              backgroundColor: '#F1F1F1',
            }}
            onChange={event => {
              this.setState({
                firstname: event.nativeEvent.text,
              });
            }}
          />
          <View style={styles.container}>
            <TextInput
              placeholder="Stock"
              value={this.state.street}
              style={styles.input}
              onChange={event => {
                this.setState({
                  street: event.nativeEvent.text,
                });
              }}
            />
            <TextInput
              placeholder="Price"
              value={this.state.province}
              style={styles.input}
              onChange={event => {
                this.setState({
                  province: event.nativeEvent.text,
                });
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
            }}>
            <View style={styles.bottomCenter}>
              <TouchableOpacity onPress={this.onSave}>
                <Card
                  style={{
                    alignItems: 'center',
                    width: 300,
                    height: 65,
                    borderRadius: 15,
                    backgroundColor: '#00C851',
                  }}>
                  <Card.Content>
                    <Title
                      style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: 'white',
                        textAlign: 'center',
                      }}>
                      Create new customer
                    </Title>
                  </Card.Content>
                </Card>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    product: state.product,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchsetProduct: product => dispatch(setProduct(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProduct);

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
  },
  input: {
    marginHorizontal: 10,
    textAlign: 'center',
    fontSize: 20,
    marginTop: 15,
    height: 50,
    width: '45%',
    padding: 10,
    borderBottomWidth: 1,
    backgroundColor: '#F1F1F1',
  },
  bottomCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 25,
  },
});
