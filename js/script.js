const getTime = (createdAt) => {
    const diff = Math.ceil((new Date() - new Date(createdAt)) / 1000)
    if (diff >= 60 && diff < 60 * 60) {
        return Math.ceil(diff / 60) + " " + "minutes"
    } else if (diff >= 60 * 60 && diff < 60 * 60 * 24) {
        return Math.ceil(diff / (60 * 60)) + " " + "hours"
    } else if (diff >= 60 * 60 * 24 && diff < 60 * 60 * 24 * 30) {
        return Math.ceil(diff / (60 * 60 * 30)) + " " + "days"
    } else if (diff >= 60 * 60 * 24 * 30) {
        return Math.ceil(diff / (60 * 60 * 24 * 30)) + " " + "months"
    }
    else {
        return Math.ceil(diff) + " " + "seconds"
    }
}

const request = async (API) => {
    const response = await fetch(API);
    const user = await response.json();
    for (data of user) {
        const timeDiff = getTime(data.createdAt)
        document.querySelector(".status-wrapper").innerHTML += `
             <div class="status-card" >
                  <div class="profile-pic"><img src="${data.userAvatar}" alt=""></div>
                  <p class="username">${data.username}</p>
              </div>
              `;
        document.querySelector(".allPosts").innerHTML +=
            `
              <div class="post">
              <div class="info">
              <div class="user">
                  <div class="profile-pic"><img src="${data.userAvatar}" alt=""></div>
                  <p class="username">${data.username}</p>
              </div>
              <img src="./assest/option.PNG" class="options" alt="">
          </div>
          <div class="slideshow-container">
           
                <div id="carouselExampleIndicators${data.id}" class="carousel slide" data-ride="carousel">
                  <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators${data.id}" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators${data.id}" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators${data.id}" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators${data.id}" data-slide-to="2"></li>
                  </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img class="d-block w-100" src=${data.posts[0]} alt="First slide">
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src=${data.posts[1]} alt="Second slide">
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src=${data.posts[2]} alt="Third slide">
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src=${data.posts[3]} alt="Third slide">
                    </div>
                </div>
                  <a class="carousel-control-prev" href="#carouselExampleIndicators${data.id}" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#carouselExampleIndicators${data.id}" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
              </div>
          </div>
          <div class="post-content">
              <div class="reaction-wrapper">
                  <img src="./assest/like.PNG" class="icon" alt="">
                  <img src="./assest/comment.PNG" class="icon" alt="">
                  <img src="./assest/send.PNG" class="icon" alt="">
                  <img src="./assest/save.PNG" class="save icon" alt="">
          </div>
          <p class="likes m-0">${data.like}</p>
          <p class="description">
              <span>${data.username}</span>
              ${data.caption}
          </p>
          <p class="post-comments">View ${data.commentsCount} comments</p>
          <p class="post-time m-0">${timeDiff}</p>
          </div>
          <div class="comment-wrapper">
              <img src="./assest/smile.PNG" class="icon" alt="">
              <input type="text" class="comment-box" placeholder="Add a comment" name="" id="">
              <button class="comment-btn">post</button>
          </div>
              </div>
          `;


    }

}

let API = request("https://627dfffc271f386cefef2319.mockapi.io/v1/posts");

