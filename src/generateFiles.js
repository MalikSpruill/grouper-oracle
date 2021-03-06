const fs = require("fs");

//creates the html file in the (dist) sub-directory after data is provided from generatedHtml function
let writeFile = htmlContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/index.html", htmlContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: "html file created!"
            })
        })
    })
}

//This is an optional function if you'd rather rewrite the css file into the (dist) sub-directory 
/*
let renameFile = cssContent => {
    return new Promise((resolve, reject) => {
        fs.rename("./style.css", "./dist/style.css", err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: "css file sent!"
            })
        })
    })
}
*/

module.exports = writeFile
