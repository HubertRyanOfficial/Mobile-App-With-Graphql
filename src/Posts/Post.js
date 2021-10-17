import React from 'react';

// * modules

// * components

import {View, Text} from 'react-native';

// * utils

import {s} from './styles';

//

function Post({data}) {
  return (
    <View style={s.postContainer}>
      <Text style={s.postTitle}>{String(data.title)}</Text>
      <Text style={s.postBody}>{data.body}</Text>
    </View>
  );
}

export default Post;
// Desenvolvido por Hubert Ryan
