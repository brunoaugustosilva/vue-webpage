<template>
    <div class="main">
        <NavLinks/>
        <div class="content">
            <Posts v-if="section == 1"/>
            <FollowerPanel v-if="section == 2" />
        </div>
    </div>
</template>
<script>
import Posts from './Posts';
import FollowerPanel from './FollowerPanel';
import NavLinks from './NavLinks';

export default {
    name: "Main",
    components: {
        Posts,
        NavLinks,
        FollowerPanel
    },
    data() {
        return {
            postData: {},
            section: 1
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
    flex-direction: column;
    flex-wrap: wrap;
    width: calc(100vw - 10px);
    padding: 1em;
    align-items: center;
}

@media (min-width: 600px){
    .content{
        display: flex;
        flex-wrap: wrap;
        max-width: 60%;
    }
}
</style>