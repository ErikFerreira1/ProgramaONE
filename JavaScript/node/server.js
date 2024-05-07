import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const server = fastify();

const database = new DatabaseMemory();

server.post("/videos", (request, reply) => {
  const { title, description, duration } = request.body;

  console.log(request.body);

  database.create({
    title,
    description,
    duration,
  });
  return reply.status(201).send();
});
server.get("/videos", () => {
  return "hello";
});
server.put("/videos/:id", () => {
  return "hello node.js";
});
server.delete("/videos/:id", () => {
  return "hello node.js";
});

server.listen({
  port: 3333,
});
