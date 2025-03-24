# Astro + PayloadCMS Template Project

This is a template project built with Astro and PayloadCMS, combining a modern static site builder with a powerful headless CMS.

## Features

- Fast builds with Astro
- Powerful content management with PayloadCMS
- TypeScript support
- Component-based architecture
- Built-in optimizations
- API endpoints
- Admin dashboard

## Prerequisites

- Node.js (version 16 or higher)
- Postgres (running locally or connection string)
- npm or yarn package manager

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/vardhaman619/Astro-Template.git
cd Astro-Template
```

2. Install dependencies:
```bash
cd backend-cms && npm install
cd frontend && npm install
```

3. Set up environment variables for backend-cms:
```bash
cd backend-cms && cp .env.example .env
cd frontend && cp .env.example .env
```
Edit `.env` with your Postgress connection string and other required variables.

4. Start development servers:
```bash
# Start both Astro and PayloadCMS
cd backend-cms && npm run dev
cd frontend && npm run dev
```

5. Build for production:
```bash
npm run build
# or
yarn build
```

## Project Structure

```
├── frontend/  (Astro js frontend website)
├── backend-cms/ (Payloadcms backend)
```

## Admin Dashboard

Access the PayloadCMS admin dashboard at:
```
http://localhost:3000/admin
```
