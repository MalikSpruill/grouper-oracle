const fs = require("fs");

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

module.exports = {writeFile, renameFile};
