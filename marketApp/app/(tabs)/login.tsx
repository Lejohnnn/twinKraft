import React from 'react';
import { View, Text, Linking, StyleSheet, TextInput } from 'react-native';
import React from 'react'
import ReactPlayer from 'react-player'

// STYLE CODE
const styles = StyleSheet.create({

  app: {
    backgroundColor: '#eae0cc',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },

  header:{

  },

  mainTitle: {
    color: '#00FF00',
    textAlign: 'center',
    fontSize: 50,
  },

  login:{
    marginTop: 20,
    background: url("twinKraft/marketApp/assets/3dgifmaker19253.gif")
  },

  loginText:{
    marginTop: 20,
    fontFamily: 'Lasten' 
  },

  link:{
  },
});

function App() {
  return (
    <View style={styles.app}>
      <View style={styles.header}>
        <Text style={styles.mainTitle}>Reso!</Text>

        <View style={styles.login}>
          <img src={'twinKraft/marketApp/assets/3dgifmaker19253.gif'} alt="Trees" height="200" />
          <View style={styles.loginText}>
            <Text>Username:</Text>
          </View>
          <TextInput
            style={{ width: '100%', borderWidth: 1, borderColor: 'gray', padding: 10 }}
            placeholder="Enter your username"
          />
        </View>        

      </View>
    </View>
  );
}



export default App;