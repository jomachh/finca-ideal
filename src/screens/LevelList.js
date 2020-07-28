import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {connect} from 'react-redux';
import RippleButton from '../components/RippleButton';
import ArrowBack from '../assets/arrow_back.svg';

const data = {
  description:
    'Es una herramienta que se utiliza para hacer el trazado de las curvas a nivel en áreas productivas con pendientes.',
  materials: [
    '2 reglas o varas rectas de 2.10 metros',
    '1 regla o vara recta de 1.2 metros',
    '1 cuerda de 1.2 metros de largo',
    '1 objeto o 1 piedra que sirva de plomada o nivel pequeño',
    '3 clavos',
  ],
  question:
    'Es una herramienta que se utiliza para hacer el trazado de las curvas a nivel en áreas productivas con pendientes',
  answers: [
    {title: 'Aparato A', isCorrect: true},
    {title: 'Nivel de manguera', isCorrect: false},
    {title: 'Aparato X', isCorrect: false},
  ],
};

const {width} = Dimensions.get('screen');
const imageURL =
  'https://previews.123rf.com/images/tigatelu/tigatelu1604/tigatelu160400121/56170769-vector-illustration-of-farm-background.jpg';

const LevelList = ({navigation}) => {
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
            <Text style={styles.headerTitle}>Niveles</Text>
          </View>
        </View>
        <ScrollView
          contentContainerStyle={{
            alignItems: 'center',
          }}>
          <View
            style={{
              width: width * 0.9,
              height: 200,
            }}>
            <RippleButton
              color="white"
              borderRadius={10}
              onPress={() => {
                navigation.navigate('Theory', data);
              }}>
              <Image
                source={require('../assets/02.png')}
                style={{
                  height: 200 * 0.7,
                  width: width * 0.9,
                  resizeMode: 'contain',
                }}
              />
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  padding: 10,
                  textAlign: 'center',
                }}>
                Aparato A
              </Text>
            </RippleButton>
          </View>
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

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(LevelList);
