class GitHubUser {
  constructor(userName) {
    this.userName = userName; //val=DzoroV
  }
  printDetails() {
    console.log(this.userName);
  }

  async getUserDetails() {
    try {
      let res = await fetch(`https://api.github.com/users/${this.userName}`);
      let json = await res.json();
      console.log(json);

      this.createUserCard(
        json.name,
        json.avatar_url,
        json.bio,
        json.followers,
        json.following,
        json.public_repos,
        json.twitter_username,
        json.location
      );
    } catch (Error) {
      return null;
    }
  }

  createUserCard(
    name,
    avatar,
    bio,
    followers,
    following,
    repoCount,
    twitterUserName,
    Location
  ) {
    let div = document.createElement("div");
    let test = document.getElementById("card-body");
    test.innerHTML = ` <div class="card-container">
    <img class="user-photo" src="${avatar}" alt="${name}" />
    <div class="user-details">
      <h3>${name}</h3>
      <p>${bio}</p>
      <p>Followers : ${followers}</p>
      <p>Following : ${following}</p>
      <p>Repos : ${repoCount}</p>
      <p>Location : ${Location}</p>
      <p>TwitterName : ${twitterUserName}</p>
    </div>
  </div>`;
  }
}

//Prints the input from user on console.
function getVal() {
  const val = document.getElementById("search").value;
  console.log(val);
  // let p = new GitHubUser(`https://api.github.com/users/${val}`);
  let p = new GitHubUser(val); //Dzoro
  // console.log(p);
  p.getUserDetails();

  // let response = fetch("p");
  // console.log(response);
}
