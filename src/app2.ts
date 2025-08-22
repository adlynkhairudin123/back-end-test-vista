import express from 'express';
import cors from 'cors';
import companyRoutes from './routes/company.routes';
import serviceRoutes from './routes/service.routes';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './utils/swagger';

const app = express();
app.use(cors());
app.use(express.json());

// Root FIRST
app.get('/', (_req, res) => {
  res.json({ status: 'ok', docs: '/api-docs', time: new Date().toISOString() });
});

// Feature routes NEXT
app.use('/companies', companyRoutes);
app.use('/services', serviceRoutes);

// Swagger AFTER routes
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// 404 + error handler LAST 
// import { notFound, errorHandler } from './middlewares/errorHandler';
// app.use(notFound);
// app.use(errorHandler);

export default app;
