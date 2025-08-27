const allFiles = [
    "ques1.js",
    "ques2.js",
    "ques3.js"
];

allFiles.forEach(file => {
    const script = document.createElement("script");
    script.src = `./js-files/${file}`;
    document.body.appendChild(script);
})
