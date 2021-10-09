<template>
  <div class="hello">
    <h1>The latest Posts </h1> 
    <p v-if="error">{{ error }}</p>
    <form action="">
      <label for="PostField">Write a task</label>
      <input id="PostField" type="text" placeholder="What's on your mind ..." v-model="text">
      <button type="submit">Post</button>
    </form>
    <div class="container">
      <ul>
        <li
         v-for="post in posts"
         v-bind:key="post.id"
         >
         {{ post }}
         </li>
      </ul>
    </div>
  </div>
</template>

<script> 
import PostController from "../PostsController"
export default {
  name: 'PostComponent',
  data(){
    return{ 
      posts:[],
      text:'',
      error:''
      }
  },
  async created(){
    try {
         this.posts = await PostController.getPosts()
    } catch (err) {
      this.error=err.message
    }
  } 
  
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
