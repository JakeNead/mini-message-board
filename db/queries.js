const pool = require("./pool");

function formatDateToUTC(date) {
  return date.toISOString().slice(0, 19).replace("T", " ");
}

const getAllMessages = async function () {
  const { rows } = await pool.query("SELECT * FROM user_messages");
  return rows;
};

const newMessage = async function (username, message) {
  await pool.query(
    "INSERT INTO user_messages (username, message, added) VALUES($1,$2,$3)",
    [username, message, formatDateToUTC(new Date())]
  );
};

const messageDetail = async function (messageID) {
  const { rows } = await pool.query(
    "SELECT * FROM user_messages WHERE id = $1",
    [messageID]
  );
  return rows[0];
};

module.exports = {
  getAllMessages,
  newMessage,
  messageDetail,
};
