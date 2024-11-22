# Barber Shop Application

Esta é uma aplicação de barbearia desenvolvida com React e Vite. A aplicação permite que os usuários enviem feedbacks sobre os serviços da barbearia e que os administradores gerenciem esses feedbacks.

## Estrutura do Projeto

A estrutura do projeto é a seguinte:

```
.gitignore
eslint.config.js
index.html
package.json
public/
README.md
src/
	api/
		endpoints.js
	App.css
	App.jsx
	assets/
		images/
			banner3.avif
	components/
		card/
			index.css
			index.jsx
		footer/
			index.css
			index.jsx
		infos/
			index.css
			index.jsx
		nav/
			index.css
			index.jsx
	database/
		db.json
	index.css
	main.jsx
	pages/
		contatenos/
			index.css
			index.jsx
		FeedBack/
			index.css
			index.jsx
		FeedBackControl/
			index.jsx
			style.css
		sobre/
			index.css
			index.jsx
	routes.jsx
vite.config.js
```
## Rotas da Aplicação
A aplicação possui as seguintes rotas:

- `/`: Página inicial.
- `/sobre`: Página sobre a barbearia.
- `/contatenos`: Página de contato.
- `/feedback`: Página para envio de feedbacks.
- `/admin/feedback-control`: Página de controle de feedbacks (admin).

## Endpoints da API

A aplicação utiliza uma API para gerenciar os feedbacks. Os endpoints disponíveis são:

### 

getAllFeedbacks



Retorna todos os feedbacks cadastrados.

**URL:** `http://localhost:3000/feedbacks`

**Método:** `GET`

**Exemplo de Uso:**

```js
import { getAllFeedbacks } from "./api/endpoints";

useEffect(() => {
	getAllFeedbacks().then((data) => setFeedback(data));
}, []);
```

### 

createFeedback



Cria um novo feedback.

**URL:** `http://localhost:3000/feedbacks`

**Método:** `POST`

**Parâmetros:**

- data (objeto): Dados do feedback a ser criado.

**Exemplo de Uso:**

```js
import { createFeedback } from "./api/endpoints";

const handleSubmit = (e) => {
	e.preventDefault();
	const form = new FormData(e.target);
	const data = {
		nome: form.get("nome"),
		email: form.get("email"),
		avaliacao: form.get("avaliacao"),
		data: new Date().toLocaleDateString(),
	};
	createFeedback(data);
};
```

### 

deleteFeedback



Deleta um feedback existente.

**URL:** `http://localhost:3000/feedbacks/:id`

**Método:** `DELETE`

**Parâmetros:**

- id (string): ID do feedback a ser deletado.

**Exemplo de Uso:**

```js
import { deleteFeedback } from "./api/endpoints";

<button onClick={() => deleteFeedback(item.id)}>Deletar</button>
```

## Como Executar

Para executar a aplicação, siga os passos abaixo:

1. Instale as dependências:

```sh
npm install
```

2. Inicie o servidor de desenvolvimento:

```sh
npm run dev
```

3. Acesse a aplicação em `http://localhost:3000`.

## Scripts Disponíveis

- `dev`: Inicia o servidor de desenvolvimento.
- `build`: Compila a aplicação para produção.
- `lint`: Executa o ESLint para verificar problemas no código.
- `preview`: Visualiza a aplicação compilada.

## Dependências

- `axios`: ^1.7.7
- `react`: ^18.3.1
- `react-dom`: ^18.3.1
- `react-router-dom`: ^6.28.0

## DevDependencies

- `@eslint/js`: ^9.13.0
- `@types/react`: ^18.3.12
- `@types/react-dom`: ^18.3.1
- `@vitejs/plugin-react`: ^4.3.3
- `eslint`: ^9.13.0
- `eslint-plugin-react`: ^7.37.2
- `eslint-plugin-react-hooks`: ^5.0.0
- `eslint-plugin-react-refresh`: ^0.4.14
- `globals`: ^15.11.0
- `vite`: ^5.4.10

## Licença

Este projeto está licenciado sob a licença MIT.