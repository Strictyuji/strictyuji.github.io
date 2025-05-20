document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".video-link");
  const player = document.getElementById("videoPlayer");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // 防止連結跳頁
      const src = this.dataset.src;

      player.pause();
      player.removeAttribute("src");
      player.load();

      if (src) {
        player.src = src;
        player.load();
        // player.play(); // 如果你想自動播放，可取消註解
      }
    });
  });
});
