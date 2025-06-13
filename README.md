# ⚡ FastDeploy

<img src="public/demo.png">

#
Hi there! 👋

FastDeploy is a modern starter kit for founders and developers who want to build and launch fast without getting stuck in setup hell. Whether you're creating a SaaS, an AI tool, or any kind of web app, FastDeploy gives you everything you need to go from idea to income with minimal friction.

It’s built with a modern stack — including Next.js, Supabase, Stripe, LemonSqueezy, Drizzle ORM, and Mailgun — and comes fully wired with essential features like authentication, payments, protected API routes, email handling, and SEO.

FastDeploy removes that overhead so you can launch in days, not weeks. Just plug in your logo, set your product name, and start building what matters — or start making money.

## Features

- SEO Optimisation
- User authentication with Supabase
- Stripe and LemonSqueezy integration
- Email notifications via Mailgun
- Modern UI built with Next.js and TailwindCSS

## Docker Setup

FastDeploy provides Docker configurations for both **development** and **production** environments. Below, you'll find the structure of the Docker files and the commands to get started.

### Docker File Structure

The Docker files are organized as follows:

```
docker
├── dev
│   ├── Dockerfile                  # Dockerfile for development
│   ├── docker-compose.yml          # Base development setup
│   ├── docker-compose.mongodb.yml  # Development setup with MongoDB
│   └── docker-compose.postgres.yml # Development setup with PostgreSQL
└── prod
    ├── Dockerfile                  # Dockerfile for production
    ├── docker-compose.yml          # Base production setup
    ├── docker-compose.mongodb.yml  # Production setup with MongoDB
    └── docker-compose.postgres.yml # Production setup with PostgreSQL
```

### Development Environment

In development, the project runs in **watch mode**, meaning it automatically detects changes in your code and rebuilds the application. This is ideal for local development but should **never** be used in production.

#### Commands for Development

1. **Base Setup** (without a database):

   ```bash
   docker-compose -f docker/dev/docker-compose.yml up --build
   ```

2. **With PostgreSQL**:

   ```bash
   docker-compose -f docker/dev/docker-compose.yml -f docker/dev/docker-compose.postgres.yml up --build
   ```

3. **With MongoDB**:
   ```bash
   docker-compose -f docker/dev/docker-compose.yml -f docker/dev/docker-compose.mongodb.yml up --build
   ```

#### Why Watch Mode?

- **Watch mode** ensures that your changes are reflected in real-time without manually restarting the server.
- It’s perfect for development but **not suitable for production** due to performance and security concerns.

---

### Production Environment

The production environment is optimized for performance and security. It uses a multi-stage build to reduce the image size and includes only the necessary dependencies.

#### Commands for Production

1. **Base Setup** (without a database):

   ```bash
   docker-compose -f docker/prod/docker-compose.yml up --build -d
   ```

2. **With PostgreSQL**:

   ```bash
   docker-compose -f docker/prod/docker-compose.yml -f docker/prod/docker-compose.postgres.yml up --build -d
   ```

3. **With MongoDB**:
   ```bash
   docker-compose -f docker/prod/docker-compose.yml -f docker/prod/docker-compose.mongodb.yml up --build -d
   ```

#### Key Differences in Production

- **No watch mode**: The application is pre-built, and changes require a rebuild.
- **Optimized images**: Smaller image size and faster startup times.
- **Environment variables**: Ensure all required variables (e.g., `DATABASE_URL`, `API_KEY`) are set.

---

### Portainer Integration

Portainer is included in both development and production setups to help you manage your Docker containers via a web interface.

- **Access Portainer**: `http://localhost:9000`
- **Default credentials**: Set up during the first login.

---

### Disclaimer

- **Development Mode**: Uses watch mode for real-time updates. Not suitable for production.
- **Production Mode**: Optimized for performance and security. Requires a rebuild for changes.

---

## Docs

For full documentation, visit: [FastDeploy Docs](https://FastDeploy.idee8.agency/docs)

## Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) before contributing.

## Contributing

For people who want to contribute, please refer to [CONTRIBUTING.md](CONTRIBUTING.md).

---

Cooked for you with ❤️ by [Joao Marcos Jova](https://Kadoshsoftwares.com)
