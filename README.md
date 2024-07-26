# CI/CD com Azure

Este projeto é uma demonstração da Integração Contínua (CI) e Entrega Contínua (CD) utilizando GitHub Actions e Azure. O projeto é uma aplicação Node.js que implementa um sistema de checkout simplificado.

No cenário atual, aplicamos a estratégia Blue-Green na Azure para que, ao realizar nossa Entrega Contínua (CD), possamos alocar a nova atualização em "staging".

Por que adotamos essa estratégia?

Para que tenhamos uma redução no tempo de inatividade e possamos validar se está tudo conforme o esperado para produção. Ao confirmar que está tudo correto, realizaremos o swap manualmente para produção.

Extra: Confira o resultado de um teste real de carga com a lib "autocannon" na pasta "_load_testing/bench.txt".

## Tecnologias Utilizadas

- **Node.js**: Para a construção do backend.
- **Fastify**: Um framework web rápido e de baixa sobrecarga para Node.js.
- **TypeScript**: Para adicionar tipagem estática ao JavaScript.
- **Vitest**: Para testes unitários.
- **Sinon**: Para mocks e stubs nos testes.
- **GitHub Actions**: Para automação de CI/CD.
- **Azure**: Para hospedagem da aplicação.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

- `src/`: Código fonte da aplicação.
- `_tests/`: Testes unitários.
- `.github/workflows/`: Definições de workflows do GitHub Actions para CI/CD.

## CI/CD com GitHub Actions

Este projeto utiliza GitHub Actions para automatizar os processos de Integração Contínua e Entrega Contínua.

### Integração Contínua

O workflow de Integração Contínua é definido em `.github/workflows/run-unit-tests.yml`. Ele é acionado em cada `push` para o repositório e realiza os seguintes passos:

1. Configura o ambiente Node.js.
2. Instala as dependências do projeto.
3. Executa os testes unitários.

### Entrega Contínua

O workflow de Entrega Contínua é definido em `.github/workflows/deploy.yml`. Ele é acionado quando um pull request é mesclado na branch `master` e realiza os seguintes passos:

1. Constrói a imagem Docker da aplicação.
2. Faz login no Azure Container Registry (ACR).
3. Faz push da imagem para o ACR.
4. Realiza o deploy da imagem no Azure Web App.

## Como Executar Localmente

Para executar o projeto localmente, siga os passos abaixo:

1. Clone o repositório.
2. Instale as dependências com `npm install`.
3. Crie um arquivo `.env` baseado no `.env.example`.
4. Execute o projeto com `npm run dev`.