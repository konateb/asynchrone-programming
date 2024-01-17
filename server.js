//code source: https://dev.to/gaurang847/nodejs-why-using-sync-versions-of-async-functions-is-bad-586

import http from "http";
import childProcess from "child_process";

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/quick-api") {
    return res.end("<h1>This API must return immediately.</h1>");
  }
  if (req.url === "/slow-sync-api") {
    childProcess.execSync("sleep 30");
    return res.end(
      "<h1>This API performs a slow synchronous operation. " +
        "It will block all other requests " +
        "and bring down the performance of the entire application.</h1>"
    );
  }
  if (req.url === "/slow-async-api") {
    return childProcess.exec("sleep 30", () => {
      return res.end(
        "<h1>This API also performs a slow operation. " +
          "But it does not block other requests. " +
          "The performance of rest of the application is unaffected by such slow APIs</h1>"
      );
    });
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
