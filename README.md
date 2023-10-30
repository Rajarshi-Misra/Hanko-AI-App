# Hanko Next.js Starter (App directory)
This an AI web app that would genenrate rededesign images of your room. It has been built using:
1. NextJS
2. Hanko for auth
3. Supabase for Database and storage
4. Prisma for ORM
5. Replicate to get the AI models
The web app has been hosted on Vercel
## Clone the repo

```bash
https://github.com/Rajarshi-Misra/Hanko-AI-App.git
```
## Setting Up The Environment Variables

After setting up cloning the project you need to set up the environment variables declared in .env.example. Check [this](https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables) on how environment variables are stored in NexJS. However, don't push it to a public repository for hosting on any platform. If you plan to host it on Vercel(as in the case for this project). Check this [link](https://vercel.com/docs/projects/environment-variables#development-environment-variables?utm_source=next-site&utm_medium=docs&utm_campaign=next-website)
Go to the following link to see how to get the necessary variables:
1. [Hanko](https://docs.hanko.io/setup-hanko-cloud)
2. [Supabase](https://supabase.com/docs/guides/api/api-keys): The anon key has been used in the project
3. [Supbase URI for Prisma](https://supabase.com/partners/integrations/prisma#connection-pooling-with-supabase)
4. [Replicate](https://replicate.com/docs/reference/http#authentication)

## Install dependencies

```bash
pnpm install
```
## Setting up Prisma--Migrate your Database

```bash
pnpm prisma migrate dev
```
## Run the project

```bash
pnpm run dev
```
