import axios from "axios";
const url = "http://localhost:5000/api/posts/";
class PostController {
    // GET
       static getPosts() {
            return new Promise((resolve,reject) => {
                try {
                    const resp = axios.get(url);
                    const data =resp.data
                    resolve(
                        data.map(post=>({
                            ...post,
                            createdAt:new Date(post.createdAt)
                        }))
                    );
                } catch (error) {
                    reject(error);
                }
            })
        }

    // POST
        static insertPost(text){
            return axios.post(url,{text})
        }
    // DELETE
        static deletePost(id){
            return axios.delete(`${url}${id}`)
        }
} 
export default PostController;