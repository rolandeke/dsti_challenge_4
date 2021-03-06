# DSTI Coding Challenge

If you’re reading this, then you’ve applied for a position at The Directorate of Science Technology & Innovation.

You have received this directory within the .zip archive.

**Instructions**

1. Create a repo out of this directory with this README.md in the root
2. Work on the task as specified in TASK.md
3. Follow the best practices when saving changes to the repo
4. Follow the best practices when creating your solution
5. Upload the solution to your personal Github account and add two collaborators
6. `zewolfe` username - George Gelaga-King, Software Developer
7. `Bayoh` username - Ibrahim Bayoh, Software Developer

# DSTI CODING TASK COMPLETED

**A web application that collects water station and visualises them on a map (Sierra Leone)**

# Technologies Used 

- Nodejs
- Express JS
- MongoDB
- Leaflet JS

# PREQUISITES
- Make sure Node JS is installed on your computer
- You must have a MongoDB local or cloud server 
  
# HOW TO INSTALL 
1. Clone the repository to your computer
   `git clone https://github.com/rolandeke/dsti_challenge_4.git`

2. Move into the project directory 
   `cd [folder name]/`
3. Install all necessary modules by running 
   `npm install`
4. After install all modules create an environment variable file in the root of the directory by running the following command
   
   - Linux and MAC OS users
   `touch .env`
   - Windows users
    `echo "" > .env`
5. Open project with the text editor of your choice, if you're using VS Code just run this command in your terminal 
   `code .` it opens the current directory in VS Code 

6. After opening project with your editor of your choice, open the .env file you created and add the following environment variables 
   ```
    MONGODB_URL_DEV=mongodb://localhost/water_stations

    NODE_ENV=development
   ```
   - If you're using a remote MongoDB server add this line to your `.env` file
    `MONGODB_URL=[remote server url goes here]`
7. After adding environment variables in the `.env` file save and open VS Code integrated terminal or use the shortcut `ctrl + ~`
8. Start the application with 
   `npm start`
9. Open your web browser and type `localhost:3002` in the url address bar

# Contributors
1. [zewolf](https://www.github.com/zewolfe)
2. [Bayoh](https://www.github.com/bayoh)