import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  Card,
  Title,
  Paragraph,
  Provider as PaperProvider,
} from 'react-native-paper';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1, backgroundColor: '#F1F1F1'}}>
        <View style={styles.container}>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
              <Card style={styles.card}>
                <MaterialCommunityIcon
                  name="monitor-dashboard"
                  size={75}
                  color="#000000"
                />
              </Card>
              <Text>Dashboard</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('POS')}>
              <Card style={styles.card}>
                <Card.Content>
                  <Title style={styles.paragraph}>POS</Title>
                </Card.Content>
              </Card>
              <Text>POS</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate('List Product')}>
            <Card style={styles.card}>
              <Card.Content>
                <Title style={styles.paragraph}>Products</Title>
              </Card.Content>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ListCustomer')}>
            <Card style={styles.card}>
              <Card.Content>
                <Title style={styles.paragraph}>Customers</Title>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
            <Card style={styles.card}>
              <Card.Content>
                <Title style={styles.paragraph}>Settings</Title>
              </Card.Content>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity>
            <Card style={styles.card}>
              <Card.Content>
                <Title style={styles.paragraph}>Report</Title>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Home;

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
    width: 125,
    height: 125,
    borderRadius: 15,
  },
});
