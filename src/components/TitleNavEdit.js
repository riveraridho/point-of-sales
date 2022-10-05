import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Title, Provider as PaperProvider} from 'react-native-paper';

const TitleNavEdit = ({title, total, onPress}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <View
        style={{
          flexDirection: 'row',
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
        <TouchableOpacity onPress={onPress}>
          <Text
            style={{
              marginTop: 8,
              color: 'black',
              textDecorationLine: 'underline',
              fontSize: 18,
            }}>
            Edit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TitleNavEdit;
