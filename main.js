


document.getElementById("showbtn").addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        document.getElementById("result").src = data.message;
    } catch (err) {
        console.error(err);
    }
})