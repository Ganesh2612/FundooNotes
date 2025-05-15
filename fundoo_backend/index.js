// index.js
import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes.js'; // ✅ default import
import noteRoutes from './routes/noteRoutes.js';

import swaggerUi from 'swagger-ui-express';
import swaggerSpec from '../docs/swaggerConfig.js';

const app = express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/fundooNotes')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

// Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/api/auth', authRoutes); // ✅ fixed
app.use('/api/notes', noteRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
