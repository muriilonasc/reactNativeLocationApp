import { StyleSheet, Text, View } from 'react-native';
import MyTextInput from '../components/MyTextInput';
import Btn from '../components/btn';
import LogoImage from '../components/logoImage';
import React, { useState } from 'react';
import { createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from "../services/firebase"

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function createUser(){
    await createUserWithEmailAndPassword(auth, email, password)
    .then(value => {
      console.log('cadastrado com sucesso \n' + value.user.uid);
    })
    .catch(error => console.log(error));
  }

  return (
    <View style={styles.container}>
      <LogoImage/>
      <Text style={styles.title}>Create Account</Text>
      <MyTextInput  inputPlacehouder='Name'/>
      <MyTextInput  inputPlacehouder='Email' value={email} onChangeText={value => setEmail(value)}/>
      <MyTextInput  inputPlacehouder='Password' value={password} onChangeText={value => setPassword(value)}/>
      <MyTextInput  inputPlacehouder='Confirm password'/>
      <Btn btntext='Sign up' onPress={() => createUser()}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    color: "#075eec",
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 30
  }
});
