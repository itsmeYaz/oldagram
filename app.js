const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "./images/avatar-vangogh.jpg",
    post: "./images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "./images/avatar-courbet.jpg",
    post: "./images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "./images/avatar-ducreux.jpg",
    post: "./images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const nameEl = document.querySelector("#name");
const usernameEl = document.querySelector("#username");
const locationEl = document.querySelector("#location");
const avatarEl = document.querySelector("#avatar");
const postEl = document.querySelector("#post");
const commentEl = document.querySelector("#comment");
const likesEl = document.querySelector("#likes");

const postContainerEl = document.querySelector("#post-container");

function renderPost(index) {
  const post = posts[index];

  // Update the content of the elements
  nameEl.textContent = post.name;
  usernameEl.textContent = post.username;
  locationEl.textContent = post.location;
  avatarEl.src = post.avatar;
  postEl.src = post.post;
  commentEl.textContent = post.comment;
  likesEl.textContent = `${post.likes} likes`;
}

renderPost(2);
