

const ReactNative=new Post();
ReactNative.setTitle("How To Create React Native Monorepos using yarn Workspaces")
ReactNative.setDescription(`This post is discussing about how I create React native monorepos using yarn workspaces, because I have found
that the first time I try to create it I got some error that maybe you have faced`)
ReactNative.addParagraph(`
Maybe you have experienced that when you create react native monorepos using yarn workspaces there is some react native library 
that is become not found especially in expo when you run yarn start there would be error because expo couldn't find the dependency
in the node_modules folder. The poin to make it work is by using nohoist feature of the yarn workspaces. And here is how I create the monorepos :
`+ReactNative.createCodeSection(
`asdasd;asdasd;
    if(a===3){aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        asd;
    }
`
))
ReactNative.addSubtitle("1. First set up yarn workspaces normaly as you do")
ReactNative.addParagraph(`
Create a directory for `+ReactNative.createLink("myapi","plumiertest123.herokuapp.com")+` yarn workspace and modify package.json add the workspaces
`+ReactNative.createImg('assets/img/post1.jpg'))

const Post2= new Post();
Post2.setTitle("List of best game that I have played")
Post2.setDescription("This post is discussing about best game that I've played, mostly I played Racing game,RPG, Action and MOBA. I played both online and offline game which is now I play online game at the most")


const postList=[ReactNative,Post2]
const categoryList=["NodeJS","Android Studio","Programming","Games"]
