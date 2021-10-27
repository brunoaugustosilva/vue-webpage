<template>
    <div class="post">
        <div class="post-header">
            <div class="profile-image"><img src=""></div>
            <div class="profile-name"><span>{{author}}</span></div>
        </div>
        <div class="post-body">
            <span>
                {{content}}
            </span>
        </div>
        <div class="post-footer">
            <font-awesome-icon icon="heart"/>
            <font-awesome-icon icon="retweet"/>
            <font-awesome-icon icon="comment"/>
        </div>
    </div>
</template>
<script>
export default {
    name: "PostSection",
    props: {
        author: String,
        createdAt: String,
        content: String
    }
}
</script>
<style scoped>
.post{
    min-height: 200px;
    width: 310px;
    background-color: rgba(155, 155, 155, .2);
    color: var(--primary-color);
    border-radius: 14px 0;
    display: flex;
    margin: 10px 8px;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 10px 11px 20px 0px rgb(0 0 0 / 20%);
}

.post-header, .post-body {
    padding: 6px 8px;
}

.post-header{
    font: 1em 100 "Segoe UI, sans-serif";
    border-bottom-style: solid;
    border-width: 1px;
    border-color: rgba(0, 0, 0, .1);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.post-body{
    font: 0.9em "Calibri Light";
}

.post-footer{
    height: 30px;
    background-color: #ffffff75;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.post-footer > svg:hover {
    color: #faef;
}


.profile-image{/*usar imagem padrao*/
    flex-grow: 1
}

.profile-name{
    flex-grow: 3;
    padding: 0 0 0 8px;
}
</style>