# ✉️ MailMagic - AI-Powered Email Generator

MailMagic is a professional React application that uses Artificial Intelligence to draft highly effective emails in seconds. Whether you need to write to your boss, a lecturer, or a colleague, MailMagic does the heavy lifting for you based on simple key points.

## 🚀 Features

* **AI Email Generation:** Uses the Mistral-7B Instruct AI model via the HuggingFace API to draft context-aware, grammatically perfect emails.
* **Customizable Tones:** Choose between Professional, Casual, or Urgent tones.
* **Markdown Support:** Formats the generated email beautifully using `react-markdown`.
* **1-Click Copy:** Easily copy the generated email to your clipboard with visual feedback.
* **Responsive UI:** Clean, modern, and fully responsive user interface built with TailwindCSS.

## 🛠️ Tech Stack

* **Frontend:** React (Vite)
* **Styling:** TailwindCSS
* **AI Integration:** HuggingFace Inference API (`@huggingface/inference`)
* **Icons:** Lucide React
* **Markdown Rendering:** React Markdown

## 💻 Getting Started

To run this project locally, follow these steps:

### 1. Clone the repository
\`\`\`bash
git clone https://github.com/your-username/mail-magic.git
cd mail-magic
\`\`\`

### 2. Install dependencies
\`\`\`bash
npm install
\`\`\`

### 3. Set up Environment Variables
Create a `.env` file in the root directory and add your HuggingFace Access Token:
\`\`\`env
VITE_HF_ACCESS_TOKEN=your_huggingface_api_token_here
\`\`\`

### 4. Start the development server
\`\`\`bash
npm run dev
\`\`\`

## 📁 Project Architecture

The project follows a modular component-based architecture:
* **Smart Components:** `Main.jsx` handles state management and API calls.
* **Reusable UI Components:** `TextField`, `TextArea`, `SelectionMenu`, `ButtonPrimary` ensure DRY code.

## 🤝 Contribution

Contributions are always welcome! Feel free to open a pull request or an issue.
