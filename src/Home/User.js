import React from 'react';

// * modules

import {useNavigation} from '@react-navigation/native';

// * components

import {View, Text, TouchableNativeFeedback} from 'react-native';

// * utils

import {s} from './styles';

//

function User({data}) {
  const navigation = useNavigation();
  const backgroundColor = Math.floor(Math.random() * 16777215).toString(16);

  return (
    <TouchableNativeFeedback
      onPress={() =>
        navigation.navigate('Posts', {
          username: data.username,
          userId: data.id,
          backgroundColor: backgroundColor,
        })
      }>
      <View
        style={[
          s.userContainer,
          {
            backgroundColor: `#${backgroundColor}`,
          },
        ]}>
        <Text style={s.userName}>{data.username}</Text>
        <Text style={s.userEmail}>{data.email}</Text>
      </View>
    </TouchableNativeFeedback>
  );
}

export default User;
// Desenvolvido por Hubert Ryan
