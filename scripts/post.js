//update the html and css properties of element on edit button clicked
function editPost(){
    var postTitle=document.getElementById('postTitle');
    var postBody=document.getElementById('postContent');
    var editButton=document.getElementById('edit');
    var saveButton=document.getElementById('save');
    
    editButton.style.display='none';
    saveButton.style.display='';
    postTitle.contentEditable ='true';
    postBody.contentEditable ='true';
    postTitle.style.border='1px solid pink';
    postBody.style.border='1px solid pink';
}
//To get the updated postlist and the id for which details needs to be displayed
var postListObj=localStorage["postList"];
if(postListObj !=null){
    var postList = JSON.parse(localStorage["postList"]);
    var id = JSON.parse(localStorage["postId"]);
}

var text = document.getElementById('postTitle');
var myData;
var postData = window.localStorage.getItem("save");
var reset = text.innerHTML;
// if no data
if (postData == null || postData == '') {
    myData = text.innerHTML;
    // store default value
    window.localStorage.setItem("save", myData);
} else {
    // if there is a value post it
    text.innerHTML = postData;
}
//Update the title and body based on new edited values
function savePost() {
    // store the current value
    myData = text.innerHTML;
    // local store the value
    window.localStorage.setItem("save", myData);
    
    var postTitle=document.getElementById('postTitle');
    var postBody=document.getElementById('postContent');
    var editButton=document.getElementById('edit');
    var saveButton=document.getElementById('save');
    editButton.style.display='';
    saveButton.style.display='none';
    postTitle.contentEditable ='false';
    postBody.contentEditable ='false';
    postTitle.style.border='';
    postBody.style.border='';
}

var likeCount=0;
//Update the like count and display updated value
function clickLike(){
   
    document.getElementById("likeBlog").innerHTML='<i class="fa fa-thumbs-o-up"> </i> Liked';
    likeCount++;
    document.getElementById("likeCount").innerHTML=likeCount+" person like this!"
    
}
//Updating comments entered by user
function addComments(id){
    var addEventName = id.value +'<br>';
    var comment = document.getElementById('userComments');
    document.getElementById('addEventNames').innerHTML = '<p class="commentList">'+addEventName+'</p>' + document.getElementById('addEventNames').innerHTML;          
    comment.value=comment.defaultValue;
    }
    
    
window.onload = function() {
    if(postList==null){
        document.getElementById('postTitle').innerHTML="Everything you should know about 'module' & 'require' in Node.js";
        document.getElementById('postAuthor').innerHTML="Srishti Gupta";
        document.getElementById('postContent').innerHTML="Node.js treats each JavaScript file as a separate module. For instance, if you have a file containing some code and this file is named xyz.js, then this file is treated as a module in Node, and you can say that you've created a module named xyz.";
    }
    else{
        document.getElementById('postTitle').innerHTML=postList[id-1].header;
        document.getElementById('postAuthor').innerHTML=postList[id-1].name;
        document.getElementById('postContent').innerHTML=postList[id-1].body;
     }
}