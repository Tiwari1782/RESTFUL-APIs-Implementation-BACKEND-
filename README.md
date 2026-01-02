## REST API - Representational State Transfer
->REST is an architectural style that defines a set of constraints to be used for creating web services.
->They follow CRUD operations.
*CRUD - Create Read Update Delete* -> to handle these operations we have API endpoints.

# GET - retrieves resources
# POST - submits new data to the server
# PUT - updating existing data
# GET - updating existing data partially
# GET - removes data

# Creating RESTful APIs

*GET* - /posts    to get the data for all posts
*POST* - /posts    to add a new post
*GET* - /posts/:id    to get one post (using id)
*PATCH/PUT* - /posts/:id    to update specific post
*DELETE* - /posts/:id    to delete specific post

# REDIRECT
res.redirect(URL); - uses the direct connection of two pages with one function produces a code *302 FOUND*

# Implement : GET/posts/:id
GET - /posts/:id - to get one post(using ID)

# Create id for posts
UUID Package
Universally Unique Identifier
npm i uuid

# Implement : PATCH /posts/:id
Update Route
PATCH  /posts/:id   - to update specific post

# Create Form for Update

Serve the edit form  GET /posts/:id/edit

# Implement : /posts/:id
Destroy Route
DELETE /posts/:id - to delete specific post