
# Easy Recipe Generator using Hugging Face API

This web application allows users to input a list of ingredients they have, and it will recommend a recipe they could make using the Hugging Face API. The project leverages the `Mistral-7B-Instruct` model from Hugging Face to generate recipe suggestions based on user input.


## Project Overview

This web application helps users quickly find a recipe suggestion by providing a list of available ingredients. It interacts with the Hugging Face API to fetch a generated recipe based on those ingredients.

### Key Features:
- User can input ingredients they have available.
- Displays a recipe suggestion generated via the Hugging Face model.
- Easy-to-use interface with ingredients input and recipe suggestion button.
- Displays a loading state to let the user know when the recipe is being generated.

## Installation

To get the project up and running locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/recipe-generator.git
```

### 2. Navigate to the project directory

```bash
cd recipe-generator
```

### 3. Install the dependencies

 Using `pnpm`:

```bash
pnpm install
```

### 4. Set up environment variables

Create a `.env` file in the root of the project with the following content:

```bash
VITE_PUBLIC_API_HF_ACCESS_TOKEN=your_hugging_face_access_token_here
```

To get a Hugging Face API token:
1. Go to [Hugging Face](https://huggingface.co).
2. Log in or create an account.
3. Navigate to your [API tokens page](https://huggingface.co/settings/tokens).
4. Copy your token and paste it into the `.env` file.

### 5. Start the development server

Using `pnpm`:

```bash
pnpm dev
```

The app should now be accessible at `http://localhost:5173`.

---

## Usage

Once the project is running locally, you can interact with the app by:
1. Adding a list of ingredients you have (e.g., eggs, flour, sugar).
2. Clicking the "Get a recipe" button.
3. The app will generate and display a recipe suggestion based on those ingredients.

You can also delete or remove ingredients by clicking the "X" next to the ingredient.



## Contributing

Contributions are welcome  to improve this project!

### How to contribute:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature/new-feature`.
3. Make your changes.
4. Commit your changes: `git commit -am 'Add new feature'`.
5. Push to the branch: `git push origin feature/new-feature`.
6. Create a new Pull Requst