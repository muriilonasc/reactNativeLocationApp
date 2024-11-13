import { StyleSheet, Text, View } from 'react-native';
import MyTextInput from '../components/MyTextInput';
import Btn from '../components/btn';
import LogoImage from '../components/logoImage';
import React, { useState } from 'react';
import { signInWithEmailAndPassword} from 'firebase/auth'  // Função do Firebase Authentication usada para autenticar o usuário com email e senha.
import { auth } from "../services/firebase"  // O objeto de autenticação do Firebase que foi configurado previamente em outro arquivo (../services/firebase).
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');  // Armazena o email que o usuário insere no campo de entrada.
  const [password, setPassword] = useState('');  // Armazena a senha que o usuário insere no campo de entrada.

  async function login(){
    // A função login é responsável por autenticar o usuário usando o Firebase Authentication:
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
      <Text style={styles.title}>Ei, você! Vamos começar? 
      Faça login para escanear</Text>
      <MyTextInput inputPlacehouder='Email' value={email} onChangeText={value => setEmail(value)}/>
      <MyTextInput inputPlacehouder='Password' value={password} onChangeText={value => setPassword(value)}/>
      <Btn btntext='Sign in' onPress={() => login()}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 30,
    margin: 10,
    marginLeft: 70,
    marginRight: 60,
    marginTop: 20
  }
});
