export { fetchImages };
import { getStorage, ref, uploadBytesResumable, getDownloadURL, uploadString, listAll } from 'https://www.gstatic.com/firebasejs/9.8.3/firebase-storage.js';
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

function fetchImages() {
    const storage = getStorage();
    const storageRef = ref(storage);
    const listRef = ref(storage, 'thumbnails');
    let img_paths = Array();
    listAll(listRef).then(function(result) {
        result.items.forEach(element => {
            getDownloadURL(element).then((url) => {
                console.log(url);

            });
        });
    });
}


// function fetchImages() {
//     const storage = getStorage();
//     const storageRef = ref(storage);
//     const listRef = ref(storage, 'thumbnails');
//     const imgRef = ref(listRef, 'Dark-Flower-Fake.jpg');
//     console.log(imgRef);
//     getDownloadURL(imgRef).then((url) => {
//         console.log(url);
//         const img = document.getElementById('myimg');
//         img.setAttribute('src', url);
//     });
//     // listAll(listRef).then(function(result) {
//     //     console.log(result);
//     //     result.items.forEach(element => {
//     //         console.log(element._location.path);
//     //         let test = getDownloadURL(element);
//     //         document.querySelector('img').src = test;

//     //     });
//     // });
//     // listRef.listAll().then(function(result) {
//     //     console.log(result);
//     // });
// }

fetchImages()