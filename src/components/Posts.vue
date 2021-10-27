<template>
  <div class="posts">
      <PostSection 
                :author="postData.author"
                :createdAt="postData.createdAt"
                :content="postData.content"
            />
            <PostSection 
                :author="postData.author"
                :createdAt="postData.createdAt"
                :content="postData.content"
            />
            <PostSection 
                :author="postData.author"
                :createdAt="postData.createdAt"
                :content="postData.content"
            />
            <PostSection 
                :author="postData.author"
                :createdAt="postData.createdAt"
                :content="postData.content"
            />
            <PostSection 
                :author="postData.author"
                :createdAt="postData.createdAt"
                :content="postData.content"
            />
            <PostSection 
                :author="postData.author"
                :createdAt="postData.createdAt"
                :content="postData.content"
            />
            <PostSection 
                :author="postData.author"
                :createdAt="postData.createdAt"
                :content="postData.content"
            />
            <PostSection 
                :author="postData.author"
                :createdAt="postData.createdAt"
                :content="postData.content"
            />
            <PostSection 
                :author="postData.author"
                :createdAt="postData.createdAt"
                :content="postData.content"
            />
            <PostSection 
                :author="postData.author"
                :createdAt="postData.createdAt"
                :content="postData.content"
            />
            <PostSection 
                :author="postData.author"
                :createdAt="postData.createdAt"
                :content="postData.content"
            />
  </div>
</template>

<script>
import PostSection from './PostSection'

export default {
    name: 'Posts',
    components: {
        PostSection
    },
    created() {
        this.postData = {
            author: "John Doe",
            createdAt: "2021-10-14T23:55:32Z",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ex ante. Vestibulum mattis varius libero at commodo. Aenean urna augue sodales sed."
        }
    },
}
</script>
<style>
.posts{
    display: flex;
    flex-wrap: wrap;
}
</style>