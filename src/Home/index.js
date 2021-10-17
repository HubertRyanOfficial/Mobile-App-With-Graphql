import React from 'react';

// * modules

import {useQuery, gql} from '@apollo/client';

// * components

import {View, Text, ScrollView, ActivityIndicator} from 'react-native';

// * utils

import {s} from './styles';
import User from './User';

//

const GET_USERS = gql`
  query getUsers {
    users {
      id
      username
      email
    }
  }
`;

function Home() {
  const {loading, error, data} = useQuery(GET_USERS);
  if (loading)
    return (
      <View
        style={[s.container, {alignItems: 'center', justifyContent: 'center'}]}>
        <ActivityIndicator size="large" color="#ddd" />
      </View>
    );

  if (error)
    return (
      <View
        style={[s.container, {alignItems: 'center', justifyContent: 'center'}]}>
        <Text style={s.errorMessage}>{String(error)}</Text>
      </View>
    );

  const usersData = data?.users;

  return (
    <View style={s.container}>
      <ScrollView>
        {usersData.map(user => (
          <User key={user.id} data={user} />
        ))}
      </ScrollView>
    </View>
  );
}

export default Home;
// Desenvolvido por Hubert Ryan
