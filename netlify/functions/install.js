const fs = require("fs");
const path = require("path");

exports.handler = async (event) => {
  const method = event.httpMethod;

  if (method === "POST") {
    const html = fs.readFileSync(path.join(__dirname, "../../index.html"), "utf8");
    return {
      statusCode: 200,
      headers: { "Content-Type": "text/html; charset=utf-8" },
      body: html
    };
  }

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status: "ok" })
  };
};
