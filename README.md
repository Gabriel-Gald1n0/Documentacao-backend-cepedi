# Documentacao-backend-cepedi
# Documentação da API - EcoGuard - Sistema de Monitoramento ambiental

Este documento fornece uma visão geral da API, descrevendo os endpoints disponíveis e suas funcionalidades no sistema de gerenciamento de usuários, Arduinos e dados ambientais.

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

### **Obter Usuários**

- **Endpoint**: `/api/users/`
- **Método**: `GET`
- **Descrição**: Retorna a lista de todos os usuários.

### **Obter Usuário por ID**

- **Endpoint**: `/api/users/{id}/`
- **Método**: `GET`
- **Descrição**: Retorna os detalhes de um usuário específico.

### **Atualizar Usuário**

- **Endpoint**: `/api/users/{id}/`

- **Método**: `PATCH`

- **Descrição**: Atualiza as informações de um usuário.

- **Exemplo de Corpo da Requisição**:

  ```json
  {
    "name": "antonio",
    "email": "antonio@mail.com",
    "password": "antonio"
  }
  ```

### **Deletar Usuário**

- **Endpoint**: `/api/users/{id}/`
- **Método**: `DELETE`
- **Descrição**: Remove um usuário do sistema.

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

### **Obter Arduinos**

- **Endpoint**: `/api/arduinos/`
- **Método**: `GET`
- **Descrição**: Retorna a lista de todos os Arduinos.

### **Obter Arduino por ID**

- **Endpoint**: `/api/arduinos/{id}/`
- **Método**: `GET`
- **Descrição**: Retorna os detalhes de um Arduino específico.

### **Atualizar Arduino**

- **Endpoint**: `/api/arduinos/{id}/`

- **Método**: `PATCH`

- **Descrição**: Atualiza as informações de um Arduino.

- **Exemplo de Corpo da Requisição**:

  ```json
  {
    "name": "arduino2",
    "description": "uma descrição atualizada"
  }
  ```

### **Deletar Arduino**

- **Endpoint**: `/api/arduinos/{id}/`
- **Método**: `DELETE`
- **Descrição**: Remove um Arduino do sistema.

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

### **Obter Regiões**

- **Endpoint**: `/api/regions/`
- **Método**: `GET`
- **Descrição**: Retorna a lista de todas as regiões.

### **Obter Região por ID**

- **Endpoint**: `/api/region/{id}/`
- **Método**: `GET`
- **Descrição**: Retorna os detalhes de uma região específica.

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

### **Deletar Região**

- **Endpoint**: `/api/region/{id}/`
- **Método**: `DELETE`
- **Descrição**: Remove uma região do sistema.

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
    "message": "uma mensagem qualquer"
  }
  ```

### **Obter Relatórios**

- **Endpoint**: `/api/reports/`
- **Método**: `GET`
- **Descrição**: Retorna a lista de todos os relatórios.

### **Obter Relatório por ID**

- **Endpoint**: `/api/report/{id}/`
- **Método**: `GET`
- **Descrição**: Retorna os detalhes de um relatório específico.

### **Atualizar Relatório**

- **Endpoint**: `/api/report/{id}/`

- **Método**: `PATCH`

- **Descrição**: Atualiza as informações de um relatório.

- **Exemplo de Corpo da Requisição**:

  ```json
  {
    "region": 1
  }
  ```

### **Deletar Relatório**

- **Endpoint**: `/api/report/{id}/`
- **Método**: `DELETE`
- **Descrição**: Remove um relatório do sistema.

---

## **Detecções de Dados**

### **Criar Detecção**

- **Endpoint**: `/api/datas/1/`

- **Método**: `POST`

- **Descrição**: Registra uma nova detecção de dados.

- **Exemplo de Corpo da Requisição**:

  ```json
  {
    "address": "rua a 2",
    "type": 1,
    "region": 1
  }
  ```

### **Obter Dados por Nome do Arduino**

- **Endpoint**: `/api/datas-by-arduino/{name}/`
- **Método**: `GET`
- **Descrição**: Retorna os dados enviados por um Arduino específico.

---
