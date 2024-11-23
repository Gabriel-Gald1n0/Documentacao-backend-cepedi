# Documentacao-backend-CEPEDI
# Documentação da API - EcoGuard - Sistema de Monitoramento ambiental

Este documento fornece uma visão geral da API, descrevendo os endpoints disponíveis, suas funcionalidades, exemplos de requisição e respostas de erro.

---

## **Autenticação**

### **Login**

- **Endpoint**: `/api/login/`

- **Método**: `POST`

- **Descrição**: Autentica o usuário e retorna um token de acesso.

- **Exemplo de Corpo da Requisição**:

  ```json
  {
    "username": "galds1",
    "password": "galds"
  }
  ```

- **Possíveis Respostas**:

  - **200 OK**: Login realizado com sucesso.

    ```json
    {
      "token": "eyJhbGciOi..."
    }
    ```

  - **400 Bad Request**: Dados incompletos ou inválidos.

    ```json
    {
      "error": "Username and password are required."
    }
    ```

  - **401 Unauthorized**: Credenciais inválidas.

    ```json
    {
      "error": "Invalid username or password."
    }
    ```

---

## **Usuários**

### **Criar Usuário**

- **Endpoint**: `/api/users/`

- **Método**: `POST`

- **Descrição**: Cria um novo usuário.

- **Exemplo de Corpo da Requisição**:

  ```json
  {
    "name": "galds1",
    "email": "galds@mail.com",
    "password": "galds"
  }
  ```

- **Possíveis Respostas**:

  - **201 Created**: Usuário criado com sucesso.

    ```json
    {
      "id": 1,
      "name": "galds1",
      "email": "galds@mail.com"
    }
    ```

  - **400 Bad Request**: Dados inválidos.

    ```json
    {
      "error": "Email is already in use."
    }
    ```

### **Obter Usuários**

- **Endpoint**: `/api/users/`

- **Método**: `GET`

- **Descrição**: Retorna a lista de todos os usuários.

- **Possíveis Respostas**:

  - **200 OK**: Lista de usuários retornada com sucesso.

    ```json
    [
      {
        "id": 1,
        "name": "galds1",
        "email": "galds@mail.com"
      }
    ]
    ```

  - **401 Unauthorized**: Token de acesso inválido ou ausente.

    ```json
    {
      "error": "Unauthorized access."
    }
    ```

### **Obter Usuário por ID**

- **Endpoint**: `/api/users/{id}/`

- **Método**: `GET`

- **Descrição**: Retorna os detalhes de um usuário específico.

- **Possíveis Respostas**:

  - **200 OK**: Detalhes do usuário retornados com sucesso.

  - **404 Not Found**: Usuário não encontrado.

    ```json
    {
      "error": "User not found."
    }
    ```

### **Atualizar Usuário**

- **Endpoint**: `/api/users/{id}/`

- **Método**: `PATCH`

- **Descrição**: Atualiza as informações de um usuário.

- **Exemplo de Corpo da Requisição**:

  ```json
  {
    "name": "uriel",
    "email": "uriel@mail.com",
    "password": "uriel"
  }
  ```

- **Possíveis Respostas**:

  - **200 OK**: Usuário atualizado com sucesso.
  - **400 Bad Request**: Dados inválidos.
  - **404 Not Found**: Usuário não encontrado.

### **Deletar Usuário**

- **Endpoint**: `/api/users/{id}/`
- **Método**: `DELETE`
- **Descrição**: Remove um usuário do sistema.
- **Possíveis Respostas**:
  - **204 No Content**: Usuário removido com sucesso.
  - **404 Not Found**: Usuário não encontrado.

---

## **Arduinos**

### **Criar Arduino**

- **Endpoint**: `/api/arduinos/`

- **Método**: `POST`

- **Descrição**: Registra um novo Arduino no sistema.

- **Exemplo de Corpo da Requisição**:

  ```json
  {
    "name": "arduino2",
    "description": "uma segunda descrição qualquer"
  }
  ```

- **Possíveis Respostas**:

  - **201 Created**: Arduino criado com sucesso.
  - **400 Bad Request**: Dados inválidos.

### **Obter Arduinos**

- **Endpoint**: `/api/arduinos/`
- **Método**: `GET`
- **Descrição**: Retorna a lista de todos os Arduinos.
- **Possíveis Respostas**:
  - **200 OK**: Lista de Arduinos retornada com sucesso.
  - **401 Unauthorized**: Token de acesso inválido ou ausente.

