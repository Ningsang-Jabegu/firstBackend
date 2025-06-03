require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubData = {
  "login": "Ningsang-Jabegu",
  "id": 86409265,
  "node_id": "MDQ6VXNlcjg2NDA5MjY1",
  "avatar_url": "https://avatars.githubusercontent.com/u/86409265?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Ningsang-Jabegu",
  "html_url": "https://github.com/Ningsang-Jabegu",
  "followers_url": "https://api.github.com/users/Ningsang-Jabegu/followers",
  "following_url": "https://api.github.com/users/Ningsang-Jabegu/following{/other_user}",
  "gists_url": "https://api.github.com/users/Ningsang-Jabegu/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Ningsang-Jabegu/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Ningsang-Jabegu/subscriptions",
  "organizations_url": "https://api.github.com/users/Ningsang-Jabegu/orgs",
  "repos_url": "https://api.github.com/users/Ningsang-Jabegu/repos",
  "events_url": "https://api.github.com/users/Ningsang-Jabegu/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Ningsang-Jabegu/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Ningsang Jabegu",
  "company": "Kirat Yakthung Thegimhang Chobegu Sajumlung",
  "blog": "ningsangjabegu.com.np",
  "location": "Kathmandu, Nepal",
  "email": null,
  "hireable": null,
  "bio": "Ningsang Jabegu, Web Master\r\n\r\nDedicated to creating a commercial and genuine website to help businesses and organizations grow towards their excelle",
  "twitter_username": "JabeguNingsang",
  "public_repos": 93,
  "public_gists": 1,
  "followers": 6,
  "following": 5,
  "created_at": "2021-06-24T10:18:52Z",
  "updated_at": "2025-05-29T09:53:15Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('ningsangjabegu')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login at Ningsang Foundation</h1>')
})
app.get('/youtube',(req, res)=>{
    res.send('<h2>Youtube : Ningsang Jabegu</h2>')
})

app.get('/github',(req,res) => {
    res.json(githubData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
