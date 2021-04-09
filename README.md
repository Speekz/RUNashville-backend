# RUNasville-backend

Separeted Backed for the RUNashville Project <br />

Here are the GET endpoints: <br />
/api/user/:id/type Get the user Type by id <br />
/api/user/:id Get the user details by id <br />
/api/friends/:uid Get the friends of the user by id <br />
/api/users/banned Get all the banned users <br />
/api/users Get all the users <br />
Special Routes: <br />
PUT: /api/user Pass an object to the body with this format <br />
/* <br />
      { <br />
        update: 'banned', <br />
        value: true <br />
        userId: id, <br />
      } <br />
*/ <br />
Where the update property of the object is the field in the database you want to update: <br />
Update banned status: banned <br />
Update name: name <br />
Update Profile Picture: profile_picture <br />
Update Profile Banner: profile_banner <br />
Update last name: last_name <br />
Update Address: address_user <br />
The Id is the user Id to update <br />
The value is the value to be inserted in the database <br />
ADMIN <br />
PUT: /api/users/ban Update the ban status of many users by passing an object to the body <br />
/* <br />
      userId: [id1,id2,id3], <br />
      value: true <br />
*/ <br />
Where the userId is an array of userIds to update with the value true or false ( to ban or unban when needed) <br />

user post routes <br />
GET: <br />
/api/post Get all the post of a certain user using id as a query parameter, example url.com?id=THE-ID <br />
/api/post/:id/reported Get all the post of the user that are reported <br />
/api/:postId/stats Get all the stats for a certain post <br />
/api/:postId/comments Get all the comments for a certain post <br />
/api/post/reported Get all the reported posts in the platform <br />


event routes <br />
GET: <br />
/api/events Get all the events <br />
/api/events/promoted Get all the promoted events <br />
/api/events/hidden Get all the events where show_event is false <br />
/api/events/:id Get all the events created by an specific user <br />
