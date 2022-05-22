const newFormHandler = async (event) => {
  event.preventDefault();

  const post_id = document.querySelector('input[name="post_id"]').value.trim();
  const title = document.querySelector('#post-desc').value.trim();

  const response = await fetch(`/api/post`, {
    method: 'POST',
    body: JSON.stringify({ post_id, title }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    location.reload();
  } else {
    alert('Failed to create post');
  }
};

// update post
const editButtonHandler = async (event) => {
  event.preventDefault();
  const id = document.querySelector('input[name="post_id"]').value.trim();
  const title = document.querySelector('#edit-title').value.trim();
  const description = document.querySelector('#edit-desc').value.trim();

  const response = await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ title, description }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    document.location.replace(`/post/${id}`);
  } else {
    alert('Failed to update post');
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-action')) {
    const id = event.target.getAttribute('data-action');

    const response = await fetch(`/api/comments/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace(`/post/${post.id}`);
    } else {
      alert('Failed to delete post');
    }
  }
};

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.delete-post-form')
  .addEventListener('click', delButtonHandler);

document
  .querySelector('.edit-post-form')
  .addEventListener('submit', editButtonHandler);
