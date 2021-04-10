const router = require('express').Router();
const controller = require('./controllers');

router.get('/postsAll', controller.post.getAllPosts);
router.post('/login', controller.login.post);
router.post('/signup', controller.signup.post);
router.get('/user/:id/type', controller.user.getType);
router.get('/user/:id', controller.user.getDetails);
router.get('/friends/:uid', controller.user.getFriends);
router.get('/users/banned', controller.user.getBannedUsers);
router.get('/users', controller.user.getAll);
router.get('/post/reported', controller.post.getAllReportedPosts);
router.put('/users/ban', controller.user.putUpdateBanManyUsers);
router.put('/user', controller.user.putUpdateUserInfo);
router.put('/post/report/:id', controller.post.putReportPost); //Phil
router.get('/post', controller.post.getUserPost);
router.get('/post/:id/reported', controller.post.getUserReportedPosts);
router.get('/post/:postId/stats', controller.post.getUserPostStats);
router.get('/post/:postId/comments', controller.post.getUserPostComments);
router.get('/events', controller.events.getAllEvents);
router.get('/events/promoted', controller.events.getAllPromotedEvents);
router.get('/events/reported', controller.events.getAllReportedEvents);
router.get('/events/hidden', controller.events.getHiddenEvents);
router.get('/events/:id', controller.events.getEventsCreatedByUser);
router.post('/events', controller.events.postNewEvent);
router.post('/post/:id/', controller.post.postUserPost); //Phil
router.post('/post/:id/:postId', controller.post.postUserComment); //Phil

module.exports = router;
