function newCommentHandler(event){
    event.preventDefault()
    const title = document.querySelector('#comment-title').value.trim();
    const blog = document.querySelector('#comment-blog').value.trim();
    console.log(title,blog)
}
document.querySelector(".comment-form").addEventListener("submit",newCommentHandler)
console.log("ok")

{/* <input type="hidden" name="post-id"> */}
