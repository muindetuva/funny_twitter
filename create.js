// Create Page
// GEt data from the form when it's submitted
const form = document.querySelector("form");

const textarea = document.querySelector("textarea");

console.log(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("Form submitted");

  postData = textarea.value;

  // Convert the data to JSON

  postObject = { body: postData };

  console.log(postObject);

  postJson = JSON.stringify(postObject);

  // Make api request for creating a new post
  createPost(postJson);
});

async function createPost(postData) {
  const response = await fetch("http://localhost:3000/posts", {
    method: "POST",
    body: postData,
    headers: {
      "Content-type": "application/json",
    },
  });

  console.log(response);
}
