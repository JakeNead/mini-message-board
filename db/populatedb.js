#! /usr/bin/env node

const { Client } = require("pg");

require("dotenv").config();

// Function to format the date to 'YYYY-MM-DD HH:MI:SS' in UTC
function formatDateToUTC(date) {
  return date.toISOString().slice(0, 19).replace("T", " ");
}

// Correctly formatted dates in UTC
const date1 = formatDateToUTC(new Date("2024-07-04T18:12:54Z"));
const date2 = formatDateToUTC(new Date("2024-08-07T17:12:54Z"));
const date3 = formatDateToUTC(new Date("2024-09-10T19:12:54Z"));

const SQL = `
CREATE TABLE IF NOT EXISTS user_messages (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
username VARCHAR(255),
message VARCHAR(500),
added TIMESTAMP
);

INSERT INTO user_messages ( username, message, added) VALUES 
('Vinny Puffknuckle', 'You look like a flat soda pal.', '${date1}' ),
('Little Trash People', 'Line the bin, line the bin.', '${date2}' ),
('HAL 9000','What up Dave?', '${date3}');`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DB_URL,
  });
  try {
    await client.connect();
    console.log("client connected");
    await client.query(SQL);
    console.log("DB seeded successfully");
  } catch (err) {
    console.error("error seeding DB", err);
  } finally {
    await client.end();
  }
}

const drop = `DROP TABLE IF EXISTS user_messages;`;

async function dropTable() {
  const client = new Client({
    connectionString: process.env.DB_URL,
  });
  try {
    await client.connect();
    console.log("client connected");
    await client.query(drop);
    console.log("DB table dropped successfully");
  } catch (err) {
    console.error("error dropping DB", err);
  } finally {
    await client.end();
  }
}

main();
// dropTable();
