# QA Automation – WebdriverIO E2E Testing

Bem-vindo ao projeto de automação de testes do site Automation Exercise!

Este projeto tem como objetivo validar os principais fluxos da aplicação web, como o cadastro de usuários e interações fundamentais, garantindo o correto funcionamento das regras de negócio e da interface do usuário.

## Tecnologias Utilizadas

- **JavaScript**: Linguagem de programação utilizada no projeto (Node.js).
- **WebdriverIO**: Framework de automação de testes para web e mobile.
- **Mocha**: Test runner responsável pela organização e execução dos testes.
- **Allure Reports**: Ferramenta para geração de relatórios detalhados e visuais.
- **GitHub Actions**: Integração contínua (CI) para execução automática.

## Pré-requisitos

- **Node.js**: versão 16 ou superior instalada.
- **Java (JDK 8+)**: Necessário para geração do relatório Allure.

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/SEU-USUARIO/qa.automationexercise-web.webdriverio.git
   cd qa.automationexercise-web.webdriverio
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

## Configuração

O arquivo principal de configuração é o `wdio.conf.js`, localizado na raiz do projeto.
Ele define as configurações do browser, timeouts, reporters e plugins utilizados pelo WebdriverIO.

## Execução dos Testes

Para executar todos os testes:

```bash
npm test
```

> **Nota:** Por padrão, os testes rodam em modo *headless* (sem interface gráfica). Para ver o navegador, remova a flag `--headless` nas configurações do `wdio.conf.js`.

## Relatórios

Para gerar e visualizar o relatório visual do Allure após a execução:

```bash
npm run report
```

O relatório será aberto automaticamente no seu navegador padrão.

## Arquitetura e Estrutura de Pastas

### Configuração Core
- **`wdio.conf.js`**: Arquivo central de configuração do WebdriverIO. Gerencia capacidades do navegador, frameworks (Mocha), reporters (Allure) e hooks globais.

### Page Objects (`test/pageobjects/`)
- Utiliza o padrão **Page Object Model (POM)** para encapsular a lógica de acesso aos elementos da página e ações do usuário.
- **`Page.js`**: Classe base com métodos comuns.
- **`HomePage.js`**, **`SignupPage.js`**: Mapeamento específico de cada página.

### Utilitários e Dados (`test/data/`)
- **Data Factory**: Responsável pela geração de dados dinâmicos para os testes, garantindo independência nas execuções (evitando conflitos de dados repetidos).

### Estrutura de Diretórios
```text
.
├── test/
│   ├── data/             # Fábrica de dados e massa de teste
│   ├── pageobjects/      # Classes Page Object (POM)
│   └── specs/            # Arquivos de teste E2E (*.e2e.js)
├── wdio.conf.js          # Configuração do WebdriverIO
└── package.json          # Dependências e scripts do projeto
```

## Cobertura dos Testes

### 1. Suíte de Cadastro (`registerUser.e2e.js`)
- **Objetivo**: Validar o fluxo completo de registro de um novo usuário.
- **Cenários**:
    - Acesso à página inicial e navegação para login/cadastro.
    - Preenchimento do formulário de cadastro com dados válidos.
    - Validação de criação de conta e acesso à área logada.
- **Validações**: Redirecionamentos de URL, visibilidade de elementos e mensagens de sucesso.

## Pipeline CI/CD

O projeto possui integração contínua configurada via GitHub Actions.
- A cada `push` ou `pull_request` na branch principal, os testes são executados automaticamente.
- O relatório de execução (Allure) é gerado e pode ser configurado para deploy ou armazenamento como artefato.
