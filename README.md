# Searchland Test

This repository contains the code for the Searchland Full Stack Technical Test.
The project is structured as a **monorepo** and includes a Next.js frontend, backend services, and various configurations to streamline the development process. The app allows users to manage a list of users, (Add a user, List the users with pagination, Delete a user, see a user profile page).

## Demo

The App is deployed on Vercel and can be accessed [here](https://searchland-ejf.vercel.app/).

## Tech Stack

- **Next.js 13**: Frontend framework for React with built-in API routes.
- **TypeScript**: Static typing for JavaScript (100% Typescript).
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Drizzle ORM**: SQL-first ORM for interacting with the database.
- **PostgreSQL**: SQL database used for data persistence.
- **tRPC**: End-to-end typesafe APIs using TypeScript.
- **Docker**: Containerization for running services in isolated environments.
- **Monorepo**: For organizing the frontend and backend in a single codebase.
- **ESLint & Prettier**: For consistent code formatting and linting.

## Features

- **User Management**:
  - Create, view, and delete users.
  - Users are listed with pagination controls.
  - Each user can be viewed in detail by clicking on their profile.

## Project Structure

The project follows a **monorepo** pattern, which organizes different aspects of the application (frontend, backend, shared components) under one repository.

```bash
searchland/
├── src/
│   ├── app/                       # Next.js frontend
│   │   ├── admin/                 # Admin Pages for the app
│   │   ├── api/                   # tRPC client API adapters
│   │   ├── users/                 # User-related pages
│   │   └── api/                   # API routes
│   ├── components/                # Reusable components
│   │   ├── features               # Features components (UsersTable, UserForm, etc...)
│   │   └── ui                     # Ui components (Button, form, etc...)
│   ├── db/                        # Database schema and adapter
│   ├── drizzle/                   # Migration scripts
│   ├── lib/                       # Libraries and utilities
│   ├── server/                    # Backend logic (tRPC server)
│   │   └── routers/               # tRPC API Routes
│   └── drizzle/                   # Database schema and migrations
├── package.json                   # Project dependencies and scripts
└── pnpm-lock.yaml                 # Lockfile for package manager (PNPM)
```

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js**: Version 18.x
- **Docker**: For containerized services.
- **PostgreSQL**: Installed or run via Docker.
- **PNPM**: A fast, disk-space-efficient package manager for JavaScript.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo-url/searchland-ejf.git
   cd searchland-ejf
   ```

2. Install dependencies using PNPM:

   ```bash
   pnpm install
   ```

3. Set up the environment variables. Copy the `.env.sample` to `.env` and update the necessary values:

   ```bash
   cp .env.sample .env
   ```

4. Open the `.env` file and replace the following with your own config:

   ```bash
   NEON_DATABASE_URL=
   NEXT_PUBLIC_APP_URL=
   ```

### Running the Project

Follow these steps:

2. Run the Next.js development server:

   ```bash
   pnpm dev
   ```

3. The app will be available at [http://localhost:3000](http://localhost:3000).

### Database Setup

1. Run migrations using Drizzle ORM to set up the database schema:

   ```bash
   pnpm drizzle-kit migrate
   ```

2. Ensure the PostgreSQL instance is running and the connection string is correctly set in the `.env` file.

### Project Scripts

- **Start the development server**: \`pnpm dev\`
- **Build the project**: \`pnpm build\`
- **Run migrations**: \`pnpm drizzle-kit migrate\`
- **Lint the code**: \`pnpm lint\`

### Enhancements

- With more time, I would have added unit tests for the frontend and backend, as well as integration tests for the API routes.
- tRPC error handling

## Learn More

- **Next.js**: [Next.js Documentation](https://nextjs.org/docs)
- **Tailwind CSS**: [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- **Drizzle ORM**: [Drizzle ORM Documentation](https://orm.drizzle.team)
- **tRPC**: [tRPC Documentation](https://trpc.io/docs)
- **shadcn Ui**: [shadcn Ui Documentation](https://ui.shadcn.com/)
- **Neon**: [Neon Documentation](https://neon.tech/)

## License

This project is licensed under the MIT License.