### **Obter Arduino por ID**

- **Endpoint**: `/api/arduinos/{id}/`
- **Método**: `GET`
- **Descrição**: Retorna os detalhes de um Arduino específico.
- **Possíveis Respostas**:
  - **200 OK**: Detalhes do Arduino retornados com sucesso.
  - **404 Not Found**: Arduino não encontrado.

---

## **Tipos (Types)**

### **Criar Tipo**

- **Endpoint**: `/api/types/`

- **Método**: `POST`

- **Descrição**: Registra um novo tipo de dado.

- **Exemplo de Corpo da Requisição**:

  ```json
  {
    "name": "Tipo 1"
  }
  ```

- **Possíveis Respostas**:

  - **201 Created**: Tipo criado com sucesso.

    ```json
    {
      "id": 1,
      "name": "Tipo 1"
    }
    ```

  - **400 Bad Request**: Dados inválidos.

    ```json
    {
      "error": "Name is required."
    }
    ```

### **Obter Tipos**

- **Endpoint**: `/api/types/`

- **Método**: `GET`

- **Descrição**: Retorna a lista de todos os tipos registrados.

- **Possíveis Respostas**:

  - **200 OK**: Lista de tipos retornada com sucesso.

    ```json
    [
      {
        "id": 1,
        "name": "Tipo 1"
      }
    ]
    ```

### **Obter Tipo por ID**

- **Endpoint**: `/api/types/{id}/`

- **Método**: `GET`

- **Descrição**: Retorna os detalhes de um tipo específico.

- **Possíveis Respostas**:

  - **200 OK**: Detalhes do tipo retornados com sucesso.

    ```json
    {
      "id": 1,
      "name": "Tipo 1"
    }
    ```

  - **404 Not Found**: Tipo não encontrado.

    ```json
    {
      "error": "Type not found."
    }
    ```

### **Atualizar Tipo**

- **Endpoint**: `/api/types/{id}/`

- **Método**: `PATCH`

- **Descrição**: Atualiza as informações de um tipo.

- **Exemplo de Corpo da Requisição**:

  ```json
  {
    "name": "Tipo Atualizado"
  }
  ```

- **Possíveis Respostas**:

  - **200 OK**: Tipo atualizado com sucesso.
  - **400 Bad Request**: Dados inválidos.
  - **404 Not Found**: Tipo não encontrado.

### **Deletar Tipo**

- **Endpoint**: `/api/types/{id}/`
- **Método**: `DELETE`
- **Descrição**: Remove um tipo do sistema.
- **Possíveis Respostas**:
  - **204 No Content**: Tipo removido com sucesso.
  - **404 Not Found**: Tipo não encontrado.

---

Se precisar de ajustes ou informações adicionais, é só avisar!

---

## **Regiões**

### **Criar Região**

- **Endpoint**: `/api/regions/`

- **Método**: `POST`

- **Descrição**: Registra uma nova região.

- **Exemplo de Corpo da Requisição**:

  ```json
  {
    "street": "praia dos milionarios"
  }
  ```

- **Possíveis Respostas**:

  - **201 Created**: Região criada com sucesso.

    ```json
    {
      "id": 1,
      "street": "praia dos milionarios"
    }
    ```

  - **400 Bad Request**: Dados inválidos.

    ```json
    {
      "error": "Street is required."
    }
    ```

### **Obter Regiões**

- **Endpoint**: `/api/regions/`

- **Método**: `GET`

- **Descrição**: Retorna a lista de todas as regiões registradas.

- **Possíveis Respostas**:

  - **200 OK**: Lista de regiões retornada com sucesso.

    ```json
    [
      {
        "id": 1,
        "street": "praia dos milionarios"
      }
    ]
    ```

### **Obter Região por ID**

- **Endpoint**: `/api/region/{id}/`

- **Método**: `GET`

- **Descrição**: Retorna os detalhes de uma região específica.

- **Possíveis Respostas**:

  - **200 OK**: Detalhes da região retornados com sucesso.

    ```json
    {
      "id": 1,
      "street": "praia dos milionarios"
    }
    ```

  - **404 Not Found**: Região não encontrada.

    ```json
    {
      "error": "Region not found."
    }
    ```

### **Atualizar Região**

