const PostsContainer = document.querySelector("#posts");

const images = [
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.floraly.com.au%2Fblogs%2Fnews%2Fthe-daisy-flower-meanings&psig=AOvVaw2-orducDC7UGGHXEGscZUn&ust=1704999675217000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNiw9vPA04MDFQAAAAAdAAAAABAY",
  "https://i.pinimg.com/564x/8a/98/71/8a9871d60ce812a86851891787e04af5.jpg",
  "https://i.pinimg.com/564x/77/5e/f3/775ef33d0d3917606dff51fde1366485.jpg",
  "https://i.pinimg.com/564x/e8/f2/d8/e8f2d8141fb1d9e8472e3d93b8e86954.jpg",
  "https://i.pinimg.com/564x/a9/35/5a/a9355a1f1e5ca4de5727b9310ea6cac7.jpg",
  "https://i.pinimg.com/564x/58/39/83/583983e55b69ad4384ce44b09f764792.jpg",
  "https://i.pinimg.com/564x/83/fc/cb/83fccb8d382f3abf31b80d4d00c5de2a.jpg",
  "https://i.pinimg.com/564x/76/37/41/7637411647186fe02000e8240a14cfb0.jpg",
  "https://i.pinimg.com/564x/64/a1/9a/64a19a2a213f7269082f39ea67610e66.jpg",
  "https://i.pinimg.com/564x/0c/3d/a0/0c3da08e28d2009e0216d70b210c9e48.jpg",
  "https://i.pinimg.com/564x/fb/d8/d9/fbd8d99a74d90c5c78627c7627a00b67.jpg",
  "https://i.pinimg.com/564x/4e/6a/21/4e6a210a9ef20aeb3d925558b6ffe7c2.jpg",
  "https://i.pinimg.com/564x/82/e7/8b/82e78ba13cbbc0f86161007427a1a83c.jpg",
  "https://i.pinimg.com/564x/f5/a6/32/f5a632efa67ec49c2d23fa3dee079e94.jpg",
  "https://i.pinimg.com/736x/0b/c6/ab/0bc6abecfcdcc316d3801134fea46456.jpg",
  "https://i.pinimg.com/564x/7c/27/10/7c2710d75718f09ea23efffb55766787.jpg",
  "https://i.pinimg.com/564x/5c/e1/fa/5ce1faec85a1dfa40d07d3b02225838c.jpg",
  "https://i.pinimg.com/564x/32/e7/f8/32e7f8eabd69ac5dd06bfb33a4acec13.jpg",
  "https://i.pinimg.com/564x/a1/9e/24/a19e24df107754153eb6402936da854b.jpg",
  "https://i.pinimg.com/564x/49/e7/e7/49e7e70ea4f0b7673fd145cad3858933.jpg",
  "https://i.pinimg.com/564x/08/42/e0/0842e05bfe9296e411ab9cf8edd74f3a.jpg",
  "https://i.pinimg.com/564x/48/92/90/489290f432fb0746d2d07d7da5897637.jpg",
  "https://i.pinimg.com/564x/d6/bf/9d/d6bf9dffa1c1cb753cdaa3c864099a02.jpg",
  "https://i.pinimg.com/564x/52/c7/e2/52c7e25bdd455d2e3db43a692eee008e.jpg",
  "https://i.pinimg.com/564x/08/78/79/087879d4c845a25cde7546d332fbfddb.jpg",
  "https://i.pinimg.com/564x/a3/98/35/a398356260c5facf9bb0b9c8427f1817.jpg",
  "https://i.pinimg.com/564x/06/2c/d7/062cd7c9fd1af6d1c4ddf04b3a7b39a6.jpg",
  "https://i.pinimg.com/564x/41/a2/2d/41a22da8d84346530129074befc5bbd6.jpg",
  "https://i.pinimg.com/564x/b5/22/94/b5229414463440ecacae6367403d0801.jpg",
  "https://i.pinimg.com/564x/aa/0b/f9/aa0bf9e24a04597f4cee4f1722f574bb.jpg",
  "https://i.pinimg.com/564x/98/18/ff/9818fffec938e6d6182613066c3d9d07.jpg",
  "https://i.pinimg.com/564x/77/b5/29/77b529e722e600887ae2388e46fb4e5b.jpg",
  "https://i.pinimg.com/564x/af/6f/60/af6f60424ac541d674559e008a5f60bc.jpg",
  "https://i.pinimg.com/564x/c9/e8/9e/c9e89e66e8b59b13397c925c73d656c4.jpg",
  "https://i.pinimg.com/564x/34/53/36/3453361fbfcd6f2eaff20cd4257abf4e.jpg",
  "https://i.pinimg.com/564x/c2/50/a2/c250a217d18302e80f2424366f98b4e8.jpg",
];

async function ShowPostImg() {
  try {
    const URL = "https://blog-api-t6u0.onrender.com/posts";
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);

    PostsContainer.innerHTML = data
      .map((post) => {
        const randomIndex = Math.floor(Math.random() * images.length);
        const randomImage = images[randomIndex];
        return `
          <div class=" d-flex flex-column justify-content-center shadow-lg p-3 mb-5 bg-white rounded" style="width: 24rem; height:36rem">
            <img class="" src="${randomImage}" alt="RandomImg">
            <div class="card-body mt-3">
              <p class="card-text h4">${post.id}</p>
              <h5 class="card-title">${post.title}</h5>
              <p class="card-tex mt-3">${post.body}</p>
            </div>
          </div>
        `;
      })
      .join("");
  } catch (err) {
    console.log("error");
  }
}

ShowPostImg();
