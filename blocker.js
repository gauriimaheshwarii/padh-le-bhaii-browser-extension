const defineCSS = () => {
  return `<style>
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 100%;
    height: auto;
  }
  </style>`
}

const defineHTML = () => {
  return `<div class = "content">
  <img src = "https://media.makeameme.org/created/padh-le-bhai.jpg">
  </div>`
}

const forbiddenURLs = ["twitter.com", "web.whatsapp.com","instagram.com","netflix.com","youtube.com","pinterest.com","reddit.com","amazon.com","music.youtube.com","facebook.com"];
const set = new Set(forbiddenURLs);

if (set.has(window.location.hostname)) {
  document.head.innerHTML = defineCSS();
  document.body.innerHTML = defineHTML();
}
