<template>
    <div class="main">
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
import PostSection from './PostSection';

export default {
    name: "Main",
    components: {
        PostSection
    },
    data() {
        return {
            postData: {}
        }
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
.main{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 1em;
}

@media (min-width: 600px){
    .main{
        /*max-width: 50vw;*/
    }
}
</style>