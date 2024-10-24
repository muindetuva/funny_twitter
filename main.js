// When the HTML Page loads
// Fetch some posts from the Api
// Display the posts

async function fetchPosts() {
  const response = await fetch("http://localhost:3000/posts");

  const postsArray = await response.json();

  postsArray.forEach(createAndInsertToDOM);
}

document.addEventListener("DOMContentLoaded", () => {
  fetchPosts();
});

const postArea = document.querySelector(".post-area");

function createAndInsertToDOM(post) {
  // Create the Dom Elements
  const postCard = document.createElement("div");
  postCard.classList.add("post-card");

  // Insert the post data to the dom
  postCard.innerText = post.body;

  // Insert the dom element to the page
  postArea.appendChild(postCard);
}
