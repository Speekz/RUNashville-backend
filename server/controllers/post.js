const models = require('../models');

module.exports = {
  getUserPost(req, res) {
    models.post.getUserPost(req.query.id, (result) => {
      if (result.length !== 0) {
        res.status(200).send(result);
      } else {
        res.status(204).send('Not Found');
      }
    });
  },
  getUserReportedPosts(req, res) {
    models.post.getUserReportedPost(req.params.id, (result) => {
      if (result.length !== 0) {
        res.status(200).send(result);
      } else {
        res.status(204).send('Not Found');
      }
    });
  },
  getAllReportedPosts(req, res) {
    models.post.getAllReportedPosts((result) => {
      if (result.length !== 0) {
        res.status(200).send(result);
      } else {
        res.status(204).send('Not Found');
      }
    });
  },
  getUserPostStats(req, res) {
    models.post.getPostStats(req.params.postId, (result) => {
      if (result.length !== 0) {
        res.status(200).send(result);
      } else {
        res.status(204).send('Not Found');
      }
    });
  },
  getUserPostComments(req, res) {
    models.post.getPostComments(req.params.postId, (result) => {
      if (result.length !== 0) {
        res.status(200).send(result);
      } else {
        res.status(204).send('Not Found');
      }
    });
  },
  getUserPostReactions(req, res) {
    models.post.getPostReactions(req.query.id, (result) => {
      if (result.length !== 0) {
        res.status(200).send(result);
      } else {
        res.status(204).send('Not Found');
      }
    });
  },
  postUserPost(req, res) {
    const { id, image_url, message_post, location_post } = req.body;
    const data = [ id, image_url, message_post, location_post ];
    models.post.postUserPost(data, (error)=>{
      if(error) {
        res.status(204).send('Error Writing Post');
      } else {
        res.status(200).send('Post Success')
      }
    });
  },
  postUserComment(req, res) {
    const { id, postId, comment } = req.body;
    const data = [ id, postId, comment ];
    models.post.postUserComment(data, (error) => {
      if (error) {
        res.status(204).send('Error Writing Comment');
      } else {
        res.status(200).send('Post Success');
      }
    });
  },
  putReportPost(req, res) {
    const { id } = req.params;
    models.post.putReportPost(id, (err)=>{
      if(err){
        res.status(204).send('Error Reporting Comment');
      } else {
        res.status(200).send('Post Reported');
      }
    });
  },
  postUserPostLikes(req, res) {
    const { postId, userId, reactionId } = req.body;
    const data = [ postId, userId, reactionId ]
    models.post.postUserPostLikes(data, (err)=>{
      if(err){
        res.status(204).send('Error liking Post');
      } else {
        res.status(200).send('Post Reported');
      }
    });
  },
  getUserPostLikes(req, res) {
    const { postId } = req.params;
    models.post.getUserPostLikes(postId, (result)=>{
        res.status(200).send(result);
    });
  }
};
