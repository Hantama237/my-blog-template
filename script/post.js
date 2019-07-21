class Post{
    constructor(){
        this.posts={
            title:"<h2>Empty Title</h2>",
            body:"",
            description:""
        }
    }
    getTitle(){
        return this.posts.title
    }
    //to return all the complete element
    getPost(){
        return(this.posts.title+this.posts.body)
    }
    //set the post title
    setTitle(title){
        this.posts.title="<h2>"+title+"</h2>"
    }
    //set the whole text body
    setBody(body){
        this.posts.body=body
    }
    setDescription(desc){
        this.posts.description=desc
    }
    getDescription(){
        return this.posts.description
    }
    //add new paragraph
    addParagraph(text){
        this.posts.body+="<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+text+"</p>"
    }
    //add a new sub title
    addSubtitle(title){
        this.posts.body+="<h3>"+title+"</h3>"
    }
    //create a ul or ol list
    createList(list,ordered){
        let result=ordered?"<ol>":"<ul>"
        list.forEach(item => {
            result+="<li>"+item+"</li>"
            console.log(item)
        });
        result+=ordered?"<ol>":"<ul>"
        return result
    }
    //create an anchor element 
    createLink(text,source){
        return "<a href=https://"+source+">"+text+"</a>"
    }
}

const ReactNative=new Post();
ReactNative.setTitle("How To Create React Native Monorepos using yarn Workspaces")
ReactNative.setDescription(`This post is discussing about how I create React native monorepos using yarn workspaces, because I have found
that the first time I try to create it I got some error that maybe you have faced`)
ReactNative.addParagraph(`
Maybe you have experienced that when you create react native monorepos using yarn workspaces there is some react native library 
that is become not found especially in expo when you run yarn start there would be error because expo couldn't find the dependency
in the node_modules folder. And here is how I create the monorepos :
`)
ReactNative.addSubtitle("First set up yarn workspaces normaly as you do")
ReactNative.addParagraph(`
Create a directory for `+ReactNative.createLink("myapi","plumiertest123.herokuapp.com")+` yarn workspace and modify package.json add the workspaces
`)

const Post2= new Post();


let postList=[ReactNative,Post2]