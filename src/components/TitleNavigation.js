import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Title, Provider as PaperProvider} from 'react-native-paper';

const TitleNavigation = ({title, total}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <View
        style={{
          flexDirection: 'column',
          width: '92%',
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
          {title}
        </Title>
        <View
          style={{
            paddingBottom: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 18,
                marginRight: 5,
              }}>
              {total}
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
              }}>
              items
            </Text>
          </View>

          <TouchableOpacity>
            <Text
              style={{
                color: 'black',
                textDecorationLine: 'underline',
                fontSize: 18,
              }}>
              Edit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TitleNavigation;
