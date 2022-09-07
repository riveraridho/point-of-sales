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
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';

class ListCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: [],
    };
  }

  async componentDidMount() {
    await axios
      .get('http://10.0.2.2:3000/customers')
      .then(response => {
        this.setState({customer: response.data});
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log('error: ' + error);
      });
  }

  render() {
    const data = this.state.customer;
    const {navigation} = this.props;
    console.log('isi:' + this.state.customer);
    return (
      <View style={{flex: 1, backgroundColor: '#F1F1F1'}}>
        <ScrollView contentContainerStyle={{flex: 1}}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            {data.map((item, index) => {
              return (
                <TouchableOpacity
                  style={{
                    height: 65,
                    width: '95%',
                    backgroundColor: '#F1F1F1',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}>
                  <View
                    style={{
                      borderBottomColor: 'grey',
                      borderBottomWidth: 1,
                      paddingHorizontal: 10,
                    }}>
                    <Text style={{color: 'black', fontSize: 18}}>
                      {item.FirstName}
                    </Text>
                    <Text style={{color: 'black', fontSize: 18}}>
                      {item.Street} {item.City}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
          <TouchableOpacity
            style={{
              width: 70,
              height: 70,
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              bottom: 20,
              right: 10,
              backgroundColor: '#0D47A1',
              borderRadius: 100,
            }}
            onPress={() => navigation.navigate('CreateCustomer')}>
            <Icon name="plus" size={30} color="white" />
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

export default ListCustomer;

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
    paddingHorizontal: 5,
    padding: 2,
    marginTop: 30,
  },
  card: {
    alignItems: 'center',
    width: 150,
    height: 150,
    borderRadius: 15,
  },
});
