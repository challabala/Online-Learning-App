// Mobile Menu
    const menuIcon = document.getElementById("menu-icon");
    const navMenu = document.getElementById("nav-menu");
    menuIcon.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

    // Video Modal
    const modal = document.getElementById("videoModal");
    const videoFrame = document.getElementById("videoFrame");
    const closeBtn = document.querySelector(".close");

    document.querySelectorAll(".video-thumb").forEach(img => {
      img.addEventListener("click", () => {
        const videoUrl = img.getAttribute("data-video");
        videoFrame.src = videoUrl + "?autoplay=1";
        modal.style.display = "flex";
      });
    });

    closeBtn.onclick = function() {
      modal.style.display = "none";
      videoFrame.src = "";
    }

    window.onclick = function(e) {
      if (e.target == modal) {
        modal.style.display = "none";
        videoFrame.src = "";
      }
    }