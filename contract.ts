import { initContract } from "@ts-rest/core";
import { z } from "zod";

const c = initContract();

const PostSchema = z.object({
  id: z.number(),
  title: z.string(),
  body: z.string(),
});
const createSchema = PostSchema.omit({id:true})

export const contract = c.router({
  createPost: {
    method: "POST",
    path: "/posts",
    responses: {
      201: PostSchema,
    },
    body: z.object({
      title: z.string(),
      body: z.string(),
    }),
    summary: "Create a post",
  },
  getPost: {
    method: "GET",
    path: `/posts/:id`,
    responses: {
      200: PostSchema.nullable(),
    },
    summary: "Get a post by id",
  },
  updatePost:{
    method:"PUT",
    path:`/posts/:id`,
    responses:{
       200:PostSchema,
    },
    body:createSchema
  },
  getPosts:{
    method:"GET",
    path:`/allposts`,
    responses:{
        200:PostSchema.nullable().array()
    }
  },
  deletePost:{
    method:"DELETE",
    path:`/posts/:id`,
    responses:{
        204:PostSchema
    },
    body:createSchema
  }
});
