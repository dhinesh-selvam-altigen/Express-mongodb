const swagger = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    explorer: true,
    info: {
      title: "My API",
      version: "1.0.0",
      description: "API documentation",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

module.exports = {
  swaggerSpec: swagger(options),
};
