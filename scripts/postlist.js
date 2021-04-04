//Current postlist array values
const postList = [
{
    name:"Srishti Gupta",
    header:"'let' me be a 'const'(ant), not a 'var'(iable)!",
    body:"Since JavaScript does not have any type-checking, either of these keywords can be used to declare a variable of any type (datatype) in JavaScript. Though all the three keywords are used for the same purpose, they are different."
},
{
    name:"Colby Fayock",
    header:"What is linting and how can it save you time?",
    body:"One of the biggest challenges in software development is time. It’s something we can’t easily get more of, but linting can help us make the most out of the time we have."
},
{
    name:"Yazeed Bzadough",
    header:"How to Get More Views on Your Tech Blog",
    body:"If you're a developer with a Twitter account, you've already seen everyone and their cat start a blog, YouTube channel, or Patreon. We all want to become stars, or at the very least, a recognizable name in the industry."
},
{
    name:"Cedd Burge",
    header:"How to write easily describable code",
    body:"When code is not describable using words, most people have to do some mental mapping to turn it in to words. This wastes mental energy, and you run the risk of getting the mapping wrong. Different people will map to different words, which leads to confusion when discussing the code."
},
{
    name:"Srishti Gupta",
    header:"Everything you should know about 'module' & 'require' in Node.js",
    body:"Node.js treats each JavaScript file as a separate module. For instance, if you have a file containing some code and this file is named xyz.js, then this file is treated as a module in Node, and you can say that you’ve created a module named xyz."
}
];

//Store postlist in local storage to pass it to next page post html to display details
localStorage["postList"] = JSON.stringify(postList);

var id=-1;
//After clicking on delete button this function will be called and post list array will be updated
function updateCard(){
    
    if(id!=-1){
            postList.splice(id-1, 1);
    var cardHtml='';
    var deleteModal="'deleteModal'";
    var block="'block'";
    for(var i=0;i<postList.length;i++){
        cardHtml+= '<div class="col-6 " ><div class="card"><div class="card-horizontal"><div class="img-square-wrapper" >'+postList[i].name+'</div><div class="card-body" ><span class="card-title">'+postList[i].header+'</span><a href="#"><i class="fa fa-trash-o" id="'+(i+1)+'"onclick="updateId(this.id);document.getElementById('+deleteModal+').style.display='+block+';"></i></a><p class="card-text">'+postList[i].body+'</p><br><a href="../html/post.html"><i class="fa fa-ellipsis-h" id="'+(i+1)+'" onclick="updatePostId(this.id)"></i></a></div></div></div></div>';
    }
    
    document.getElementById("cardData").innerHTML=cardHtml;
    id=-1;
    localStorage["postList"] = JSON.stringify(postList);
    }
    
}
//to identify the id of array element for deletion
function updateId(inputId){
    id=inputId;
}
//To pass the id of array element to post html page to display details of it
function updatePostId(postId){
    localStorage["postId"] = postId;
}

window.onload = function() {
    
    var cardHtml='';
    var deleteModal="'deleteModal'";
    var block="'block'";
    for(var i=0;i<postList.length;i++){
        cardHtml+= '<div class="col-6 " ><div class="card"><div class="card-horizontal"><div class="img-square-wrapper" >'+postList[i].name+'</div><div class="card-body" ><span class="card-title">'+postList[i].header+'</span><a href="#"><i class="fa fa-trash-o" id="'+(i+1)+'"onclick="updateId(this.id);document.getElementById('+deleteModal+').style.display='+block+';"></i></a><p class="card-text">'+postList[i].body+'</p><br><a href="../html/post.html"><i class="fa fa-ellipsis-h" id="'+(i+1)+'" onclick="updatePostId(this.id)"></i></a></div></div></div></div>';
    }
    
    document.getElementById("cardData").innerHTML=cardHtml;
    
}

