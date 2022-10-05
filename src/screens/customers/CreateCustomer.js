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
  Snackbar,
} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {connect} from 'react-redux';
import {setCustomer} from '../../redux/action';
import axios from 'axios';
import {v4 as uuidv4} from 'uuid';
class CreateCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      telfon_number: '',
      address: '',
      city: '',
      zipcode: '',
    };
  }

  onSave = async () => {
    await axios
      .post('http://localhost:3000/users', {
        id: uuidv4(),
        name: this.state.name,
        telfon_number: this.state.telfon_number,
        address: this.state.address,
        city: this.state.city,
        zipcode: this.state.zipcode,
      })
      .then(response => {
        console.log('response :', response.data);
        <Snackbar duration="3000">Data berhasil dibuat</Snackbar>;
        this.props.navigation.goBack();
      })
      .catch(function (error) {
        // handle error
        console.log('error: ' + error);
      });
    // const {navigation} = this.props;
    // this.props.dispatchsetCustomer(this.state);
    // navigation.navigate('ListCustomer');
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#F1F1F1'}}>
        <KeyboardAwareScrollView>
          <TextInput
            label="Name"
            value={this.state.name}
            mode="outlined"
            style={styles.input}
            onChange={event => {
              this.setState({
                name: event.nativeEvent.text,
              });
            }}
          />
          <TextInput
            label="Telfon Number"
            value={this.state.telfon_number}
            mode="outlined"
            style={styles.input}
            keyboardType="phone-pad"
            onChange={event => {
              this.setState({
                telfon_number: event.nativeEvent.text,
              });
            }}
          />
          <TextInput
            label="Address"
            value={this.state.address}
            mode="outlined"
            style={styles.inputAdress}
            multiline={true}
            onChange={event => {
              this.setState({
                address: event.nativeEvent.text,
              });
            }}
          />
          <TextInput
            label="City"
            value={this.state.city}
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
            value={this.state.zipcode}
            mode="outlined"
            style={styles.input}
            keyboardType="phone-pad"
            onChange={event => {
              this.setState({
                zipcode: event.nativeEvent.text,
              });
            }}
          />
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateCustomer);

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
