fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
})
.then((users) => {
  const tabsContainer = document.getElementById("tabs");
  const usernameContainer = document.getElementById("username");
  const postsContainer = document.getElementById("posts");

  // Create tabs for each user
  users.forEach((user, index) => {
    const tab = document.createElement("div");
    tab.classList.add("tab");
    tab.textContent = `User ${index + 1}`;
    tab.addEventListener("click", async () => {
      // Remove active class from all tabs
      document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
      // Add active class to the clicked tab
      tab.classList.add("active");
      // Display the username
      usernameContainer.textContent = `Username: ${user.username}`;
// Clear previous posts
postsContainer.innerHTML = "";

// Fetch and display posts for the selected user
try {
  const posts = await fetchPosts(user.id);
  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.textContent = post.title;
    postsContainer.appendChild(postElement);
  });
} catch (error) {
  console.error("Error fetching posts:", error);
  postsContainer.textContent = "Failed to load posts. Please try again later.";
}
});

// Activate the first tab by default
if (index === 0) {
tab.click(); // Simulate a click on the first tab
}

tabsContainer.appendChild(tab);
});
})
.catch((error) => {
  console.error("Error fetching users:", error);
  document.getElementById("content").textContent = "Failed to load users. Please try again later.";
});

// Function to fetch posts for a specific user
async function fetchPosts(userId) {
const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
if (!response.ok) {
  throw new Error("Network response was not ok");
}
return response.json();
}