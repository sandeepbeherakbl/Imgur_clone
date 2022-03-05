async function Image() {
    let res = await fetch("https://pixabay.com/api/?key=25999405-98727252e479df3044db938ef&q=yellow+flowers&image_type=photo&per_page=200");
    let data = await res.json();
    console.log(data);
    showImage(data.hits);
}
Image();

function showImage(data) {
    let addImage = document.getElementById("apiimages");
    addImage.innerHTML = null;
    data.forEach(function(el) {
        let div = document.createElement("div");
        // userImageURL
        let img = document.createElement("img");
        img.src = el.userImageURL;

        let tag = document.createElement("h5");
        tag.innerText = el.tags;

        let view = document.createElement("p")
        view.innerHTML = el.views;

        let like = document.createElement("p")
        like.innerHTML = el.likes;

        let comment = document.createElement("p")
        comment.innerHTML = el.comments;

        div.append(img, tag, view, like, comment);
        addImage.append(div);

    });

}