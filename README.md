1. Head to the project directory and install the required dependencies by using 'npm i' or 'npm install'

2. Run the app.js by using node or nodemon, which is located in the 'src' folder (node app.js)

3. It should now be running on port 3000. Go to localhost:3000 or 127.0.0.1:3000.

Remember this application uses mongodb://127.0.0.1:27017/uni database that has 2 collections: courses and students.
if you want to use a different name for the database (other than 'uni') or you use a different port, you need to change the url on line 4 in uni.js (located at src/db).

Also, if you want to use different collection names you need to change the lines 38-39 in the uni.js file. 