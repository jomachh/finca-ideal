import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Dimensions,
} from 'react-native';
import RippleButton from '../components/RippleButton';

const Home = () => {
  return (
    <>
      <StatusBar backgroundColor="#2b580c" barStyle="light-content" />
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.body}>
            <RippleButton
              onPress={() => console.log('Crack')}
              color="#639a67"
              borderRadius={5}>
              <View style={styles.touchable}>
                <Text style={{textAlign: 'center'}}>Hola munndoo!</Text>
              </View>
            </RippleButton>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchable: {
    marginVertical: 16,
    width: width - 63,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default Home;
