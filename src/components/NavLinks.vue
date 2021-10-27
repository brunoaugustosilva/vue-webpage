<template>
  <div class="panel">
      <nav>
          <a href="./posts">Posts</a>
          <a href="./retweets">Retweets</a>
          <a href="./followersPanel">Followers panel</a>
      </nav>
  </div>
</template>

<script>
export default {
    name: 'NavLinks',
}
</script>

<style>
.panel{
    border-bottom: 1px solid rgba(0, 0, 0, 0.027);
    display: flex;
    width: 100vw;
    justify-content: center;
}

nav {
    padding: 8px 8px;
}

a{
    text-decoration: none;
    padding: 4px 38px;
    color: rgb(92, 88, 88);
    transition: all .1s cubic-bezier(0.9, -0.39, 0, 1.49);
}

a:hover{
    border-bottom: 2px solid rgba(0, 0, 0, 0.568);
}
</style>