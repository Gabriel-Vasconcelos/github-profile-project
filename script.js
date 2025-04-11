document.addEventListener("DOMContentLoaded", () => {
  const inputSearch = document.querySelector("#search-user");

  searchUser(inputSearch.value);

  inputSearch.addEventListener("input", () => {
    searchUser(inputSearch.value)
  })
})

const updateCardGithub = (data) => {
  if (data) {
    document.querySelector("#profile-image").src = data.avatar_url;
    document.querySelector("#name").innerHTML = data.login;
    document.querySelector("#bio").innerHTML = data.bio;
    document.querySelector("#public-repos").innerHTML = data.public_repos;
    document.querySelector("#followers").innerHTML = data.followers;
    document.querySelector("#following").innerHTML = data.following;
    document.querySelector("#url-github").href = data.html_url;
  }
}

const searchUser = (username) => {
  if (username) {
    const url = "https://api.github.com/users/${username}"
    fetch(url)
      .then(res => res.json())
      .then(data => updateCardGithub(data))
  }
}