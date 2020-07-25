import React from 'react';
import {View, Text, SafeAreaView, StatusBar} from 'react-native';

export default function Home() {
  return (
    <>
      <StatusBar />
      <SafeAreaView>
        <View>
          <Text>Hola mundo!</Text>
        </View>
      </SafeAreaView>
    </>
  );
}
