# 🚗 Rota Delas

> **Modelo de Negócio:** Aplicativo de transporte por aplicativo **exclusivo para mulheres** — tanto motoristas quanto passageiras são mulheres, oferecendo um ambiente seguro e de confiança para o deslocamento urbano.

---

## 📋 Descrição Geral

O **Rota Delas** é uma plataforma backend de gerenciamento de corridas desenvolvida com Node.js e SQL. O sistema permite o cadastro, consulta, atualização e exclusão de corridas realizadas dentro do aplicativo, conectando passageiras a motoristas em um ambiente 100% feminino.

A API foi construída seguindo os princípios REST, com endpoints testados via **Insomnia**, garantindo praticidade e organização durante o desenvolvimento.

---

## 🗂️ Entidade e Atributos

### Entidade: `Corrida`

| Atributo           | Tipo     | Descrição                                      |
|--------------------|----------|------------------------------------------------|
| `id`               | INTEGER  | Identificador único da corrida (auto-increment)|
| `destino_inicial`  | VARCHAR  | Ponto de partida da corrida                    |
| `destino_final`    | VARCHAR  | Ponto de chegada da corrida                    |
| `passageira`       | VARCHAR  | Nome da passageira                             |
| `motorista`        | VARCHAR  | Nome da motorista                              |
| `carro`            | VARCHAR  | Modelo/placa do veículo utilizado              |
| `preco`            | DECIMAL  | Valor cobrado pela corrida (em R$)             |

---

## ⚙️ Funcionalidades Principais (CRUD)

O sistema disponibiliza as seguintes operações sobre a entidade `Corrida`:

| Método HTTP | Endpoint          | Função              | Descrição                                    |
|-------------|-------------------|---------------------|----------------------------------------------|
| `GET`       | `/corridas`        | `findAll()`         | Retorna todas as corridas cadastradas        |
| `GET`       | `/corridas/:id`    | `findById()`        | Retorna uma corrida específica pelo ID       |
| `POST`      | `/corridas`        | `post()`            | Cadastra uma nova corrida                    |
| `PUT`       | `/corridas/:id`    | `put()`             | Atualiza os dados de uma corrida existente   |
| `DELETE`    | `/corridas/:id`    | `delete()`          | Remove uma corrida pelo ID                   |

---

## 🛠️ Tecnologias Utilizadas

### Backend
- **Node.js** — Ambiente de execução JavaScript no servidor


### Banco de Dados
- **SQL** — Linguagem de consulta estruturada para manipulação dos dados
- **MySQL**  — Sistema gerenciador de banco de dados relacional

### Testes
- **Insomnia** — Cliente HTTP para testar e documentar os endpoints da API

---

## 🚀 Como Executar o Projeto

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/rota-delas.git

# Acesse a pasta do projeto
cd rota-delas

# Instale as dependências
npm install


# Execute o servidor
npm start
```

---

## 🔗 Exemplo de Requisição

**POST /corridas** — Criar uma nova corrida:

```json
{
  "destinoInicial": "Av. Paulista, 1000 - São Paulo",
  "destinoFinal": "Aeroporto de Guarulhos - SP",
  "passageira": "Ana Silva",
  "motorista": "Carla Souza",
  "carro": "Toyota Corolla - ABC-1234",
  "preco": 85.50
}
```

---


Projeto desenvolvido com 💜 para tornar o transporte mais seguro para todas as mulheres.

---

