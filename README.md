# Kryzen-biotech
It is a pdf generating application. It takes data from users and generates a pdf
Frontend Deployed Link - https://kryzen-biotech-frontend.vercel.app/

Backend Deployed Link - https://graceful-bull-pullover.cyclic.app/
**All Routes**

- `POST /user/register` route - To register a new user's Details.
- `POST /user/login` route - To login a already existed user.
- `POST /userData/upload` route - To add user details to create a pdf.

**Packages installed**

1. `express` - Used for making the server easier and more robust.
2. `nodemon` - Used to automatically restart the application after changes happen in the file.
3. `cors` - CORS allows servers to specify who can access their resources and under what conditions.
4. `mongoose` - To connect MongoDB database with the server.
5. `dotenv` - To secure MongoDB sensitive information.
6. `pdf-lib` - To generate a pdf.
7. `file-saver` - To download the pdf.
8. `jsonwebtoken` - To generate a token.
9. `bcrypt` - To hash the password provided by the user.

Steps to use webpage.
   1. Begin by registering yourself
   2. Use your registered credentials to log in securely.
   3. After redirecting to user details page, add details user details.
   4. After that user will be redirected to a preview page.
   5. where a preview of the pdf will be shown.
   6. By clicking the download pdf button user will get the pdf in dowloaded form

