import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {connect} from 'react-redux';
import {store} from '../../store';
import RippleButton from '../components/RippleButton';

const Home = ({game, navigation}) => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <SafeAreaView>
        <ImageBackground
          style={styles.container}
          source={require('../assets/background.jpg')}>
          <View style={styles.body}>
            <RippleButton
              onPress={() => {
                store.dispatch({
                  type: 'INIT_GAME',
                  payload: {
                    initGame: {
                      started: true,
                    },
                  },
                });
                navigation.navigate('LevelList');
              }}
              color="#639a67"
              borderRadius={5}>
              <View style={styles.touchable}>
                <Text style={styles.buttonText}>
                  {game.started ? 'CONTINUAR' : 'INICIAR'}
                </Text>
              </View>
            </RippleButton>
          </View>
        </ImageBackground>
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
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

const mapStateToProps = (state) => ({
  game: state.initGame,
});

export default connect(mapStateToProps)(Home);
