let pageValue = document.querySelector(".pageValue");

function getValue() {
  let value = parseFloat(pageValue.value);
  value++;
  pageValue.setAttribute("value", value);
  console.log(value);
}

pageValue.addEventListener("click", getValue);

const API = `https://www.anapioficeandfire.com/api/characters?pageSize=10&page=${pageValue}`;
const divInfo = document.getElementById("test");

async function getData(API) {
  try {
    const response = await fetch(API);
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
}

(async () => {
  try {
    const characters = await getData(API);
    console.log(characters);
    let display = `${characters
      .map(
        (character) => `
    <div class="group relative">
    <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
      <img src="${character.imageUrl}" alt="" class="w-full">
    </div>
    <div class="mt-4 flex justify-between">
      <h3 class="text-sm text-gray-700">
        <span aria-hidden="true" class="absolute inset-0"></span>
${character.firstName} ${character.lastName}
      </h3>
    </div>
    </div>
    `
      )

      .join("")}
`;
    divInfo.innerHTML = display;
  } catch (err) {
    console.log(err);
  }
})();

const fruits = () => {
  if (true) {
    var fruit1 = "apple";
    const fruit2 = "banana";
    let fruit3 = "kiwi";
  }
};
