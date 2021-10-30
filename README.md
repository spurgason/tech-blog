# Tech POST

## Description
Tech POST is my first fullstack application that uses industry practices such as Model-View-Controller (MVC), Object-Relational Mapping (ORM), RESTful apis, and many more. Combined with technologies I have learned from basics of HTML to the use of databases and the complex javascript that allows it to function along with the npm packages that refine my code I have created a blog style application called Tech Post. Users can create accounts, make posts, leave comments on a post, link articles in their post, as well as delete or update existing posts.   

## Installation
To install just clone the repository to your local machine. After the repository is cloned `npm init` (initialize) and `npm install` (install) the required packages. Next login to MySQL and run `SOURCE db/schema.sql` and quit MySQl. Back in the command line run `npm run seeds` to add the seeds to the database and finally start the server with `npm start`. Don't forget to put in your MySQl credentials into the [connection.js](config/connection.js) file, or create your own .env file to store your credentials. Lastly, you can go to [localhost:3001](http://localhost:3001/) to use the blog application. 

## Technologies Used
<ul>
  <li>Javascript</li>
  <li>CSS</li>
  <li>HTML</li>
  <li>Node.Js</li>
  <li>Express.Js</li>
  <li>Heroku</li>
  <li>NPM Modules
<ul>
  <li>Sequelize</li>
  <li>MySQL2</li>
  <li>dotenv</li>
  <li>bcrypt</li>
  <li>express-sessions</li>
  <li>connect-session-sequelize</li>
  <li>express-handlebars</li>
  </ul>
</ul>

## Usage
Once the server is started and the user is at [localhost:3001](http://localhost:3001/). They will see three main things, TechPOST (which will take you to the homepage wherever you are on the application), a login button, and posts. The post are seeded into the application using lorem lipsum text for the titles and comments, and the body text will say 'Here is some body text', and all urls will take you to a website but most come to a 404, unless the user puts in a valid url when they create a post. First, the user must login, they can sign-up oor log back in if they have already made an account. Once logged in the user will have two new options in the navigation bar. They can either click 'dashboard' which will take them to a page where they can create a new post, view previous post (which they can select edit on to either update or delete), also the user will have an option to add a URL to an article if they wish  or they can select 'logout' which will simply log them out. If they do not wish to make a post they can visit other users post by either clicking on the title or comments. Here the user can see all the comments for this post and they can leave one of their own. If the user wishes to return to the homepage they can click on 'Tech POST' to take them back to the home page.  

## Live Application
[Tech POST](https://tech-post-spurgason.herokuapp.com/)
## Credits
[Shane Purgason](https://github.com/spurgason)

## Questions
  [Github](https://github.com/spurgason) <br>
  [Email](mailto:shanepurgason.98@gmail.com)