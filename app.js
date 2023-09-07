let url = "https://meme-api.com/gimme/2";

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let link = await getImg();
    let img = document.querySelector("img");
    img.setAttribute("src", link);
})

async function getImg() {
    try {
        let res = await axios.get(url);
        return res.data.memes[0].url;
    } catch (e) {
        console.log("error - ", e);
        return "NO Img Found"
    }
}