- **Endpoint**: `/api/region/{id}/`

- **Método**: `PATCH`

- **Descrição**: Atualiza as informações de uma região.

- **Exemplo de Corpo da Requisição**:

  ```json
  {
    "street": "rua do ouro"
  }
  ```

- **Possíveis Respostas**:

  - **200 OK**: Região atualizada com sucesso.
  - **400 Bad Request**: Dados inválidos.
  - **404 Not Found**: Região não encontrada.

### **Deletar Região**

- **Endpoint**: `/api/region/{id}/`
- **Método**: `DELETE`
- **Descrição**: Remove uma região do sistema.
- **Possíveis Respostas**:
  - **204 No Content**: Região removida com sucesso.
  - **404 Not Found**: Região não encontrada.

---

## **Relatórios**

### **Criar Relatório**

- **Endpoint**: `/api/reports/`

- **Método**: `POST`

- **Descrição**: Registra um novo relatório.

- **Exemplo de Corpo da Requisição**:

  ```json
  {
    "region": 1,
    "message": "Relatório sobre as condições da água."
  }
  ```

- **Possíveis Respostas**:

  - **201 Created**: Relatório criado com sucesso.

    ```json
    {
      "id": 1,
      "region": 1,
      "message": "Relatório sobre as condições da água."
    }
    ```

  - **400 Bad Request**: Dados inválidos.

    ```json
    {
      "error": "Region and message are required."
    }
    ```

### **Obter Relatórios**

- **Endpoint**: `/api/reports/`

- **Método**: `GET`

- **Descrição**: Retorna a lista de todos os relatórios.

- **Possíveis Respostas**:

  - **200 OK**: Lista de relatórios retornada com sucesso.

    ```json
    [
      {
        "id": 1,
        "region": 1,
        "message": "Relatório sobre as condições da água."
      }
    ]
    ```

### **Obter Relatório por ID**

- **Endpoint**: `/api/report/{id}/`

- **Método**: `GET`

- **Descrição**: Retorna os detalhes de um relatório específico.

- **Possíveis Respostas**:

  - **200 OK**: Detalhes do relatório retornados com sucesso.

  - **404 Not Found**: Relatório não encontrado.

    ```json
    {
      "error": "Report not found."
    }
    ```

### **Atualizar Relatório**

- **Endpoint**: `/api/report/{id}/`

- **Método**: `PATCH`

- **Descrição**: Atualiza as informações de um relatório.

- **Exemplo de Corpo da Requisição**:

  ```json
  {
    "message": "Relatório atualizado."
  }
  ```

- **Possíveis Respostas**:

  - **200 OK**: Relatório atualizado com sucesso.
  - **400 Bad Request**: Dados inválidos.
  - **404 Not Found**: Relatório não encontrado.

### **Deletar Relatório**

- **Endpoint**: `/api/report/{id}/`
- **Método**: `DELETE`
- **Descrição**: Remove um relatório do sistema.
- **Possíveis Respostas**:
  - **204 No Content**: Relatório removido com sucesso.
  - **404 Not Found**: Relatório não encontrado.

---

## **Detecções de Dados**

### **Criar Detecção**

- **Endpoint**: `/api/datas/1/`

- **Método**: `POST`

- **Descrição**: Registra uma nova detecção de dados.

- **Exemplo de Corpo da Requisição**:

  ```json
  {
    "address": "Rua A, número 12",
    "type": 1,
    "region": 1
  }
  ```

- **Possíveis Respostas**:

  - **201 Created**: Detecção criada com sucesso.

    ```json
    {
      "id": 1,
      "address": "Rua A, número 12",
      "type": 1,
      "region": 1
    }
    ```

  - **400 Bad Request**: Dados inválidos.

    ```json
    {
      "error": "Address, type, and region are required."
    }
    ```

### **Obter Dados por Arduino**

- **Endpoint**: `/api/datas-by-arduino/{name}/`

- **Método**: `GET`

- **Descrição**: Retorna os dados enviados por um Arduino específico.

- **Possíveis Respostas**:

  - **200 OK**: Dados retornados com sucesso.

    ```json
    [
      {
        "id": 1,
        "address": "Rua A, número 12",
        "type": "Água",
        "region": "Centro"
      }
    ]
    ```

  - **404 Not Found**: Arduino não encontrado.

    ```json
    {
      "error": "No data found for the specified Arduino."
    }
    ```
