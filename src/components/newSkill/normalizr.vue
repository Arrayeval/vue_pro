<template  >
  <div class="main-wrapper">
    <section class="normalizr-part part-item">
      <p>测试normalizr的使用方法</p>
      <button @click="dealData">点击试试</button>
    </section>
  </div>
</template>

<script>
import {normalize, schema} from 'normalizr'
export default {
  name: 'normalizr',
  data () {
    return {
      initData: {
        "id": "123",
        "author": {
          "id": "1",
          "name": "Paul"
        },
        "title": "My awesome blog post",
        "comments": [
          {
            "id": "324",
            "commenter": {
              "id": "2",
              "name": "Nicole"
            }
          }
        ]
      }
    }
  },
  methods: {
    dealData () {
      // Define a users schema
      const user = new schema.Entity('users');

      // Define your comments schema
      const comment = new schema.Entity('comments', {
        commenter: user
      });

      // Define your article
      const article = new schema.Entity('articles', {
        author: user,
        comments: [comment]
      });

      const normalizedData = normalize(this.initData, article);
      console.log(normalizedData)
    }
  }
}
</script>

<style>
  .main-wrapper{
    padding-top:1.2rem
  }
</style>
