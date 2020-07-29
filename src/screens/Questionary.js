import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import RippleButton from '../components/RippleButton';
import ArrowBack from '../assets/arrow_back.svg';

const Questionary = ({route, navigation}) => {
  const [showAlert, setShowAlert] = useState(false);

  const {width, height} = Dimensions.get('screen');

  const hideAlert = () => {
    setShowAlert(false);
    navigation.goBack();
  };

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
        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="!Ups¡"
          message="No contestaste correctamente, intenta de nuevo."
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          confirmText="Intentar de nuevo"
          confirmButtonColor="#DD6B55"
          onConfirmPressed={() => {
            hideAlert();
          }}
        />
        <ScrollView
          contentContainerStyle={{
            backgroundColor: '#d9bf77',
            borderRadius: 10,
            margin: 10,
            padding: 5,
          }}>
          <Text style={{color: 'white', fontSize: 18, paddingVertical: 10}}>
            Seleccioná una respuesta:
          </Text>
          {route.params.answers.map((answer, index) => {
            return (
              <RippleButton
                key={index}
                onPress={() => {
                  if (answer.isCorrect) {
                    navigation.popToTop();
                  } else {
                    setShowAlert(true);
                  }
                }}>
                <Text
                  style={{color: 'white', fontSize: 18, paddingVertical: 10}}>
                  • {answer.title}
                </Text>
              </RippleButton>
            );
          })}
        </ScrollView>
        <Image
          source={require('../assets/pm.png')}
          style={{
            width: width * 0.6,
            height: 360,
            resizeMode: 'contain',
            position: 'absolute',
            bottom: 0,
            left: 10,
          }}
        />
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
