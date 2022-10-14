const button = document.getElementById("button");
const input = document.getElementById("input");
const uploaded = document.getElementById("uploaded");
const uploadedcaption = document.getElementById("uploadedcaption");
const similar = document.getElementById("similar");
const similarcaption = document.getElementById("similarcaption");
const surprise = document.getElementById("surprise");

const apis = [
    "https://picsum.photos/width/200",
    "https://random.imagecdn.app/width/200",
    "https://api.lorem.space/image/category"
];
const categories = [
    "fashion",
    "shoes",
    "watch",
    "furniture",
    "pizza",
    "burger",
    "drink",
    "car",
    "house"
];
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
let num = 5;

button.addEventListener("click", () => {
    input.click();
});

input.addEventListener("change", async () => {
    const reader = new FileReader();
    reader.readAsDataURL(input.files[0]);
    reader.addEventListener("load", () => {
        uploaded.src = reader.result;
        uploaded.style = "display:block";
        uploadedcaption.style = "display:block";
        similar.src = "./loading.gif";
        similar.style = "display:block;height:50px!important";
        similarcaption.style = "display:block";

        setTimeout(() => {
            if (num == 1) return location.href = "./surprise.html";
            let src = apis[random(0, apis.length-1)];
            if (src == apis[2]) {
                src = src.replace("category", categories[random(0, categories.length-1)]);
            } else {
                src = src.replace("width", random(100, 1000));
            }
            similar.src = src;
            similar.style = "height:auto!important";
            surprise.style = "display:block";
            num--;
            surprise.innerHTML = `Upload ${num} more ${num == 1 ? "image" : "images"} for a surprise!`;
        }, 2000);
    });
});