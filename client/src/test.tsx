import { client } from "./tsRest";

export default function Index() {
    const posts = client.getPosts.useQuery(["posts"])
    console.log("posts",posts);
    const post = client.getPost.useQuery(["post"],{params:{
        id: "1"
    }})
    console.log("post",post)
    return(< p > KGF & GUVI Mass</p >) 
}