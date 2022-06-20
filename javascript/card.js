export { populate_cards };
import { getStorage, ref, getDownloadURL, listAll } from 'https://www.gstatic.com/firebasejs/9.8.3/firebase-storage.js';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyDkrK0VfbEbGkzUlhDcqkzw0Xqoiu1mDrs",
    authDomain: "mywebsite-478ff.firebaseapp.com",
    databaseURL: "https://mywebsite-478ff-default-rtdb.firebaseio.com",
    projectId: "mywebsite-478ff",
    storageBucket: "mywebsite-478ff.appspot.com",
    messagingSenderId: "122514488269",
    appId: "1:122514488269:web:3198c127ee0c80607fe284",
    measurementId: "G-J61XLM1S0K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



function insert_card(element, img_path, title, description) {
    element.insertAdjacentHTML('beforeend', generate_card(img_path, title, description));
}


function generate_card(img_path, title, description) {
    return `<div class="card">
                <img src=${img_path} alt="photos" class="center photo grid-item">
                <div class="card_text">
                    <h3>${title}</h3>
                    <p>
                        ${description}
                    </p>
                </div>
            </div>`;
}

/**
 * 
 * @returns {Array<String>}
 */
async function fetch_images(child_path) {
    const storage = getStorage();
    // const storageRef = ref(storage);
    const listRef = ref(storage, child_path);
    let img_paths = [];

    let list = await listAll(listRef);
    console.log(list)
    await Promise.all(list.items.map(async(element) => {
        img_paths.push(await getDownloadURL(element));
    }))
    return img_paths;
}

async function populate_cards(child_path = 'thumbnails') {
    let img_paths = await fetch_images(child_path);
    // let columns = document.getElementsByClassName('column');
    let row = document.getElementById("music_row");
    for (let i = 0; i < img_paths.length; i++) {
        // insert_card(columns[i % columns.length], img_paths[i], 'title', 'description');
        insert_card(row, img_paths[i], 'title', 'description');
    }
}

// populate_cards();

// function update_display(line) {

//     line = line.replace(' ', '').toLowerCase();
//     const url = `/assets/strings/${line}.txt`;
//     const about_content = document.getElementById("about_content");
//     about_content.innerText = "hi";
//     console.log(`${url} + hi`);

// }