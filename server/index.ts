// main.ts
import { createExpressEndpoints, initServer } from "@ts-rest/express";
import cors from "cors";
import express from "express";
import { contract } from "../contract";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const s = initServer();

export const router = s.router(contract, {
  getPost: async ({ params: { id } }) => {
    const postId = parseInt(id);
    const post = await prisma.post.findUnique({ where: { id: postId } });
    return {
      status: 200,
      body: post,
    };
  },
  createPost: async ({ body }) => {
    const post = await prisma.post.create({
      data: body,
    });
    return {
      status: 201,
      body: post,
    };
  },
  updatePost: async ({ body, params: { id } }) => {
    const postId = parseInt(id);
    const post = await prisma.post.update({
      where: { id: postId },
      data: {
        title: body.title,
        body: body.body,
      },
    });
    return {
      status: 200,
      body: post,
    };
  },
  getPosts: async () => {
    const posts = await prisma.post.findMany();
    return {
      status: 200,
      body: posts,
    };
  },
  deletePost: async ({ params: { id } }) => {
    const postId = parseInt(id);
    const post = await prisma.post.delete({ where: { id: postId } });
    return {
      status: 204,
      body: post,
    };
  },
});

createExpressEndpoints(contract, router, app);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
