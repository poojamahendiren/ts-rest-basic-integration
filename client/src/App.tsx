import { client } from "./tsRest";

export default async function App() {
  // const posts = client.getPosts.useQuery(["posts"])
  // console.log("posts", posts);
  // const post = client.getPost.useQuery(["post"], {
  //   params: {
  //     id: "1"
  //   }
  // })
  // console.log("post", post)
  const post =await client.getPost.query({params:{id:"1"}})
  console.log(post)
  const posts = await client.getPosts.query({})
  console.log(posts);
  
  return (<>< p > KGF & GUVI Mass</p ></>)
}