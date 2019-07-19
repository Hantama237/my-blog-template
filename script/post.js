class Post{
    constructor(){
        this.posts={
            title:"<h2>Empty Title</h2>",
            body:""
        }
    }
    getPost(){
        return(this.posts.title+this.posts.body)
    }
    setTitle(title){
        this.posts.title="<h2>"+title+"</h2>"
    }
    setBody(body){
        this.posts.body=body
    }
    addParagraph(text){
        this.posts.body+="<p>"+text+"</p>"
    }
    createLink(text,source){
        return "<a src="+source+">"+text+"</a>"
    }
    addSubtitle(title){
        this.posts.body+="<h3>"+title+"</h3>"
    }
}

const ReactNative=new Post();
ReactNative.setTitle("How To Create React Native Monorepos using yarn Workspaces")
ReactNative.addParagraph(`
Maybe you have experienced that when you create react native monorepos using yarn workspaces there is some react native library 
that is become not found especially in expo when you run yarn start there would be error because expo couldn't find the dependency
in the node_modules folder. And here is how I create the monorepos :
`)
ReactNative.addSubtitle("First set up yarn workspaces normaly as you do")
ReactNative.addParagraph(`
Create a directory for yarn workspace and modify package.json add the workspaces
`)