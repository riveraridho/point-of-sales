import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Button, Title, Provider as PaperProvider} from 'react-native-paper';

class PosItem extends Component {
  render() {
    const {item} = this.props;
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
          <Title style={{color: 'black', fontSize: 22}}>{item.itemName}</Title>
          <Text style={{color: '#808080', fontSize: 14}}>Options: Black</Text>
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
                width: 75,
                height: 25,
                alignItems: 'center',
                borderRadius: 15,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Button
                icon="minus"
                color="black"
                compact
                style={{width: 25, height: 25}}
                onPress={this.props.onSubtract}
              />
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                {item.quantity}
              </Text>
              <Button
                icon="plus"
                color="black"
                compact
                style={{width: 25, height: 25}}
                onPress={this.props.onAdd}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

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

export default PosItem;
