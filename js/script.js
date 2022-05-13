
const request = async (API) => {
    const response = await fetch(API);
    const user = await response.json();
    for (data of user) {
        // console.log(data);
        // data.posts.map((e) => { return e })
        document.querySelector(".status-wrapper").innerHTML += `
           <div class="status-card" >
                <div class="profile-pic"><img src="${data.userAvatar}" alt=""></div>
                <p class="username">${data.username}</p>
            </div>
            `;
        document.querySelector(".post").innerHTML += `
            <div class="info">
                <div class="user">
                    <div class="profile-pic"><img src="${data.userAvatar}" alt=""></div>
                    <p class="username">${data.username}</p>
                </div>
                <img src="./assest/option.PNG" class="options" alt="">
            </div>
            <img src="${data.posts[Math.floor(Math.random() * 4)]}" class="post-image" alt="">
            <div class="post-content">
                <div class="reaction-wrapper">
                    <img src="./assest/like.PNG" class="icon" alt="">
                    <img src="./assest/comment.PNG" class="icon" alt="">
                    <img src="./assest/send.PNG" class="icon" alt="">
                    <img src="./assest/save.PNG" class="save icon" alt="">
            </div>
            <p class="likes">${data.like}</p>
            <p class="description">
                <span>${data.username}</span>
                ${data.caption}
            </p>
            <p class="post-comments">View ${data.commentsCount} comments</p>
            <p class="post-time">2 minutes ago</p>
            </div>
            <div class="comment-wrapper">
                <img src="./assest/smile.PNG" class="icon" alt="">
                <input type="text" class="comment-box" placeholder="Add a comment" name="" id="">
                <button class="comment-btn">post</button>
            </div>
        `;

    }

}
let API = request("https://627dfffc271f386cefef2319.mockapi.io/v1/posts");

