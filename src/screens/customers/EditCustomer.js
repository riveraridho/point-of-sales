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

class EditCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      lastname: '',
      address: '',
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
        <KeyboardAwareScrollView>
          <TextInput
            label="Full Name"
            value={this.state.fullName}
            mode="outlined"
            style={styles.input}
            onChange={event => {
              this.setState({
                fullName: event.nativeEvent.text,
              });
            }}
          />
          <TextInput
            label="Address"
            value={this.state.address}
            mode="outlined"
            style={styles.input}
            onChange={event => {
              this.setState({
                address: event.nativeEvent.text,
              });
            }}
          />
          <TextInput
            label="Province"
            value={this.state.province}
            mode="outlined"
            style={styles.input}
            onChange={event => {
              this.setState({
                province: event.nativeEvent.text,
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
          <TextInput
            label="Telfon Number"
            value={this.state.telfonnumber}
            mode="outlined"
            style={styles.input}
            keyboardType="phone-pad"
            onChange={event => {
              this.setState({
                telfonnumber: event.nativeEvent.text,
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
  bottomCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 25,
  },
});
