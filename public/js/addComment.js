// JS file to handle the logic for adding a comment

async function addCommentHandler(event) {
    event.preventDefault();

    const post_id = window.location.pathname.split('/')[2];

    const commentContent = document.querySelector('#commentContent').value.trim();

    if (commentContent) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ post_id, commentContent }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        document.location.reload();

    }
}

document.querySelector('#addComment').addEventListener('click', addCommentHandler);