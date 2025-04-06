# Spark ✨

## Ignite your app's fire! 🔥

---

🚀 **Spark** is an opinionated React Native template built with Expo, TypeScript, Tailwind CSS, and Zustand. It provides a solid foundation with essential tooling and a clean project structure, allowing you to skip the setup and start building your amazing app right away.

---

## 🛠️ Tech Stack

This template comes pre-configured with:

- **Framework:** React Native with Expo SDK
- **Language:** TypeScript
- **Routing:** Expo Router (File-based routing)
- **Styling:** Tailwind CSS via NativeWind v4
- **State Management:** Zustand (Simple, fast, scalable)
- **Data Fetching:** TanStack React Query + Axios
- **Forms:** TanStack React Form + Zod for validation
- **Components:**
  - Gorhom Bottom Sheet
  - Shopify FlashList (Performant Lists)
- **Storage:** React Native MMKV (Fast key-value storage)
- **Utilities:**
  - clsx & tailwind-merge (Conditional & optimized class names)
  - dotenvx (Environment variable management)
- **Linting & Formatting:** ESLint & Prettier (with Tailwind plugin)
- **Build & Development:** Expo EAS Build & Expo Go / Development Client

---

## 📁 Folder Structure

The project follows a feature-first approach within the `src` directory:

```plaintext
.
├── .vscode/           # VSCode settings and snippets
├── assets/            # Static assets (fonts, images)
├── src/               # Main application source code
│   ├── api/           # API layer (Axios instances, request functions)
│   ├── app/           # Expo Router routes (screens)
│   ├── components/    # Shared UI components
│   ├── hooks/         # Custom React hooks
│   ├── store/         # Zustand state management stores
│   ├── types/         # Global TypeScript types and interfaces
│   └── utils/         # Utility functions and helpers
├── .env.development   # Development environment variables (DO NOT COMMIT)
├── .env.production    # Production environment variables (DO NOT COMMIT)
├── .eslintignore      # Files ignored by ESLint
├── .eslintrc.js       # ESLint configuration
├── .gitignore         # Files ignored by Git
├── .prettierrc.json   # Prettier configuration
├── app.config.ts      # Expo app configuration (dynamic part)
├── app.json           # Expo app configuration (static part)
├── babel.config.js    # Babel configuration
├── metro.config.js    # Metro bundler configuration
├── package.json       # Project dependencies and scripts
├── README.md          # You are here!
├── tailwind.config.js # Tailwind CSS configuration
└── tsconfig.json      # TypeScript configuration
```

---

## 🚀 Getting Started

1.  **Clone the repository:**

    ```bash
    git clone <your-repo-url> spark-app
    cd spark-app
    ```

2.  **Install dependencies:**

    ```bash
    pnpm install
    ```

3.  **Run the app:**

- Prebuild the app first (if you haven't already):

  ```bash
  pnpm run prebuild
  ```

  Generates the `ios` and `android` directories.

- Create the development build:

  ```bash
  pnpm run <ios|android>
  ```

  Open the installed development client app.

---

## ⚙️ Available Scripts

The `package.json` includes several helpful scripts:

| Script                        | Description                                                                   |
| :---------------------------- | :---------------------------------------------------------------------------- |
| `pnpm start`                  | Starts the Metro bundler for Expo Go / Dev Client (using `.env.development`). |
| `pnpm run start:prod`         | Starts the Metro bundler using `.env.production`.                             |
| `pnpm run ios`                | Runs the app on an iOS simulator/device (using `.env.development`).           |
| `pnpm run ios:prod`           | Runs the app on an iOS simulator/device (using `.env.production`).            |
| `pnpm run android`            | Runs the app on an Android emulator/device (using `.env.development`).        |
| `pnpm run android:prod`       | Runs the app on an Android emulator/device (using `.env.production`).         |
| `pnpm run device`             | Runs the app on a connected device (iOS, using `.env.development`).           |
| `pnpm run device:prod`        | Runs the app on a connected device (iOS, using `.env.production`).            |
| `pnpm run build:ios`          | Creates a local iOS build using EAS Build (using `.env.development`).         |
| `pnpm run build:ios:prod`     | Creates a local iOS build using EAS Build (using `.env.production`).          |
| `pnpm run build:android`      | Creates a local Android build using EAS Build (using `.env.development`).     |
| `pnpm run build:android:prod` | Creates a local Android build using EAS Build (using `.env.production`).      |
| `pnpm run lint`               | Runs ESLint to check for code style issues.                                   |
| `pnpm run lint:fix`           | Runs ESLint and automatically fixes fixable issues.                           |
| `pnpm run format`             | Formats code using Prettier.                                                  |
| `pnpm run clean`              | Removes `node_modules`, lock files, and reinstall dependencies.               |
| `pnpm run postinstall`        | Runs `patch-package` after installation.                                      |
| `pnpm run prebuild`           | Runs `expo prebuild` using `.env.development`.                                |
| `pnpm run prebuild:prod`      | Runs `expo prebuild` using `.env.production`.                                 |

**Note:** Scripts ending in `:prod` explicitly load environment variables from `.env.production` using `dotenvx`. Development scripts load from `.env.development` by default.

---

## 🔑 Environment Variables

Environment variables are managed using `dotenvx`.

- Fill out `.env.development` for local development.
- Fill out `.env.production` for production builds.
- **Note:** Parts of app config are dependent on environment variables, so filling them out is necessary.

---

Happy coding! ✨
