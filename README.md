# angularlogin
Example of Angular 1x Login Page and Product List, consuming JWT Authentication and REST APIs

### Technologies:

- AngularJs
- REST;

### Running this solution:

First download or clone the project in a local directory:

Run the command to install node modules:

```javascript
npm install http-server -g
```
Then, run the command to start server:

```javascript
http-server
```

The application will start with page:

```javascript
 http://127.0.0.1:8080
```

Important: the application is configured to work with REST API from the JWT WebAPI REST: https://github.com/AllanAbner/webapicore2jwt

```javascript
 http://localhost:6349/api/login
```
```javascript
 http://localhost:6349/api/product 
```

When application starts, go to http://localhost:4200/signin

Validation when trying login with invalid user/password:

![Alt text](Images/AuthFail.png "Login Failed")

Use login Admin and password teste123