<p align="center">
  <img alt="Feedback Widget" src=".github/Desktop.svg" width="500px" align="center">
</p>

<h1 align="center">
  Feedback Widget
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Jumori/feedget?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Jumori/feedget">

  <a href="https://github.com/Jumori/feedget/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Jumori/feedget">
  </a>
</p>

Tabela de conteúdos
=================
<!--ts-->
   * [Sobre o projeto](#-sobre-o-projeto)
   * [Endpoints](#-endpoints)
   * [Como executar o projeto](#-como-executar-o-projeto)
     * [Pré-requisitos](#pré-requisitos)
     * [Rodando a aplicação](#rodando-a-aplicação-backend)
   * [Tecnologias](#-tecnologias)
   * [Autora](#-autora)
   * [Licença](#user-content--licença)
<!--te-->


## 💻 Sobre o projeto

Feedback Widget - O widget para feedback de usuários da sua aplicação!

Entenda melhor o que os seus usuários pensam sobre sua aplicação web ou mobile com o Feedback Widget!

Acesse o nosso [demo online](https://feedget-web-roan.vercel.app/).

## 🔩 Endpoints


| Método | Endpoint   | Body                                        |
|--------|------------|---------------------------------------------|
| POST   | /feedbacks |  `{"type": "", comment: "", screenshot: ""}`|

## 🚀 Como executar o projeto

Esta aplicação conta com três partes: frontend web, mobile e backend.

Neste diretório estaremos lidando com a parte do backend.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/)


### Rodando a aplicação backend

```bash

# Clone este repositório
$ git clone git@github.com:Jumori/feedget.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd server

# Instale as dependências
$ yarn install

# Inicie a aplicação no ambiente de desenvolvimento
$ yarn dev

```

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Backend**  ([Node.js](https://nodejs.org/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Prisma](https://www.prisma.io/)**
-   **[Axios](https://axios-http.com/)**
-   **[Jest](https://jestjs.io/)**
-   **[Nodemailer](https://nodemailer.com/about/)**

> Veja o arquivo  [package.json](https://github.com/Jumori/feedget/blob/master/server/package.json)


## 🦸 Autora

<a href="https://github.com/Jumori">
 <img style="border-radius: 50%;" src="https://avatars1.githubusercontent.com/u/44618499?s=460&u=691cddb486d4b665417d25d8a575e508d6ef9563&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Juliana Morikoshi</b></sub></a>
 <br />

[![Linkedin Badge](https://img.shields.io/badge/-Juliana-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/julianamorikoshi/)](https://www.linkedin.com/in/julianamorikoshi/)
[![Gmail Badge](https://img.shields.io/badge/-julianamorikoshi@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:julianamorikoshi@gmail.com)](mailto:julianamorikoshi@gmail.com)

---

## 📝 Licença

Este projeto esta sob a licença [MIT](../LICENSE).

Feito com ❤️ por Juliana Morikoshi 👋 [Entre em contato!](https://www.linkedin.com/in/julianamorikoshi/)
