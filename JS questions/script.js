const allFiles = [
    "interview1.js",
];

allFiles.forEach(file => {
    const script = document.createElement("script");
    script.src = `./js-files/${file}`;
    document.body.appendChild(script);
})
