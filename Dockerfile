# # To use this Dockerfile, you have to set `output: 'standalone'` in your next.config.js file.
# # From https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile

# FROM node:22.12.0-alpine AS base

# # Install dependencies only when needed
# FROM base AS deps
# # Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
# RUN apk add --no-cache libc6-compat
# WORKDIR /app

# # Install dependencies based on the preferred package manager
# COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
# RUN \
#   if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
#   elif [ -f package-lock.json ]; then npm ci; \
#   elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
#   else echo "Lockfile not found." && exit 1; \
#   fi


# # Rebuild the source code only when needed
# FROM base AS builder
# WORKDIR /app
# COPY --from=deps /app/node_modules ./node_modules
# COPY . .

# # Next.js collects completely anonymous telemetry data about general usage.
# # Learn more here: https://nextjs.org/telemetry
# # Uncomment the following line in case you want to disable telemetry during the build.
# # ENV NEXT_TELEMETRY_DISABLED 1

# RUN \
#   if [ -f yarn.lock ]; then yarn run build; \
#   elif [ -f package-lock.json ]; then npm run build; \
#   elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
#   else echo "Lockfile not found." && exit 1; \
#   fi

# # Production image, copy all the files and run next
# FROM base AS runner
# WORKDIR /app

# ENV NODE_ENV production
# # Uncomment the following line in case you want to disable telemetry during runtime.
# # ENV NEXT_TELEMETRY_DISABLED 1

# RUN addgroup --system --gid 1001 nodejs
# RUN adduser --system --uid 1001 nextjs

# # Remove this line if you do not have this folder
# COPY --from=builder /app/public ./public

# # Set the correct permission for prerender cache
# RUN mkdir .next
# RUN chown nextjs:nodejs .next

# # Automatically leverage output traces to reduce image size
# # https://nextjs.org/docs/advanced-features/output-file-tracing
# COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
# COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# USER nextjs

# EXPOSE 3000

# ENV PORT 3000

# # server.js is created by next build from the standalone output
# # https://nextjs.org/docs/pages/api-reference/next-config-js/output
# CMD HOSTNAME="0.0.0.0" node server.js



 # ------------ 2222222222

# # ────────────────────────────────────────────────────────────────────
# # 1. Base image – Node 20‑alpine is stable and slim
# # ────────────────────────────────────────────────────────────────────
# FROM node:20-alpine AS base

# # Install tini for better signal handling in containers
# RUN apk add --no-cache tini

# # Install pnpm globally
# RUN npm install -g pnpm
# # Install PostgreSQL client so pg_isready works inside the image
# RUN apk add --no-cache postgresql-client

# # Create non‑root user for security
# RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# WORKDIR /app

# # ────────────────────────────────────────────────────────────────────
# # 2. Install global tools
# #    • pnpm (no Corepack) – avoids the signature error you hit
# # ────────────────────────────────────────────────────────────────────
# RUN npm install -g pnpm

# # ────────────────────────────────────────────────────────────────────
# # 3. Copy lockfile + package.json first → install deps (cache layer)
# # ────────────────────────────────────────────────────────────────────
# COPY package.json pnpm-lock.yaml ./

# RUN pnpm install --frozen-lockfile --prod=false

# # ────────────────────────────────────────────────────────────────────
# # 4. Copy the rest of the source & build
# # ────────────────────────────────────────────────────────────────────
# COPY . .

# # Accept build‑time secrets (so they’re **not** baked into final image)
# ARG PAYLOAD_SECRET
# ARG DATABASE_URI
# ENV PAYLOAD_SECRET=${PAYLOAD_SECRET}
# ENV DATABASE_URI=${DATABASE_URI}

# # Build Next.js & Payload
# #RUN pnpm build

# # ────────────────────────────────────────────────────────────────────
# # 5. Prune devDependencies to shrink image
# # ────────────────────────────────────────────────────────────────────
# RUN pnpm prune --prod

# # ────────────────────────────────────────────────────────────────────
# # 6. Final runtime stage – copy only what we need
# # ────────────────────────────────────────────────────────────────────
# FROM node:20-alpine

# RUN apk add --no-cache tini \
#  && addgroup -S appgroup && adduser -S appuser -G appgroup

# WORKDIR /app

# COPY --from=base /app ./

# USER appuser

# ENV NODE_ENV=production
# EXPOSE 3000

# ENTRYPOINT ["/sbin/tini", "--"]
# CMD ["pnpm", "start"]



# --- Base image
# FROM node:18


# # Install PostgreSQL client (for pg_isready)
# RUN apt-get update && apt-get install -y postgresql-client

# # Set working dir
# WORKDIR /app

# # Install pnpm
# RUN npm install -g pnpm


# # Accept build-time arguments
# ARG PAYLOAD_SECRET
# ARG DATABASE_URI
# # ARG SERVER_URL

# # Set them as env for the build process
# ENV PAYLOAD_SECRET=$PAYLOAD_SECRET
# ENV DATABASE_URI=$DATABASE_URI
# # ENV SERVER_URL=$SERVER_URL


# # Copy core files
# COPY ./package.json ./pnpm-lock.yaml ./
# COPY tsconfig.json ./              
# COPY next.config.js ./             
# COPY redirects.js ./
# COPY ./public ./public
# COPY next-sitemap.config.cjs ./   

# # Copy source
# COPY ./src ./src
# COPY tailwind.config.mjs ./
# COPY postcss.config.js ./


# # Install dependencies
# RUN pnpm install --frozen-lockfile

# # Build Next.js + Payload
# #RUN pnpm build 

# # Expose port for the app
# EXPOSE 3000

# # Start the app
# CMD ["pnpm", "start"]



FROM node:18

# Install PostgreSQL client (for pg_isready etc.)
RUN apt-get update && apt-get install -y postgresql-client

# Set working dir
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Accept build-time arguments (optional, but usually overridden at runtime by .env.docker)
ARG PAYLOAD_SECRET
ARG DATABASE_URI

# Make them available at build time
ENV PAYLOAD_SECRET=$PAYLOAD_SECRET
ENV DATABASE_URI=$DATABASE_URI

# Copy dependency files
COPY ./package.json ./pnpm-lock.yaml ./

# Copy configs
COPY tsconfig.json ./
COPY next.config.js ./
COPY redirects.js ./
COPY next-sitemap.config.cjs ./
COPY tailwind.config.mjs ./
COPY postcss.config.js ./

# Copy public + source
COPY ./public ./public
COPY ./src ./src

# Install dependencies
RUN pnpm install --frozen-lockfile

# Build Next.js + Payload
RUN pnpm build

# Expose port for the app
EXPOSE 3000

# Start the app
CMD ["pnpm", "start"]