const container = document.querySelector(".container");

container.addEventListener("click", function(e){
    const isReply = e.target.classList.contains('reply'); 
    const isSubmit = e.target.classList.contains('btn-submit');

    if (isReply) {
        // create and render reply input ...
        createAndAppendReplyInput(e); 
    } else if (isSubmit) {
        // create and append comment
        createAndAppendComment(e);
    }
});

function createAndAppendReplyInput(e) {
    const targetElement = e.target;
    const fragment = document.createDocumentFragment();
    
    const commentContainer = targetElement.parentNode;

    // reply container creation
    const replyContainer = document.createElement("div");
    const input = document.createElement("input");
    const button = document.createElement("button");
    //

    replyContainer.setAttribute("class", "comment-reply-container");

    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Type reply...");

    button.setAttribute("class", "btn-submit");
    button.textContent = "Submit";

    replyContainer.appendChild(input);
    replyContainer.appendChild(button);

    fragment.appendChild(replyContainer);

    commentContainer.appendChild(fragment);

}

// button,input --> replyContainer -> fragment -> commentContainer

function createAndAppendComment(e) {
    const commentContainer = document.createElement("div");
    commentContainer.setAttribute("class", "comment-container");

    const inputNode = e.target.parentNode.children[0]; // 

    const commentReply = document.createElement('h3');
    const replyBtn = document.createElement('div');

    commentReply.setAttribute("class", "comment-text");
    replyBtn.setAttribute("class", "reply");
    replyBtn.innerText = "Reply";

    commentReply.innerText = inputNode.value;

    commentContainer.appendChild(commentReply);
    commentContainer.appendChild(replyBtn);
    // reply prepared
    

    const parentContainer = e.target.parentNode.parentNode;
    const replyContainer = e.target.parentNode;

    parentContainer.replaceChild(commentContainer, replyContainer);
}