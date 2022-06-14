function insertCard(img_path, title, description) {
    var column = document.getElementById('column1');
    column.insertAdjacentHTML('beforeend', generateCard(img_path, title, description));
}


function generateCard(img_path, title, description) {
    return `<div class="card">
                <img src=${img_path} alt="photos" class="center">
                <div class="card_text">
                    <h3>${title}</h3>
                    <p>
                        ${description}
                    </p>
                </div>
            </div>`;
}

function findAllPhotos() {
    const url = `/assets/phots`;
    let fs = require('fs');
    let files = fs.readdirSync(url);
    files.forEach(Console.log(`${url}/${file}`));
}

function updateDisplay(line) {

    line = line.replace(' ', '').toLowerCase();
    const url = `/assets/strings/${line}.txt`;
    const about_content = document.getElementById("about_content");
    about_content.innerText = "hi";
    console.log(`${url} + hi`);

}