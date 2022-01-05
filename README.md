<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
[![GitHub][github-shield]][github-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">

<h3 align="center">Tech Post</h3>

  <p align="center">
    A simple social media outlet for web developers
    <br />
    <a href="https://github.com/spurgason/tech-blog"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/spurgason/tech-blog">View Demo</a>
    ·
    <a href="https://github.com/spurgason/tech-blog/issues">Report Bug</a>
    ·
    <a href="https://github.com/spurgason/tech-blog/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Tech POST][product-screenshot]](https://tech-post-spurgason.herokuapp.com/)

Tech POST is a fullstack application that uses industry practices such as Model-View-Controller (MVC), Object-Relational Mapping (ORM), RESTful apis, and many more. Combined with technologies from the basics of HTML to the use of databases, complex javascript that allows it to function, as well as npm packages that refine my code I have created a blog style application called Tech Post. Users can create accounts, make posts, leave comments on a post, link articles in their post, as well as delete or update existing posts

### Live Application

[Tech POST](https://tech-post-spurgason.herokuapp.com/)


<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com/)
* [Heroku](https://www.heroku.com)
* [MySQL](https://www.mysql.com/)
* [Sequelize](https://sequelize.org/)
* [Handlebars](https://handlebarsjs.com/)


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

Once the repo has been cloned to your local machine you will need to put your MySQL credentials into the [connection.js](config/connection.js) file, or create your own `.env` file.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/spurgason/tech-blog.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Login to SQL and run
   ```sql
   SOURCE db/schema.sql
   ```
4. Back in the command line run 
   ```sh
   npm run seeds
   ```
5. After database has been seeded run
   ```sh
   npm start
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Once the server is started and the user can visit [localhost:3001](http://localhost:3001/). They will see three main things, TechPOST (which will take you to the homepage wherever you are on the application), a login button, and posts. The post are seeded into the application using lorem lipsum text for the titles and comments, and the body text will say 'Here is some body text', and all urls will take you to a website but most come to a 404, unless the user puts in a valid url when they create a post. First, the user must login, they can sign-up or log back in if they have already made an account. Once logged in the user will have two new options in the navigation bar. They can either click 'dashboard' which will take them to a page where they can create a new post, view previous post (which they can select edit on to either update or delete), also the user will have an option to add a URL to an article if they wish  or they can select 'logout' which will simply log them out. If they do not wish to make a post they can visit other users post by either clicking on the title or comments. Here the user can see all the comments for this post and they can leave one of their own. If the user wishes to return to the homepage they can click on 'Tech POST' to take them back to the home page.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Email: [shanepurgason.98@gmail.com](shanepurgason.98@gmail.com)

Project Link: [https://github.com/spurgason/tech-blog](https://github.com/spurgason/tech-blog)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/spurgason/tech-blog.svg?style=for-the-badge
[contributors-url]: https://github.com/spurgason/tech-blog/graphs/contributors

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/shane-purgason-0b3a96199

[github-shield]: https://img.shields.io/badge/-GitHub-black.svg?style=for-the-badge&logo=github&colorB=555
[github-url]: https://github.com/spurgason

[product-screenshot]: public/images/tech-post-example.png
