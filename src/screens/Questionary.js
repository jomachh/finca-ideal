import React, {useState, useEffect} from 'react';
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
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questionsLength, setQuestionsLength] = useState(
    route.params.questions.length - 1,
  );
  const {width, height} = Dimensions.get('screen');

  const hideAlert = () => {
    setShowAlert(false);
    navigation.goBack();
  };

  useEffect(() => {
    if (currentQuestion > questionsLength) {
      navigation.popToTop();
    }
  }, [currentQuestion]);

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

        {route.params.questions.map((question, index) => {
          return index == currentQuestion ? (
            <>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 18,
                }}>
                {question.title}
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
                <Text
                  style={{color: 'white', fontSize: 18, paddingVertical: 10}}>
                  Seleccioná una respuesta:
                </Text>
                {question.answers.map((answer, index) => {
                  return (
                    <RippleButton
                      key={index}
                      onPress={() => {
                        if (answer.isCorrect) {
                          console.log(questionsLength);
                          console.log(index);
                          setCurrentQuestion(currentQuestion + 1);
                        } else {
                          setShowAlert(true);
                        }
                      }}>
                      <Text
                        style={{
                          color: 'white',
                          fontSize: 18,
                          paddingVertical: 10,
                        }}>
                        • {answer.title}
                      </Text>
                    </RippleButton>
                  );
                })}
              </ScrollView>
            </>
          ) : null;
        })}

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
