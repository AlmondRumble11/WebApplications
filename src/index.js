import "./styles.css";

//check if loading
if (document.readyState !== "loading") {
  ButtonFunctions();
} else {
  document.addEventListener("DOMContainerloaded", function () {
    ButtonFunctions();
  });
}

//new comment function
function ButtonFunctions() {
  //getting the add-comment button
  const addCommentButton = document.getElementById("add-comment");

  //add commenets button event listener
  addCommentButton.addEventListener("click", function () {
    //getting the comment text area
    const commentText = document.getElementById("comment-text");

    const commentList = document.getElementById("comment-list");

    //creating new list item
    let newListItem = document.createElement("li");

    //adding comment to new list item value
    newListItem.innerHTML = commentText.value;

    //clearing the comment area
    commentText.value = "";

    //adding new list item to the comment list
    commentList.appendChild(newListItem);
  });

  //getting the remove-comments button
  const removeCommentsButton = document.getElementById("remove-comments");

  //remove comments button event listener
  removeCommentsButton.addEventListener("click", function () {
    //getting comment list
    const commentList = document.getElementById("comment-list");

    //number of comments
    const commentListLenght = commentList.getElementsByTagName("LI").length;

    //ask confirmation
    var action = window.confirm("Really want to remove all comments");
    if (action === true) {
      //go through the comments and delete them all
      for (var i = 0; i < commentListLenght; i++) {
        commentList.removeChild(commentList.lastChild);
      }
    }
  });
}
