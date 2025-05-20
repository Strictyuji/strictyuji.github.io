document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".video-link");
  const contentArea = document.getElementById("content-area");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const src = this.dataset.src;

      if (src) {
        contentArea.innerHTML = `
          <video id="videoPlayer" width="100%" height="100%" controls autoplay>
            <source src="${src}" type="video/mp4">
            您的瀏覽器不支援影片播放。
          </video>
        `;
      } else {
        contentArea.innerHTML = "<p>無影片可播放</p>";
      }
    });
  });
});
