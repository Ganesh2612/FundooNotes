// docs/swaggerConfig.js

import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Fundoo Notes API',
      version: '1.0.0',
      description: 'API for user authentication in Fundoo Notes',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./routes/*.js'], // Path to route files for annotations
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
