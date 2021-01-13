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