import React from 'react';

// * modules

import {useQuery, gql} from '@apollo/client';

// * components

import {View, ActivityIndicator, ScrollView, Text} from 'react-native';

// * utils

import {s} from './styles';
import Post from './Post';

//

const GET_USER_POSTS = gql`
  query post($userId: Int) {
    user(userId: $userId) {
      posts {
        id
        title
        body
      }
    }
  }
`;

function Posts({route}) {
  const {userId, backgroundColor} = route.params;

  // console.log(userId);

  const {loading, error, data} = useQuery(GET_USER_POSTS, {
    variables: {userId},
  });

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

  const postsData = data?.user?.posts;
  return (
    <View style={s.container}>
      <ScrollView>
        {postsData.map(post => (
          <Post key={post.id} data={post} />
        ))}
      </ScrollView>
    </View>
  );
}

export default Posts;
// Desenvolvido por Hubert Ryan
