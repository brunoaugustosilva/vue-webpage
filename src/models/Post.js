class Post {
    constructor(author, created_at, entities){
        this.author = author;
        this.created_at = created_at;
        this.entities = entities;
    }

    toString(){
        return "Post [author=" + author +  ",created_at="+ created_at +", entities = {"+ entities +"}]";
    }
}