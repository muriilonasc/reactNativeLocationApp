import { StyleSheet, Text, View } from 'react-native';
import MyTextInput from '../components/MyTextInput';
import Btn from '../components/btn';
import LogoImage from '../components/logoImage';
import React, { useState } from 'react';
import { signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from "../services/firebase"
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function login(){
    await signInWithEmailAndPassword(auth, email, password)
    .then(value => {
      console.log('logado com sucesso!');
      navigation.navigate('Home')
    })
    .catch(error => console.log(error));
  }

  return (
    <View style={styles.container}>
      <LogoImage/>
      <Text style={styles.title}>Welcome back.</Text>
      <MyTextInput inputPlacehouder='Email' value={email} onChangeText={value => setEmail(value)}/>
      <MyTextInput inputPlacehouder='Password' value={password} onChangeText={value => setPassword(value)}/>
      <Btn btntext='Sign in' onPress={() => login()}/>
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
