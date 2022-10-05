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
import TitleNavSum from '../../components/TitleNavSum';
class ListCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: [],
    };
  }

  async componentDidMount() {
    await axios
      .get('http://localhost:3000/users')
      .then(response => {
        this.setState({customer: response.data});
        console.log('response :', response.data);
      })
      .catch(function (error) {
        // handle error
        console.log('error: ' + error);
      });
    this._unsubscribe = this.props.navigation.addListener('focus', async () => {
      await axios
        .get('http://localhost:3000/users')
        .then(response => {
          this.setState({customer: response.data});
          console.log('response :', response.data);
        })
        .catch(function (error) {
          // handle error
          console.log('error: ' + error);
        });
    });
  }

  async componentWillUnmount() {
    this._unsubscribe();
    console.log('isi :', this._unsubscribe());
  }

  render() {
    const data = this.state.customer;
    const {navigation} = this.props;
    return (
      <View style={{flex: 1, backgroundColor: '#F1F1F1'}}>
        <TitleNavSum
          title={this.props.route.name}
          total={data.filter(index => index.id).length}
        />
        <ScrollView showsVerticalScrollIndicator={false} Style={{flex: 1}}>
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
                  }}
                  onPress={() => {
                    this.props.navigation.navigate('ViewCustomer', {
                      id: item.id,
                    });
                  }}>
                  <View
                    style={{
                      borderBottomColor: 'grey',
                      borderBottomWidth: 1,
                      paddingHorizontal: 10,
                    }}>
                    <Text
                      style={{
                        marginBottom: 5,
                        color: 'black',
                        fontSize: 18,
                        fontWeight: 'bold',
                      }}>
                      {item.name}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginBottom: 5,
                      }}>
                      <Text style={{color: 'black', fontSize: 18}}>
                        {item.city}
                      </Text>
                      <Text style={{color: 'black', fontSize: 18}}>
                        {item.zipcode}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
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
