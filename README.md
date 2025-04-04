# Spark ✨

## Ignite your app's fire! 🔥

---

🚀 **Spark** is an opinionated React Native boilerplate built with Expo, TypeScript, Tailwind CSS, and Zustand. It provides a solid foundation with essential tooling and a clean project structure, allowing you to skip the setup and start building your amazing app right away.

---

## 🛠️ Tech Stack

This boilerplate comes pre-configured with:

- **Framework:** React Native with Expo SDK
- **Language:** TypeScript
- **Routing:** Expo Router (File-based routing)
- **Styling:** Tailwind CSS via NativeWind v4
- **State Management:** Zustand (Simple, fast, scalable)
- **Data Fetching:** TanStack React Query + Axios
- **Components:**
  - Gorhom Bottom Sheet
  - Shopify FlashList (Performant Lists)
- **Storage:** React Native MMKV (Fast key-value storage)
- **Utilities:**
  - clsx & tailwind-merge (Conditional & optimized class names)
  - dotenvx (Environment variable management)
  - patch-package (Apply patches to node_modules)
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
    _(Choose one based on your preferred package manager)_

    ```bash
    yarn install
    # --- OR ---
    npm install
    ```

3.  **Set up Environment Variables:**

    - Create `.env.development` and `.env.production` files by copying from potential examples (if provided) or creating them manually.
    - Populate them with your required environment variables (e.g., API keys, base URLs).
    - **Important:** These files are listed in `.gitignore` and should **not** be committed to version control.

4.  **Run the app:**

- Prebuild the app first (if you haven't already):

  ```bash
  npm run prebuild
  ```

  Generates the `ios` and `android` directories.

- Create the development build:
  ```bash
  npm run <ios|android>
  ```
  Open the installed development client app.

---

## ⚙️ Available Scripts

The `package.json` includes several helpful scripts:

| Script                    | Description                                                                   |
| :------------------------ | :---------------------------------------------------------------------------- |
| `yarn start`              | Starts the Metro bundler for Expo Go / Dev Client (using `.env.development`). |
| `yarn start:prod`         | Starts the Metro bundler using `.env.production`.                             |
| `yarn start:dev`          | Alias for `yarn start --dev-client`. Starts for the development client.       |
| `yarn ios`                | Runs the app on an iOS simulator/device (using `.env.development`).           |
| `yarn ios:prod`           | Runs the app on an iOS simulator/device (using `.env.production`).            |
| `yarn android`            | Runs the app on an Android emulator/device (using `.env.development`).        |
| `yarn android:prod`       | Runs the app on an Android emulator/device (using `.env.production`).         |
| `yarn device`             | Runs the app on a connected device (iOS, using `.env.development`).           |
| `yarn device:prod`        | Runs the app on a connected device (iOS, using `.env.production`).            |
| `yarn build:ios`          | Creates a local iOS build using EAS Build (using `.env.development`).         |
| `yarn build:ios:prod`     | Creates a local iOS build using EAS Build (using `.env.production`).          |
| `yarn build:android`      | Creates a local Android build using EAS Build (using `.env.development`).     |
| `yarn build:android:prod` | Creates a local Android build using EAS Build (using `.env.production`).      |
| `yarn lint`               | Runs ESLint to check for code style issues.                                   |
| `yarn lint:fix`           | Runs ESLint and automatically fixes fixable issues.                           |
| `yarn format`             | Formats code using Prettier.                                                  |
| `yarn clean`              | Removes `node_modules`, lock files, and reinstall dependencies.               |
| `yarn postinstall`        | Runs `patch-package` after installation.                                      |
| `yarn prebuild`           | Runs `expo prebuild` using `.env.development`.                                |
| `yarn prebuild:prod`      | Runs `expo prebuild` using `.env.production`.                                 |

**Note:** Scripts ending in `:prod` explicitly load environment variables from `.env.production` using `dotenvx`. Development scripts load from `.env.development` by default.

---

## 🔑 Environment Variables

Environment variables are managed using `dotenvx`.

- Create `.env.development` for local development.
- Create `.env.production` for production builds.
- Access variables in your code via `process.env.YOUR_VARIABLE_NAME`. Ensure you declare them in `expo-env.d.ts` for TypeScript support.
- **Never commit `.env.*` files to Git.** Use environment variable management provided by your hosting/build platform for production secrets.

---

Happy coding! ✨
