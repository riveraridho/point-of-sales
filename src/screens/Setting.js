import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {
  Card,
  Title,
  Paragraph,
  List,
  Provider as PaperProvider,
} from 'react-native-paper';

class Setting extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#F1F1F1'}}>
        <View style={styles.container}>
          <TouchableOpacity>
            <Card style={styles.card}>
              <Card.Content>
                <Title style={styles.paragraph}>Sales</Title>
              </Card.Content>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity>
            <Card style={styles.card}>
              <Card.Content>
                <Title style={styles.paragraph}>Customers</Title>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Setting;

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
