
Node.js + TypeScript + Express + Prisma (MySQL) with Swagger docs.

Requirements
- Docker Desktop (Windows/Mac/Linux) -> (https://www.docker.com/products/docker-desktop/)
- Port 3000 (API) and 3306 (MySQL) available

Quick start (Docker Compose)
# 1) clone
git clone https://github.com/adlynkhairudin123/back-end-test-vista.git
cd back-end-test-vista

# 2) env (use service name "mysql" for Docker)
copy .env.example .env
Ensure in .env:
DATABASE_URL="mysql://root:rootpassword@mysql:3306/vista_db"
PORT=3000
NODE_ENV=production

# 3) build & run
docker compose down -v
docker compose up --build

API: http://localhost:3000
Swagger UI: http://localhost:3000/api-docs

Migrations: the container runs prisma migrate deploy on start.
If change the schema during review:
docker compose exec api npx prisma migrate deploy

Endpoints (summary)

- POST /companies — create company { name, registrationNumber }
- GET /companies — list companies with services
- POST /services — create service { name, description, price, companyId }
- GET /services/{id} — get service by id

Minimal test (curl)
# create a company
curl -X POST http://localhost:3000/companies \
  -H "Content-Type: application/json" \
  -d '{"name":"Adlyn","registrationNumber":"REG-001"}'

# create a service (companyId=1 example)
curl -X POST http://localhost:3000/services \
  -H "Content-Type: application/json" \
  -d '{"name":"Gold","description":"Premium","price":49.9,"companyId":1}'

# list
curl http://localhost:3000/companies
curl http://localhost:3000/services/1

Repo contents
- Dockerfile, .dockerignore, docker-compose.yml
- src/ (routes, controllers, services, middlewares)
- prisma/ (schema + migrations)
- .env.example (use mysql host inside Docker)

Troubleshooting
- Prisma P1001 (“Can’t reach database server”): Ensure you used mysql host in Docker (localhost only for local dev outside Docker).
- Port in use: free ports 3000/3306 or change ports in docker-compose.yml.
- Swagger 400/409/404: validation, duplicate, or not found (expected behaviors).
