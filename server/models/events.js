const db = require('../../db');

module.exports = {
  getAllEvents(callback) {
    const queryString = 'SELECT e.id, e.event_title, et.name_event_type, e.official, dl.name_difficulty_level, e.fk_leader_user_id, u.name_user, e.description_events, e.start_time, e.end_time, e.start_location, e.end_location, e.image_url, e.thumbnail_photo, e.running_distance, e.link, e.map_url, e.attendees, e.promoted, e.created_at FROM events AS e LEFT JOIN event_type AS et ON e.fk_event_type_id = et.id LEFT JOIN difficulty_level AS dl ON e.fk_difficulty_level_id = dl.id LEFT JOIN user AS u ON e.fk_leader_user_id = u.id WHERE e.hide_event = false';
    db.connection.query(queryString, (err, result) => {
      if (err) {
        console.log(err);
      }
      callback(result);
    });
  },
  getAllPromotedEvents(callback) {
    const queryString = 'SELECT e.id, e.event_title, et.name_event_type, e.official, dl.name_difficulty_level, e.fk_leader_user_id,, u.name_user, e.description_events, e.start_time, e.end_time, e.start_location, e.end_location, e.image_url, e.thumbnail_photo, e.running_distance, e.link, e.map_url, e.attendees, e.promoted, e.created_at FROM events AS e LEFT JOIN event_type AS et ON e.fk_event_type_id = et.id LEFT JOIN difficulty_level AS dl ON e.fk_difficulty_level_id = dl.id LEFT JOIN user AS u ON e.fk_leader_user_id = u.id WHERE e.hide_event = false && e.promoted = true';
    db.connection.query(queryString, (err, result) => {
      if (err) {
        console.log(err);
      }
      callback(result);
    });
  },
  getAllReportedEvents(callback) {
    const queryString = 'SELECT e.id, e.event_title, et.name_event_type, e.official, dl.name_difficulty_level, e.fk_leader_user_id, u.name_user, e.description_events, e.start_time, e.end_time, e.start_location, e.end_location, e.image_url, e.thumbnail_photo, e.running_distance, e.link, e.map_url, e.attendees, e.promoted, e.created_at, e.reported FROM events AS e LEFT JOIN event_type AS et ON e.fk_event_type_id = et.id LEFT JOIN difficulty_level AS dl ON e.fk_difficulty_level_id = dl.id LEFT JOIN user AS u ON e.fk_leader_user_id = u.id WHERE e.reported = true';
    db.connection.query(queryString, (err, result) => {
      if (err) {
        console.log(err);
      }
      callback(result);
    });
  },
  getHiddenEvents(callback) {
    const queryString = 'SELECT e.id, e.event_title, et.name_event_type, e.official, dl.name_difficulty_level, e.fk_leader_user_id, u.name_user, e.description_events, e.start_time, e.end_time, e.start_location, e.end_location, e.image_url, e.thumbnail_photo, e.running_distance, e.link, e.map_url, e.attendees, e.promoted, e.created_at FROM events AS e LEFT JOIN event_type AS et ON e.fk_event_type_id = et.id LEFT JOIN difficulty_level AS dl ON e.fk_difficulty_level_id = dl.id LEFT JOIN user AS u ON e.fk_leader_user_id = u.id WHERE e.hide_event = true';
    db.connection.query(queryString, (err, result) => {
      if (err) {
        console.log(err);
      }
      callback(result);
    });
  },
  getEventsCreatedByUser(id, callback) {
    const queryString = 'SELECT e.id, e.event_title, et.name_event_type, e.official, dl.name_difficulty_level, e.fk_leader_user_id, u.name_user, e.description_events, e.start_time, e.end_time, e.start_location, e.end_location, e.image_url, e.thumbnail_photo, e.running_distance, e.link, e.map_url, e.attendees, e.promoted, e.created_at FROM events AS e LEFT JOIN event_type AS et ON e.fk_event_type_id = et.id LEFT JOIN difficulty_level AS dl ON e.fk_difficulty_level_id = dl.id LEFT JOIN user AS u ON e.fk_leader_user_id = u.id WHERE e.hide_event = false && u.id = ?';
    db.connection.query(queryString, [id], (err, result) => {
      if (err) {
        console.log(err);
      }
      callback(result);
    });
  },
  postNewEvent(data, callback) {
    const queryString = 'INSERT INTO events (event_title, description_events, fk_event_type_id, fk_difficulty_level_id, fk_leader_user_id, start_time, end_time, start_location, end_location, image_url, thumbnail_photo, running_distance, link, map_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.connection.query(queryString, data, (err, result) => {
      if (err) {
        callback(err, null);
      }
      callback(null, result);
    });
  },
};
