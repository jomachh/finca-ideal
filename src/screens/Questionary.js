import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import RippleButton from '../components/RippleButton';
import ArrowBack from '../assets/arrow_back.svg';

const Questionary = ({route, navigation}) => {
  console.log(route.params);
  return (
    <>
      <StatusBar backgroundColor="#2b580c" barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{width: 80, height: 50}}>
            <RippleButton
              borderRadius={40}
              onPress={() => {
                navigation.goBack();
              }}
              color="#d9bf77">
              <View style={styles.fab}>
                <ArrowBack width={40} height={40} fill="white" />
              </View>
            </RippleButton>
          </View>
          <View>
            <Text style={styles.headerTitle}>Cuestionario</Text>
          </View>
        </View>
        <Text
          style={{
            textAlign: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 18,
          }}>
          {route.params.question}
        </Text>
        <ScrollView>
          {route.params.answers.map((answer, index) => {
            return <Text key={index}>{answer.title}</Text>;
          })}
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#639a67',
    height: '100%',
    marginTop: StatusBar.currentHeight,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  headerTitle: {color: 'white', fontSize: 45, marginStart: 10},
  fab: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Questionary;
