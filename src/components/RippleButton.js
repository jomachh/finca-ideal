import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TapGestureHandler, State} from 'react-native-gesture-handler';
import Animated, {
  eq,
  greaterThan,
  diff,
  or,
  useCode,
  onChange,
  cond,
  call,
} from 'react-native-reanimated';
import {
  useTapGestureHandler,
  translate,
  vec,
  withTransition,
  mix,
} from 'react-native-redash';
import Color from 'color';

export default function RippleButton({onPress, color, borderRadius, children}) {
  const [radius, setRadius] = useState(-1);
  const {gestureHandler, state, position} = useTapGestureHandler();
  const progress = withTransition(eq(state, State.BEGAN));
  const opacity = or(greaterThan(diff(progress), 0), eq(progress, 1));
  const scale = mix(progress, 0.001, 1);

  useCode(
    () => onChange(state, [cond(eq(state, State.END), call([], onPress))]),
    [onPress],
  );

  return (
    <TapGestureHandler {...gestureHandler}>
      <Animated.View>
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: color,
            overflow: 'hidden',
            borderRadius,
          }}
          onLayout={(event) => {
            setRadius(
              Math.sqrt(
                event.nativeEvent.layout.width ** 2 +
                  event.nativeEvent.layout.height ** 2,
              ),
            );
          }}>
          {radius !== -1 && (
            <Animated.View
              style={{
                opacity,
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                borderRadius: radius,
                width: radius * 2,
                height: radius * 2,
                transform: [
                  ...translate(vec.create(-radius)),
                  ...translate(position),
                  {scale},
                ],
              }}
            />
          )}
        </View>
        {children}
      </Animated.View>
    </TapGestureHandler>
  );
}
