# API para listagem de fornecedores de energia - Clarke Energia

Esta API foi desenvolvida para facilitar o processo de escolha do fornecedor de energia pelos usuários. Com ela, os usuários podem informar seu consumo de energia e receber recomendações personalizadas de fornecedores com base em suas necessidades específicas.

## Requisitos

Antes de iniciar, certifique-se de ter os seguintes requisitos instalados em sua máquina:

- **Node.js**: Versão 18.x ou superior [Node.js Download](https://nodejs.org/)
- **npm**: Gerenciador de pacotes padrão do Node.js
- **Docker**: Para rodar a aplicação e o banco de dados em containers [Docker Download](https://www.docker.com/)

## Tecnologias Utilizadas

As principais tecnologias utilizadas para o desenvolvimento desta API são:

- **Node.js**: Runtime JavaScript
- **NestJS**: Framework de desenvolvimento de APIs
- **TypeScript**: Superconjunto do JavaScript que adiciona tipagem estática
- **Jest**: Framework de testes
- **Prisma**: ORM (Object-Relational Mapping)
- **PostgreSQL**: Banco de dados relacional (rodando em um container Docker)
- **Docker**: Containerização do banco de dados

## Instalação

1. Clone o repositório para a sua máquina local:

   ```bash
   git clone https://github.com/gabrielteodoroo/api-clarke
   ```
2. Acesse o diretório do projeto:

   ```bash
   cd api-clarke
   ```
3. Instale as dependências:

   ```bash
   npm install 
   ```
4. Suba o container do banco de dados PostgreSQL e da aplicação com Docker:

      ```bash
      docker-compose up -d
      ```

5. Renomeie o arquivo `.env-example` para `.env`

6. Configure o banco de dados executando as migrações:

    ```base
    npx prisma migrate dev
    ```

## Como Usar

### Executando o servidor de desenvolvimento

Para iniciar a API em modo de desenvolvimento, utilize o comando:

   ```bash
   npm run start:dev
   ```

O servidor será iniciado em http://localhost:5000

### Acessando a API em Produção

A API também está disponível em um ambiente de produção através do Render. Para acessá-la, utilize a seguinte URL: https://api-clarke.onrender.com

### Rotas disponíveis

#### Suppliers

+ **GET** /suppliers
**Descrição:** Retorna a lista de fornecedores recomendados com base no consumo de energia informado.

**Parâmetros de query:**
+ **kwh (obrigatório):**  O consumo de energia em kilowatt-hora (kWh) do usuário. Deve ser um valor numérico.

**Exemplo de uso:**

```bash
GET /suppliers?kwh=500
```


**Respostas:**
+ **200 OK:** Retorna a lista de fornecedores com base no consumo.
+ **400 Bad Request:** Caso o parâmetro kwh não seja fornecido ou não seja numérico.

## Como testar

### Testes dos casos de uso

Os testes de casos de uso foram implementados utilizando Jest. Para rodar os testes, utilize o comando:

   ```bash
   npm run test
   ```

### Testes E2E
Os testes End-to-End (E2E), que testam os controllers da aplicação, podem ser executados com o comando:

   ```bash
   npm run test:e2e
   ```

## Contribuindo

1. Faça fork do projeto
2. Crie uma nova branch com sua feature: `git checkout -b minha-feature`.
3. Faça commit das suas mudanças: `git commit -m 'Minha nova feature'`.
4. Envie para a branch principal: `git push origin minha-feature`.
5. Abra um Pull Request.