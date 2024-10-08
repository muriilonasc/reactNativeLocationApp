import { StyleSheet, Text, View } from 'react-native';
import MyTextInput from '../components/MyTextInput';
import Btn from '../components/btn';
import LogoImage from '../components/logoImage';
import React, { useState } from 'react';
import { createUserWithEmailAndPassword} from 'firebase/auth'  // Função do Firebase para registrar um novo usuário com email e senha.
import { auth } from "../services/firebase" // O objeto de autenticação do Firebase que foi configurado previamente em outro arquivo (../services/firebase).

export default function Register() {
  const [email, setEmail] = useState('');   // Armazena o valor do campo de email.
  const [password, setPassword] = useState('');  // Armazena o valor do campo de senha.

  async function createUser(){   
    // Esta função é responsável por criar um novo usuário usando Firebase Authentication.
    // Ela usa a função createUserWithEmailAndPassword para registrar o usuário com base no email e senha inseridos.
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
// Componentes de entrada de texto personalizados, usados para coletar o nome, email,
// senha e a confirmação da senha. No caso do email e senha, o valor é controlado pelos estados correspondentes (email e password),
// e os eventos onChangeText são usados para atualizar esses estados.

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
