## 🛠️ Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/unlock-prize.git
cd unlock-prize
````

> Replace `your-username/unlock-prize` with your actual GitHub repo path.

### 2. Install Dependencies

Make sure you have [Node.js](https://nodejs.org/) and [pnpm](https://pnpm.io) installed.

Then run:

```bash
pnpm install
```

> If you don’t have `pnpm`, install it globally:

```bash
npm install -g pnpm
```

### 3. Run the Development Server

```bash
pnpm dev
```

Then open your browser at:

```
http://localhost:5173
```

---

## 📁 Project Structure

```
src/
├── components/
│   └── DigitInput.tsx
├── assets/
├── App.tsx
└── main.tsx
```

---

## 🎉 Features

* 4-digit unlock code input
* Confetti animation on success
* Auto-focus, backspace handling, and input clearing
* Responsive layout
* Built with React + Vite + TypeScript

---

## 📦 Build for Production

```bash
pnpm build
```

---

## 📄 License

MIT
