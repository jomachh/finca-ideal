import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  StatusBar,
} from 'react-native';
import {connect} from 'react-redux';
import {data} from '../constants/practices';
import RippleButton from '../components/RippleButton';
import ArrowBack from '../assets/arrow_back.svg';

const {width} = Dimensions.get('screen');

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
            <Text style={styles.headerTitle}>Prácticas</Text>
          </View>
        </View>
        <ScrollView
          contentContainerStyle={{
            alignItems: 'center',
          }}>
          {data.practices.map((practice, index) => {
            return (
              <View
                key={index}
                style={{
                  width: width * 0.9,
                  marginBottom: 10,
                }}>
                <RippleButton
                  color="white"
                  borderRadius={10}
                  onPress={() => {
                    navigation.navigate('Theory', practice);
                  }}>
                  <Image
                    source={practice.coverImage}
                    style={{
                      height: 200 * 0.7,
                      width: width * 0.9,
                      resizeMode: 'contain',
                    }}
                  />
                  <Text
                    adjustsFontSizeToFit={true}
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      padding: 10,
                      textAlign: 'center',
                    }}>
                    {practice.title}
                  </Text>
                </RippleButton>
              </View>
            );
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

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(LevelList);
