import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const port = process.env.API_PORT || 3000;
const serverUrl = `http://localhost:${port}`;

// Configurações do Swagger
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Tech challenge lanchonete",
      version: "1.0.0",
      description: "Documentação criada como requesito do tech challenge - Software Architecture",
      contact: {
        name: "GitHub",
        url: "https://github.com/FIAP-8SOAT-G6/tech-challenge-lanchonete"
      }
    },
    servers: [
      {
        url: serverUrl,
        description: "Servidor de desenvolvimento"
      }
    ]
  },
  apis: ["./src/routes/*.yaml"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export { swaggerDocs, swaggerUi };
