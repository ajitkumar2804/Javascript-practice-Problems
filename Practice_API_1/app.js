const btnApi = document.querySelector("#api");
const profileImg = document.querySelector("#avatar");
const repoList = document.querySelector("#repo");


btnApi.addEventListener("click", apiHandler)

function apiHandler(){
    const user = "ArjunGTX"
     fetch(`https://api.github.com/users/${user}`)
     .then(response => response.json())
     .then(data => {
         profileImg.src = data.avatar_url;

         fetch(data.repos_url)
         .then(repo => repo.json())
         .then(repoData => {
             repoData.forEach(element => {
                 let listItem = document.createElement('li');
                 listItem.innerText = element.name;
                 repoList.appendChild(listItem)
             });
         })
     })
}