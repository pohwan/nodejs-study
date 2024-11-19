const fs = require("fs");

const path = require("path");

// define regular expression <style></style> && <script></script>
const regStyle = /<style>[\s\S]*<\/style>/;
const regScript = /<script>[\s\S]*<\/script>/;

fs.readFile(
  path.join(__dirname, "./materials/index.html"),
  "utf-8",
  function (err, dataStr) {
    if (err) {
      return console.log("Failed to read HTML file!" + err.message);
    }

    // separate index.html into 3 parts. which are css, js, html files
    resolveCss(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)
  }
);

// define resolve css method
function resolveCss(htmlStr) {
  const r1 = regStyle.exec(htmlStr);
  const newCSS = r1[0].replace("<style>", "").replace("</style>", "");
  fs.writeFile(
    path.join(__dirname, "./clock/index.css"),
    newCSS,
    function (err) {
      if (err) {
        return console.log("Failed to write css" + err.message);
      }

      return console.log("Success to write css");
    }
  );
}

// define resolve js method
function resolveJS(htmlStr) {
  const r2 = regScript.exec(htmlStr);
  const newJS = r2[0].replace("<script>", "").replace("</script>", "");
  fs.writeFile(path.join(__dirname, "./clock/index.js"), newJS, function (err) {
    if (err) {
      return console.log("Failed to write JS" + err.message);
    }
    return console.log("Success to write JS");
  });
}

// define resolve html method
function resolveHTML(htmlStr) {
  const newHTML = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css" />').replace(regScript, '<script src="./index.js"></script>')

  fs.writeFile(path.join(__dirname, './clock/index.html'), newHTML, function(err) {
    if (err) {
      return console.log("Failed to write HTML" + err.message);
    }
    return console.log("Success to write HTML");
  })
}


