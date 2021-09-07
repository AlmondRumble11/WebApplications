import "./styles.css";

if (document.readyState !== "loading") {
  addNewComment();
} else {
  document.addEventListener("DOMContainerloaded", function () {
    addNewComment();
  });
}
function addNewComment() {
  const addCommentButton = document.getElementById("add-comment");

  addCommentButton.addEventListener("click", function () {
    const commentText = "new comment";

    const commentList = document.getElementById("comment-list");
    let newListItem = document.createElement("li");
    newListItem.innerHTML = commentText;
    commentList.appendChild(newListItem);
  });
}
