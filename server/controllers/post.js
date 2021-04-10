const models = require('../models');

module.exports = {
  getAllPosts(req, res) {
    models.post.getAllPosts((result) => {
      if (result.length !== 0) {
        res.status(200).send(result);
      } else {
        res.status(404).send('Not Found');
      }
    });
  },
  getUserPost(req, res) {
    models.post.getUserPost(req.query.id, (result) => {
      if (result.length !== 0) {
        res.status(200).send(result);
      } else {
        res.status(404).send('Not Found');
      }
    });
  },
  getUserReportedPosts(req, res) {
    models.post.getUserReportedPost(req.params.id, (result) => {
      if (result.length !== 0) {
        res.status(200).send(result);
      } else {
        res.status(404).send('Not Found');
      }
    });
  },
  getAllReportedPosts(req, res) {
    models.post.getAllReportedPosts((result) => {
      if (result.length !== 0) {
        res.status(200).send(result);
      } else {
        res.status(404).send('Not Found');
      }
    });
  },
  getUserPostStats(req, res) {
    models.post.getPostStats(req.params.postId, (result) => {
      if (result.length !== 0) {
        res.status(200).send(result);
      } else {
        res.status(404).send('Not Found');
      }
    });
  },
  getUserPostComments(req, res) {
    models.post.getPostComments(req.params.postId, (result) => {
      if (result.length !== 0) {
        res.status(200).send(result);
      } else {
        res.status(404).send('Not Found');
      }
    });
  },
  getUserPostReactions(req, res) {
    models.post.getPostReactions(req.query.id, (result) => {
      if (result.length !== 0) {
        res.status(200).send(result);
      } else {
        res.status(404).send('Not Found');
      }
    });
  },
  postUserPost(req, res) {//Phil
    models.post.postUserPost(req.params.id, req.body, (error)=>{
      if(error) {
        res.status(400).send('Error Writing Post');
      } else {
        res.status(200).send('Post Success')
      }
    });
  },
  postUserComment(req, res) {//Phil
    //
    models.post.postUserComment(req.params.id, req.params.postId, req.body.comment, (error) => {
      if (error) {
        res.status(400).send('Error Writing Comment');
      } else {
        res.status(200).send('Post Success');
      }
    });
  },
  putReportPost(req, res){
    models.post.putReportPost(req.params.id, (err)=>{
      if(err){
        res.status(400).send('Error Reporting Comment');
      } else {
        res.status(200).send('Post Reported');
      }
    });
  }
};
