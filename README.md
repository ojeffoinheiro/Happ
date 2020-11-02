<h1 align="center">
    <img alt="Happy" title="Happy" src="https://user-images.githubusercontent.com/60162736/97820708-2c5a9600-1c8e-11eb-9fc6-24b07b8d6725.png">
</h1>

<h3 align="center">
    Take happiness to the world :smile:
</h3>

<div align="center">

[![yarn](https://img.shields.io/badge/yarn-v1.22.4-725dba)](https://www.npmjs.com/package/yarn?activeTab=versions)<space><space>
[![npm](https://img.shields.io/badge/node-v12.18.3-725dba)](https://www.npmjs.com/package/@unform/core)<space><space>
</div>

# Overview :book:
 <p>
  The application <strong>Happy</strong> was developed during Next Level Week # 3 - OmniStack trail - offered by Rocketseat
In order to connect institutions that welcome children to people who wish to visit these places. In order to provide moments of unique felcidides for both.
  </p>
  
  <h4 align="center"> 
	:construction: Version 2.0 in development :construction:
</h4>

# Technologies :computer:
This project was developed with the following technologies:
<details>
  <summary>Frontend Web</summary>

- [ReactJS](https://pt-br.reactjs.org)
- [Framer Motion](https://www.framer.com/motion/)
- [Leaflet](https://leafletjs.com)
- [React Leaflet](https://react-leaflet.js.org)
- [Toastify](https://www.npmjs.com/package/react-toastify)
- [Styled Components](styled-components.com/)
- [Axios](https://github.com/axios/axios)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Typescript](typescriptlang.org/)
- [React Router](https://reactrouter.com/)
</details>

<details>
  <summary>Frontend Mobile</summary>

- [React Native](https://reactnative.dev)
- [Expo](https://expo.io)
- [React Navigation](https://reactnavigation.org)
- [Typescript](typescriptlang.org/)
- [Styled Components](styled-components.com/)
- [Axios](https://github.com/axios/axios)
- [React Native Maps](https://github.com/react-native-maps/react-native-maps)
</details>

<details>
  <summary>Backend</summary>

- [NodeJS](https://nodejs.org/)
- [Express](https://expressjs.com/pt-br/)
- [Typescript](https://typescriptlang.org/)
- [TypeORM](https://typeorm.io#/)
- [Postgres](https://www.postgresql.org)
- [Docker](https://www.docker.com)
- [Multer](https://www.npmjs.com/package/multer)
- [Yup](https://www.npmjs.com/package/yup)
</details>
---


# Notion Files :clipboard:

- [NLW3 #03](https://www.notion.so/NLW-Discovery-03-628a2c1b9ac744e28fad80046b699aab) :rocket:
- [Front-end](https://www.notion.so/Front-end-010548f316d04d65a0d8b72865874ed1) :coffee:
- [Back-end](https://www.notion.so/Back-end-ff655163e56b4927ae7a7a4e08049e64) 👨‍🍳
- [Database](https://www.notion.so/Banco-de-Dados-ba70111f89924bda94bb1016f12df8c8) 📦

---

# Preview :eye:
## Web :desktop_computer:
<p>
  <img src="./assets/happy-template-web1.png" alt="Happy Web" width="90%">
  <img src="./assets/happy-template-web2.png" alt="Happy Web" width="400px">
  <img src="./assets/happy-template-web3.png" alt="Happy Web" width="400px">
  <img src="./assets/happy-template-web4.png" alt="Happy Web" width="400px">
</p>

## Mobile :iphone:
<p>
  <img src="./assets/mobile01.jpeg" alt="Happy Mobile map" width="200px">
  <img src="./assets/mobile02.jpeg" alt="Happy Mobile map 2" width="200px">
  <img src="./assets/mobile5.jpeg" alt="Happy Mobile create" width="200px">
  <img src="./assets/mobile03.jpeg" alt="Happy Mobile details" width="200px">
  <img src="./assets/mobile1.jpeg" alt="Happy Mobile details" width="200px"> 
</p>

---

# Layout 🎨
   <p align="center">
      The Layout was developed by Rocketseat, and you can access it on Figma:
      
   - <a href="https://www.figma.com/file/XYb2tha1gU5M8vTwTUmjNx/Happy-Web-(Copy)?node-id=0%3A1">Desktop</a> :desktop_computer:
   - <a href="https://www.figma.com/file/X27FfVxAgy9f5IFa7ONlph/Happy-Mobile?node-id=0%3A1">Mobile</a> :iphone:
   </p>

---


# 🍃 Rotas

- Servidor http://localhost:3333
- Web http://localhost:3000
- Mobile(expo) http://localhost:19000

---

# Mapbox :world_map:

Siga as instruções para usar o mapbox no lugar do openstreetmap.

- Em "https://account.mapbox.com/", copie seu token.
- Na raiz do projeto web crie um arquivo chamado ".env"
- Dentro desse arquivo, digite "REACT_APP_MAPBOX_TOKEN =" e cole seu token logo depois.

Se você fez tudo corretamente, estás usando a API do mapbox com seu Token na página do mapa. 😄

---
# How to use :fire:
<h2> Precondition :white_flag:</h2>
You should have:

- NodeJS
- Package manager (NPM ou Yarn)

<h2>Clone this repository</h2>

```bash
$ git clone https://github.com/ojeffoinheiro/Happy
```
## Run on web :computer:

Entre na pasta

```bash
$ cd web
```
Instale as dependências

```bash
$ yarn
# ou, caso use npm
$ npm install
```

Rode a aplicação

```bash
$ yarn start
# ou, caso use npm
$ npm start
```

Caso você tenha uma conta no [mapbox](https://www.mapbox.com/), pode usar seu token para utilizar o mapa da aplicação. No entanto, se você não quiser 
ter este trabalho, sem problemas, basta comentar a linha de código do mapbox, e descomentar a linha de código do [openstreetmap](https://www.openstreetmap.org/).


## Rodando o Servidor 🌐

Entre na pasta

```bash
$ cd backend
```
Instale as dependências

```bash
$ yarn
# ou, caso use npm
$ npm install
```

Rode o servidor

```bash
$ yarn dev
# ou, caso use npm
$ npm dev
```

## 📱 Rodando o Happy mobile 

Entre na pasta

```bash
$ cd mobile
```
Instale as dependências

```bash
$ yarn
# ou, caso use npm
$ npm install
```

Rode o mobile

```bash
$ yarn start
# ou, caso use npm
$ npm start
```

Após a instalação das dependências e ter iniciado a aplicação mobile abrirá a página do expo.

### 1 - Emulador Android
 Na página do metro bundler, clique em "Run on Android device/emulator" e espere carregar. Tenha em mente que é necessário ter passado pelo processo de instalação
 do android sdk, etc.

### 2 - Emulador IOS
 Na página do metro bundler, clique em "Run on iOS simulator" e espere carregar.

### 3 - Seu smartphone
 Baixe o aplicativo do Expo:
  - [iOS](https://itunes.apple.com/app/apple-store/id982107779)
  - [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www)

 Depois de baixar, volte a página do metro bundler e escaneie o QR Code com o app do Expo.

---

# Como contribuir ⚙️

- Faça um fork desse repositório;
- Crie uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

---
