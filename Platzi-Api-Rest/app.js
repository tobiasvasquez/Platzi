const api = axios.create({
    baseURL: 'https://api.thecatapi.com/v1'
})

api.defaults.headers.common['X-API-KEY'] = 'live_vQkazdISMScBY08OJH9i4X92ElREP7KUARY5pnmRoQlehYgjSJ8yKCx8vpF1e54F'

const API_KEY = 'live_vQkazdISMScBY08OJH9i4X92ElREP7KUARY5pnmRoQlehYgjSJ8yKCx8vpF1e54F'
const API_RANDOM = `https://api.thecatapi.com/v1`;
const API_FAVOURITES = `https://api.thecatapi.com/v1/favourites`;
const API_FAVOURITES_DELETE = (id) => `https://api.thecatapi.com/v1/favourites/${id}?`;
const API_UPLOAD = "https://api.thecatapi.com/v1/images/upload";

const button = document.getElementById("newCat");
const catContainer = document.getElementById("catContainer");
const body = document.querySelector("body");
const spanError = document.getElementById("error");
const submitButton = document.getElementById("submitButton");

async function loadRandomCats() {
    // const response = await fetch(API_RANDOM);
    // const data = await response.json();
    const cats = await api.get('/images/search?limit=3')
    console.log(cats.data[0])
    if (cats.data.status !== 200) {
        spanError.innerHTML = "Hubo un error " + cats;
        console.log(cats)

    } else {
        const img1 = document.getElementById("img1");
        const img2 = document.getElementById("img2");
        const img3 = document.getElementById("img3");

        const btn1 = document.getElementById("btn1");
        const btn2 = document.getElementById("btn2");
        const btn3 = document.getElementById("btn3");

        img1.src = cats.data[0].url;
        img2.src = cats.data[1].url;
        img3.src = cats.data[2].url;

        btn1.onclick = () => saveFavouriteCat(cats.data[0].id);
        btn2.onclick = () => saveFavouriteCat(cats.data[1].id);
        btn3.onclick = () => saveFavouriteCat(cats.data[2].id);
    }
}

async function loadFavouriteCats() {
    const options = {
        method: "GET",
        headers: {
            "x-api-key": API_KEY,
        },
    };
    const response = await fetch(API_FAVOURITES, options);
    const data = await response.json();
    if (response.status !== 200) {
        spanError.innerHTML = `Hubo un error ${response.status}.`;
    } else {
        const section = document.getElementById("favouriteMichis");
        section.innerHTML = "";
        const h2 = document.createElement("h2");
        const h2Text = document.createTextNode("Michis Favoritos");
        h2.appendChild(h2Text);
        section.appendChild(h2);
        data.forEach((cat) => {
            const article = document.createElement("article");
            const img = document.createElement("img");
            const btn = document.createElement("button");
            const btnText = document.createTextNode("Sacar al gatito de favoritos");

            img.src = cat.image.url;
            img.width = 150;
            btn.appendChild(btnText);
            btn.onclick = () => deleteFavouriteCat(cat.id);
            article.appendChild(img);
            article.appendChild(btn);

            section.appendChild(article);
        });
    }
}

async function saveFavouriteCat(id) {

    const response = await api.post('/favourites', {
     image_id: id
    })
    // const response = await fetch(API_FAVOURITES, {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //         "x-api-key": API_KEY,
    //     },
    //     body: JSON.stringify({
    //         image_id: id,
    //     }),
    // });
    // console.log(response);

    // const data = await response.json();

    if (response.status !== 200) {
        console.log(response);
        spanError.innerHTML = `Hubo un error ${response.status}. ${data.message}`;
    } else {
        console.log("Agregado a favoritos :D");
        loadFavouriteCats();
    }
}

async function deleteFavouriteCat(id) {
    const response = await fetch(API_FAVOURITES_DELETE(id), {
        method: "DELETE",
        headers: {
            "x-api-key": API_KEY,
        },
    });
    console.log(response);

    const data = await response.json();

    if (response.status !== 200) {
        console.log(response.message);
        spanError.innerHTML = `Hubo un error ${response.status}. Mas info: ${data.message}`;
        loadFavouriteCats();
    } else {
        console.log("Eliminado de favoritos :(");
        loadFavouriteCats();
    }
}

async function uploadCatPhoto() {
    const form = document.getElementById("uploadForm");
    const formData = new FormData(form);

    console.log(formData.get("file"));

    const response = await fetch(API_UPLOAD, {
        method: "POST",
        headers: {
            "x-api-key": API_KEY,
        },
        body: formData
    });

    const data = await response.json();

    console.log(data);
}

loadRandomCats();
loadFavouriteCats();

button.addEventListener("click", loadRandomCats);
submitButton.addEventListener("click", uploadCatPhoto);
