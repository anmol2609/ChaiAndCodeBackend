const express =require('express');
const app = express();
require('dotenv').config()
const   PORT =  process.env.PORT;
const gitHubData ={
  "login": "anmol2609",
  "id": 36831057,
  "node_id": "MDQ6VXNlcjM2ODMxMDU3",
  "avatar_url": "https://avatars.githubusercontent.com/u/36831057?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/anmol2609",
  "html_url": "https://github.com/anmol2609",
  "followers_url": "https://api.github.com/users/anmol2609/followers",
  "following_url": "https://api.github.com/users/anmol2609/following{/other_user}",
  "gists_url": "https://api.github.com/users/anmol2609/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/anmol2609/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/anmol2609/subscriptions",
  "organizations_url": "https://api.github.com/users/anmol2609/orgs",
  "repos_url": "https://api.github.com/users/anmol2609/repos",
  "events_url": "https://api.github.com/users/anmol2609/events{/privacy}",
  "received_events_url": "https://api.github.com/users/anmol2609/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 12,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2018-02-26T02:34:53Z",
  "updated_at": "2024-07-20T10:44:48Z"
}
app.use('/github',(req,res)=>{
    res.send(gitHubData);
    res.end()
})
app.use('/',(req,res)=>{
    res.send("hello");
    res.end()
})
app.listen(PORT,()=>{
    console.log("listening on port 4000")
})

//++++++++++++++++++++++++ without using express ++++++++++++++++++++++
// var http = require('http')
// http.createServer((req,res)=>{
//     res.write("hello");
//     res.end()
// }).listen(3000,()=>{
//     console.log("listening on port 3000")
// })