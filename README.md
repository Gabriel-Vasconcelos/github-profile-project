# 📄 Perfil GitHub com HTML, CSS e JavaScript

Este projeto consiste em uma página pessoal que consome a API pública do GitHub para exibir informações de um usuário específico. Foi desenvolvido como parte de uma atividade prática, com foco na integração de tecnologias front-end e consumo de APIs REST.

## 🚀 Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)** — Manipulação de DOM e consumo da API do GitHub


## 🧱 Estrutura do Projeto

### 🔹 HTML (`index.html`)
- Input de busca para inserir o nome do usuário do GitHub
- Container com:
  - Imagem de perfil
  - Nome
  - Bio
  - Número de repositórios públicos
  - Seguidores e seguindo
  - Link para o perfil original no GitHub

### 🔹 JavaScript (`script.js`)
- Captura do evento `DOMContentLoaded`
- Função `searchUser()` que faz fetch da API do GitHub com o nome do usuário
- Função `updateCardGithub()` que atualiza dinamicamente o DOM com os dados da API
- Atualização automática conforme o usuário digita


## 🖼️ Exemplo de Funcionamento

Ao carregar a página ou inserir um nome de usuário do GitHub no campo de busca, as informações são atualizadas automaticamente com base nos dados da API.

