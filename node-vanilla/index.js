const http = require("http");
const { convertProcessSignalToExitCode } = require("util");

http
  .createServer(function (req, res) {
    // GET や POST 等に対する処理を記述
    // res.setHeader("Content-Type", "text/plain;charset=utf-8"); // 文字化け防止
    // res.write("Hello"); // example1
    // res.write("こんにちは"); // example2
    // console.log("reqの中身", req); example3
    // res.end(); // レスポンスが終わる事を通知するメソッド
    if (req.url === "/" && req.method === "GET") {
      res.setHeader("Content-Type", "text/plain;charset=utf-8");
      res.write("こんにちは");
      res.end();
    } else if (req.url === "/about" && req.method === "GET") {
      res.setHeader("Content-Type", "text/plain;charset=utf-8");
      res.write("ここはaboutページです");
      res.end();
    } else if (req.url === "/hobby" && req.method === "GET") {
      res.setHeader("Content-Type", "text/html");
      res.write(
        "<form action='/outdoor' method='POST'><input type='text' name='sports'><button type='submit'>Submit</button></form>",
      );
    } else if (req.url === "/outdoor" && req.method === "POST") {
      console.log("reqの中身", req);
    }
  })
  .listen(4000, function () {
    // ブラウザで開いた時の処理
    console.log("Listening on localhost port 4000");
  });
