
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

or simply:
- npm run build → compiles TypeScript → dist/
- npm start → runs the compiled app (production)
- npm run dev → runs in dev mode (hot reload)

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

RESULT:

http://localhost:3000/api-docs
<img width="1889" height="874" alt="image" src="https://github.com/user-attachments/assets/4f8c8ba1-e4c9-4043-841b-4d3209632f10" />
<img width="1873" height="877" alt="image" src="https://github.com/user-attachments/assets/1fccada0-0483-4caa-b9d1-02b003c0b759" />
<img width="1812" height="850" alt="image" src="https://github.com/user-attachments/assets/eda47662-dae9-4880-ac8a-a38c33184b51" />
<img width="1814" height="887" alt="image" src="https://github.com/user-attachments/assets/1e3ca51c-5527-441a-b036-26a0e3c6d8b4" />

http://localhost:3000/
<img width="670" height="82" alt="image" src="https://github.com/user-attachments/assets/d9352137-6a0f-47e7-b672-03294250a4ca" />




