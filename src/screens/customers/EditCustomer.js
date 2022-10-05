import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  Card,
  Title,
  Paragraph,
  List,
  TextInput,
  Provider as PaperProvider,
} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {connect} from 'react-redux';
import {setCustomer} from '../../redux/action';
import TitleNavEdit from '../../components/TitleNavEdit';
import axios from 'axios';
class EditCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: {},
      fullName: '',
      lastname: '',
      address: '',
      city: '',
      province: '',
      zipcode: '',
      telfonnumber: '',
    };
  }

  async componentDidMount() {
    this._ = this.props.navigation.addListener('focus', async () => {
      let customer = await axios
        .get(
          'https://my-json-server.typicode.com/riveraridho/dummy-api/users',
          {
            params: {
              id: this.props.route.params.id,
            },
          },
        )
        .then(response => {
          this.setState({customer: response.data[0]});
          console.log('response : ', response.data[0]);
        })
        .catch(function (error) {
          // handle error
          console.log('error: ' + error);
        });
    });
  }

  onSave = () => {
    const {navigation} = this.props;
    this.props.dispatchsetCustomer(this.state);
    navigation.navigate('ListCustomer');
  };

  render() {
    console.log(this.props);
    return (
      <View style={{flex: 1, backgroundColor: '#F1F1F1'}}>
        <TitleNavEdit title={this.props.route.name} />
        <KeyboardAwareScrollView>
          <TextInput
            label="Name"
            value={this.state.customer.name}
            editable={false}
            mode="outlined"
            style={styles.input}
            onChange={event => {
              this.setState({
                fullName: event.nativeEvent.text,
              });
            }}
          />
          <TextInput
            label="Telfon Number"
            value={this.state.customer.telfon_number}
            editable={false}
            mode="outlined"
            style={styles.input}
            keyboardType="phone-pad"
            onChange={event => {
              this.setState({
                telfonnumber: event.nativeEvent.text,
              });
            }}
          />
          <TextInput
            label="Address"
            value={this.state.customer.address}
            mode="outlined"
            style={styles.inputAdress}
            editable={false}
            multiline={true}
            onChange={event => {
              this.setState({
                address: event.nativeEvent.text,
              });
            }}
          />
          <TextInput
            label="City"
            value={this.state.customer.city}
            editable={false}
            mode="outlined"
            style={styles.input}
            onChange={event => {
              this.setState({
                city: event.nativeEvent.text,
              });
            }}
          />
          <TextInput
            label="Zipcode"
            value={this.state.customer.zipcode}
            editable={false}
            mode="outlined"
            style={styles.input}
            keyboardType="phone-pad"
            onChange={event => {
              this.setState({
                zipcode: event.nativeEvent.text,
              });
            }}
          />
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    customer: state.customer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchsetCustomer: customer => dispatch(setCustomer(customer)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCustomer);

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
  input: {
    marginHorizontal: 10,
    marginTop: 15,
    backgroundColor: '#FFFFFF',
  },
  inputAdress: {
    marginHorizontal: 10,
    marginTop: 15,
    height: 150,
    backgroundColor: '#FFFFFF',
  },
  bottomCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 25,
  },
});
