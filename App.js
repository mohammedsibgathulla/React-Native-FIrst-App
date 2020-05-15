import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const[preText, postText] = useState('Open up App.js to start working on your app!');
  return (
    <View style={styles.container}>
      <Text>{preText}</Text>
      <Button title="Change Text" onPress={() => postText('Hi this is the updated text')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
