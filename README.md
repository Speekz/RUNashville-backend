# RUNasville-backend

Separeted Backed for the RUNashville Project

Here are the GET endpoints:
/api/user/:id/type Get the user Type by id
/api/user/:id Get the user details by id
/api/friends/:uid Get the friends of the user by id
/api/users/banned Get all the banned users
/api/users Get all the users
Special Routes:
PUT: /api/user Pass an object to the body with this format
/*
      {
        update: 'banned',
        value: true
        userId: id,
      }
*/
Where the update property of the object is the field in the database you want to update:
Update banned status: banned
Update name: name
Update Profile Picture: profile_picture
Update Profile Banner: profile_banner
Update last name: last_name
Update Address: address_user
The Id is the user Id to update
The value is the value to be inserted in the database
ADMIN
PUT: /api/users/ban Update the ban status of many users by passing an object to the body
/*
      userId: [id1,id2,id3],
      value: true
*/
Where the userId is an array of userIds to update with the value true or false ( to ban or unban when needed)

user post routes
GET:
/api/post Get all the post of a certain user using id as a query parameter, example url.com?id=THE-ID
/api/post/:id/reported Get all the post of the user that are reported
/api/:postId/stats Get all the stats for a certain post
/api/:postId/comments Get all the comments for a certain post
/api/post/reported Get all the reported posts in the platform


event routes
GET:
/api/events Get all the events
/api/events/promoted Get all the promoted events
/api/events/hidden Get all the events where show_event is false
/api/events/:id Get all the events created by an specific user
