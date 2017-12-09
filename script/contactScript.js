var hardCodedComments = [{"Name":"testuser","Comment":"this is a comment"},{"Name":"lqskdjf","Comment":"kjqfmsldkjgqmlksfdg"},{"Name":"test","Comment":"tst"}];
var form;
var formholder;
var submitFormButton;

function submitForm(){
    var inputName = document.getElementById("Name");
    var inputNameValue = inputName.value;
    var inputComment = document.getElementById("Comment");
    var inputCommentValue = inputComment.value;
    if(inputNameValue != "" && inputCommentValue != ""){
        inputName.value = "";
        inputComment.value = "";
        var data = '{"Name":"'+inputNameValue+'", "Comment":"'+inputCommentValue+'"}';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {

                loadPreviousComments();
            }
        }
        xhttp.open("POST", "https://realgarbageapp.azurewebsites.net/api/eventlookupcomments/add", true);
        xhttp.send(data);
    } else{
        alert("Please enter your name and a comment.");
    }
}

function loadPreviousComments(){
    createLoader();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200) {
            var result = JSON.parse(xhttp.responseText);
            displayComments(result);
        }
    };
    xhttp.open("GET","https://realgarbageapp.azurewebsites.net/api/eventlookupcomments/get", true);
    xhttp.send();
}

function displayComments(comments){
    var holder = document.querySelector('.commentsWrapper');
    holder.innerHTML = "";
    comments = JSON.parse(comments);
    for(var i = comments.length-1; i>=0; i--){
        var currentComment = comments[i];
        var div = document.createElement('div');
        div.classList.add('comment');
        holder.append(div);

        var commentorName = document.createElement('h3');
        commentorName.classList.add('commentorName');
        commentorName.innerHTML = currentComment.Name;
        div.append(commentorName);

        var comment = document.createElement('p');
        comment.classList.add('commentText');
        comment.innerHTML = currentComment.Comment;
        div.append(comment);
    }
    try {
        removeLoader()
    }catch(ex){}
}

function createLoader() {
    var div = document.createElement('div');
    div.classList.add('loader');
    formholder.append(div);
    form.style.display = "none";
}

function removeLoader(){
    var loader = document.querySelector('.loader');
    formholder.removeChild(loader);
    form.style.display = "inline-block";
}

document.addEventListener('DOMContentLoaded',function(){
    form = document.querySelector('.form');
    formholder = document.querySelector('.contactForm');
    submitFormButton = document.querySelector('.submitButton');
    loadPreviousComments();
    submitFormButton.addEventListener("click", submitForm);
});