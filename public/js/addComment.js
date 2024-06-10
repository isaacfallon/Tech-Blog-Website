async function addCommentHandler(event) {
    event.preventDefault();

    const post_id = window.location.pathname.split('/')[2];

    const commentContent = document.querySelector('#commentContent').value.trim();

    const currentDate = new Date();
    const creationDate = `${new Date(currentDate).getDate()}/${new Date(currentDate).getMonth() + 1}/${new Date(currentDate).getFullYear()}`;

    if (commentContent) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                post_id,
                commentContent,
                creationDate
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        document.location.reload();

    }
}

document.querySelector('#addComment').addEventListener('click', addCommentHandler);