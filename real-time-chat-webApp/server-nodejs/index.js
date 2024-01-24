const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

const CHAT_ENGINE_PROJECT_ID = "";  // Replace YOUR_CHATENGINE_PROJECT_ID and YOUR_CHATENGINE_API_KEY with the credentials you obtained from ChatEngine.io.
const CHAT_ENGINE_PRIVATE_KEY = "";

app.post("/signup", async (req, res) => {
  const { username, secret, email, first_name, last_name } = req.body;

  // Store a user-copy on Chat Engine!
  // Docs at rest.chatengine.io
  try {
    const r = await axios.post(
      "https://api.chatengine.io/users/",
      { username, secret, email, first_name, last_name },
      { headers: { "PRIVATE-KEY": CHAT_ENGINE_PRIVATE_KEY } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.post("/login", async (req, res) => {
  const { username, secret } = req.body;
  console.log("hitted login cred " + username + " and secret is " + secret);
  // Fetch this user from Chat Engine in this project!
  // Docs at rest.chatengine.io
  const data = {
    username: username,
    secret: secret,
  };
  try {
    const r = await axios.put("https://api.chatengine.io/users/",data ,{
      headers: {
        "PRIVATE-KEY": CHAT_ENGINE_PRIVATE_KEY,
      },
    });
    console.log(r.data);
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

// vvv On port 3001!
app.listen(3001);
