# QA Automation Exercise - WebdriverIO

## Sobre o Projeto
Este projeto automatiza o fluxo de Cadastro de Usuário do site [Automation Exercise](http://automationexercise.com) utilizando **WebdriverIO (v8)**.

O projeto foi construído simulando um ambiente real corporativo, priorizando **Padrões de Projeto**, **Código Limpo** e **Escalabilidade**.

## Tecnologias e Padrões
- **Linguagem**: JavaScript (Node.js)
- **Framework**: WebdriverIO + Mocha
- **Assertion**: Expect-webdriverio
- **Relatórios**: Allure Reports
- **CI/CD**: GitHub Actions

### Padrões de Arquitetura Aplicados
1.  **Page Object Model (POM)**:
    - Encapsulamento da lógica de interação com a página.
    - Separação clara entre regra de negócio (teste) e regra de interface (páginas).
    - Localização: `test/pageobjects/`
2.  **Triple A (Arrange, Act, Assert)**:
    - Organização lógica dentro dos testes (`PREPARAÇÃO`, `AÇÃO`, `VALIDAÇÃO`).
3.  **Data Factory**:
    - Geração dinâmica de massa de dados para garantir independência dos testes.
    - Evita falhas por dados duplicados (ex: e-mail já cadastrado).
    - Localização: `test/data/UserData.js`
4.  **Seletores Robustos**:
    - Prioridade para atributos estáveis como `data-qa`.

## Pré-requisitos
- **Node.js**: Versão 16 ou superior.
- **Java (JDK 8+)**: Necessário apenas se você quiser gerar/visualizar o relatório Allure localmente.
- **Chrome**: Navegador instalado.

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/SEU-USUARIO/qa.automationexercise-web.webdriverio.git
cd qa.automationexercise-web.webdriverio
```

2. Instale as dependências do projeto:
```bash
npm install
```

## Configurações
As configurações principais estão no arquivo `wdio.conf.js`:
- **Headless Mode**: Por padrão, os testes rodam sem interface gráfica para performance.
  - Para ver o navegador, edite `wdio.conf.js` e remova `'--headless'` de `goog:chromeOptions`.
- **Base URL**: Definida em `browser.options.baseUrl`.

## Executando os Testes

Para rodar a suíte de testes completa:
```bash
npm test
```

A execução padrão é silenciosa (Headless). Acompanhe o progresso pelo terminal.

## Visualizando Relatórios (Allure)

Após a execução dos testes, gere e abra o relatório HTML interativo:

```bash
npm run report
```
Isso abrirá automaticamente o navegador com gráficos e detalhes de cada passo executado.

## Pipeline (CI/CD)
O projeto contém um workflow configurado do **GitHub Actions** em `.github/workflows/main.yml`.
- Executa automaticamente a cada `push` ou `pull_request` na branch main.
- Gera os artefatos do Allure Report para download.

---
**Desenvolvido como parte do Desafio Técnico de QA Automation.**

## Desafio Zig
Entrega realizada via Pull Request.
