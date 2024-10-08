# Login com Firebase Authentication e Firestore

Este repositório contém a implementação de uma tela de **Login** e **Registro de Usuário** utilizando o **Firebase Authentication** e **Firestore** para autenticação e persistência de dados. O fluxo permite que usuários criem contas, façam login e sejam autenticados no aplicativo.

## Índice

1. [Descrição do Projeto](#descrição-do-projeto)
2. [Tecnologias Utilizadas](#tecnologias-utilizadas)
3. [Configuração Inicial](#configuração-inicial)
4. [Fluxo de Login e Registro](#fluxo-de-login-e-registro)
5. [Funcionalidades](#funcionalidades)
6. [Estilos e Layout](#estilos-e-layout)

## Descrição do Projeto

O projeto tem como finalidade oferecer uma interface amigável para que os usuários possam se cadastrar e fazer login no aplicativo utilizando seus emails e senhas. Para isso, utilizamos o **Firebase Authentication**, que facilita o processo de autenticação sem a necessidade de desenvolver uma solução própria de backend, e o **Firestore**, caso haja a necessidade de armazenar informações adicionais dos usuários.

O fluxo de autenticação é simples e envolve o uso dos métodos `signInWithEmailAndPassword` e `createUserWithEmailAndPassword` do Firebase para gerenciar o login e o registro.

## Tecnologias Utilizadas

- **React Native**: Biblioteca principal para desenvolvimento da interface do aplicativo.
- **Firebase Authentication**: Serviço do Firebase usado para autenticar usuários via email e senha.
- **Firestore (Firebase)**: Banco de dados opcional para armazenar informações adicionais do usuário.
- **React Navigation**: Biblioteca usada para navegar entre telas no aplicativo.

## Configuração Inicial

### Firebase Setup

1. Crie um projeto no [Firebase Console](https://console.firebase.google.com/).
2. Habilite o **Firebase Authentication** (via email e senha).
3. Obtenha as credenciais (API key, Project ID, etc.) e configure o arquivo `firebase.js`  no seu projeto.

Exemplo de configuração Firebase:

```javascript
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "sua-apiKey-aqui",
  authDomain: "seu-authDomain-aqui",
  projectId: "seu-projectId-aqui",
  storageBucket: "seu-storageBucket-aqui",
  messagingSenderId: "seu-messagingSenderId-aqui",
  appId: "seu-appId-aqui"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```

## Fluxo de Login e Registro

### Registro de Usuário

1. O usuário insere seu email e senha na tela de registro.
2. A função `createUserWithEmailAndPassword` é chamada para criar uma conta no Firebase Authentication.
3. Após o registro bem-sucedido, o usuário pode ser redirecionado para a tela inicial ou receber uma mensagem de sucesso.

```javascript
async function createUser() {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((value) => {
      console.log('Usuário registrado com sucesso \n' + value.user.uid);
    })
    .catch((error) => console.log(error));
}
```

### Login de Usuário

1. O usuário insere seu email e senha na tela de login.
2. A função `signInWithEmailAndPassword` é chamada para autenticar o usuário.
3. Se a autenticação for bem-sucedida, o usuário é redirecionado para a tela "Home" do aplicativo.

```javascript
async function login() {
  await signInWithEmailAndPassword(auth, email, password)
    .then((value) => {
      console.log('Logado com sucesso!');
      navigation.navigate('Home');
    })
    .catch((error) => console.log(error));
}
```

### Firebase Authentication

- O Firebase Authentication é responsável por autenticar o usuário com base em suas credenciais (email e senha).
- Com a autenticação realizada, o Firebase gerencia sessões e permite controlar o acesso a diferentes partes do aplicativo com base no status de login do usuário.

### Firestore (Opcional)

- O Firestore pode ser utilizado para armazenar informações adicionais sobre o usuário (ex.: perfil, preferências).
- A integração do Firestore permite estender o sistema de login básico, adicionando funcionalidades personalizadas.

## Funcionalidades

- **Registro de Usuário**: Permite que novos usuários criem uma conta usando um endereço de email e senha.
- **Login de Usuário**: Permite que os usuários já registrados façam login no aplicativo.
- **Autenticação Firebase**: Verifica se o email e a senha são válidos e gerencia sessões de usuário.
- **Navegação para Home**: Após o login bem-sucedido, o usuário é redirecionado para a tela principal.

