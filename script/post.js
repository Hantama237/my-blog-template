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
        return "<a class='link' href=https://"+source+">"+text+"</a>"
    }
    createImg(source,height,width){
        return "<img class='postimg' src="+source+" height="+(height?height:'auto')+" width="+(width?width:400)+">"
        //return "<img src='"+source+"' height='"+height?height:auto+"' width='"+width?width:400+"' >"
    }
    createCodeSection(text){
        return ("<pre><code>"+text+"</code></pre>")
    }
}


//export default Post;