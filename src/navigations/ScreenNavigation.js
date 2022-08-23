import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {
  Card,
  Title,
  Paragraph,
  List,
  Provider as PaperProvider,
} from 'react-native-paper';

import {
  Home,
  Dashboard,
  Pos,
  PaymentPos,
  CreateCustomer,
  ListCustomer,
  ListProduct,
  Setting,
} from '../screens';

const Stack = createNativeStackNavigator();

const ScreenNavigation = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShadowVisible: false}}
          initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen
            name="POS"
            component={Pos}
            options={() => ({
              title: ' ',
              headerStyle: {
                backgroundColor: '#F1F1F1',
              },
            })}
          />
          <Stack.Screen
            name="Payment Pos"
            component={PaymentPos}
            options={() => ({
              title: ' ',
              headerStyle: {
                backgroundColor: '#F1F1F1',
              },
            })}
          />
          <Stack.Screen name="CreateCustomer" component={CreateCustomer} />
          <Stack.Screen
            name="ListCustomer"
            component={ListCustomer}
            options={() => ({
              title: 'List Customer',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#48CFAD',
                height: 100,
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowColor: 'black',
                shadowOpacity: 1,
                shadowRadius: 3.84,
                elevation: 15,
              },
            })}
          />
          <Stack.Screen
            name="List Product"
            component={ListProduct}
            options={() => ({
              title: ' ',
              headerStyle: {
                backgroundColor: '#F1F1F1',
              },
            })}
          />
          <Stack.Screen name="Setting" component={Setting} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default ScreenNavigation;
