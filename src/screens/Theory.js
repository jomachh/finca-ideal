import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import RippleButton from '../components/RippleButton';
import ArrowBack from '../assets/arrow_back.svg';

const {width} = Dimensions.get('screen');

const Theory = ({route, navigation}) => {
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
            <Text
              numberOfLines={1}
              adjustsFontSizeToFit={true}
              style={styles.headerTitle}>
              {route.params.title}
            </Text>
          </View>
        </View>
        <ScrollView
          contentContainerStyle={{
            margin: 10,
            backgroundColor: '#d9bf77',
            borderRadius: 5,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'justify',
              padding: 8,
              color: 'white',
              fontWeight: 'bold',
            }}>
            Descripción
          </Text>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'justify',
              padding: 8,
              color: 'white',
              fontWeight: 'bold',
            }}>
            {route.params.description}
          </Text>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'justify',
              padding: 8,
              color: 'white',
              fontWeight: 'bold',
            }}>
            Materiales
          </Text>
          {route.params.materials.map((material, index) => {
            return (
              <Text
                key={index}
                style={{
                  width: '100%',
                  fontSize: 20,
                  padding: 8,
                  color: 'white',
                  fontWeight: 'bold',
                }}>
                {material}
              </Text>
            );
          })}
          <Text
            style={{
              fontSize: 20,
              textAlign: 'justify',
              padding: 8,
              color: 'white',
              fontWeight: 'bold',
            }}>
            Ilustración
          </Text>
          <Image style={styles.illustration} source={route.params.coverImage} />
          <RippleButton
            color="#2b580c"
            borderRadius={5}
            onPress={() => {
              navigation.navigate('Questionary', {
                questions: route.params.questions,
              });
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: 50,
                width: 150,
              }}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
                Continuar
              </Text>
            </View>
          </RippleButton>
          <View style={{paddingBottom: 100}} />
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
  headerTitle: {
    color: 'white',
    fontSize: 45,
    marginStart: 10,
    marginEnd: 10,
    maxWidth: width - 100,
  },
  fab: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  illustration: {
    height: 250,
    resizeMode: 'contain',
    marginBottom: 20,
  },
});

export default Theory;
