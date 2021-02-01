### ChuckSum---Lorem-Ipsum-Generator

<br />
<p align="center">
  <a href="https://m90khan.github.io/ChuckSum---Lorem-Ipsum-Generator/">
    <img src="./img/favicon.png" alt="Logo" width="120" height="120">
  </a>

  <h3 align="center">ChuckSum---WebApp  </h3>

  <p align="center">
> A Lorem Ipsum Generator based on Chuck Norris Jokes
<br />
    <a href="m90khan@gmail.com"><strong>Contact Me</strong></a>
    <br />
    <br />
    <a href="https://m90khan.github.io/ChuckSum---Lorem-Ipsum-Generator/">View Demo</a>
    
   </p>
</p>

### About the Project

- A Lorem Ipsum Generator based on Chuck Norris Jokes

- A Lorem Ipsum Generator based on Chuck Norris Jokes Choose X number of paragraphs and based on input value, X jokes will be generated

Live: https://m90khan.github.io/ChuckSum---Lorem-Ipsum-Generator/

Duration: 6 hrs - 2 days split

![ChuckSum Overview GIF](https://github.com/m90khan/ChuckSum---Lorem-Ipsum-Generator/blob/master/img/chucksum.gif)

---

#### Process

- Setup environment for final css will be compiled
- Implementation of HTML structure
- Applied component based styling
- API data fetch
- Render Data

<img src="./img/overview.jpg">

---

### Skills

[<img align="left" alt="Visual Studio Code" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" />][youtube]
[<img align="left" alt="HTML5" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />][youtube]
[<img align="left" alt="CSS3" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />][youtube]
[<img align="left" alt="Sass" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png" />][youtube]
[<img align="left" alt="Git" width="26px" src="https://www.w3schools.com/whatis/img_js.png" />][youtube]
[<img align="left" alt="Git" width="26px" src="https://greensock.com/uploads/set_resources_4/84c1e40ea0e759e3f1505eb1788ddf3c_greensock-logo.svg" />][youtube]
[<img align="left" alt="Git" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />][youtube]
[<img align="left" alt="GitHub" width="26px" src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png" />][youtube]
[<img align="left" alt="Terminal" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png" />][youtube]
<br />
<br />

---

### Code Snippet

Api Fetch

```javascript
const chuckApi = `http://api.icndb.com/jokes/random/${searchValue}/?escape=javascript`;

async function chuckMe(url) {
  const chuckData = await fetch(url, {
    //method tell us what we want to do with the data
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  const data = await chuckData.json();
  generateJokes(data);
}
```

---

### Connect with me:

[<img align="left" alt="Khan | YouTube" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/youtube.svg" />][youtube]

[<img align="left" alt="twitter | Twitter" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/twitter.svg" />][twitter]
[<img align="left" alt="khanmohsinx | LinkedIn" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />][linkedin]
[<img align="left" alt="khanuxd | Instagram" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/instagram.svg" />][instagram]
[<img align="left" alt="khanuxd | Instagram" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/behance.svg" />][behance]
[<img align="left" alt="khanuxd | Instagram" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/dribbble.svg" />][dribble]
<br />

---

[youtube]: https://www.youtube.com/channel/UC96rVfdTKsjZpREnH6CaCOw
[twitter]: https://twitter.com/m90khan
[linkedin]: www.linkedin.com/in/uxdkhan
[instagram]: https://www.instagram.com/uxd.khan/
[behance]: https://www.behance.net/Khan_Mohsin
[dribble]: https://dribbble.com/uxdkhan
