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

// sign in 
// Run after DOM loads
document.addEventListener("DOMContentLoaded", () => {
  const authSection = document.getElementById("auth-section");

  // Get user from localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.firstName) {
    // If logged in, show name + logout
    authSection.innerHTML = `
      <span class="username">👋 ${user.firstName}</span>
      <button id="logout-btn" class="logout-btn">Logout</button>
    `;

    // Logout function
    document.getElementById("logout-btn").addEventListener("click", () => {
      localStorage.removeItem("user"); // clear user
      location.reload(); // refresh page to update navbar
    });
  } else {
    // If not logged in, show Sign Up
    authSection.innerHTML = `
      <a href="./Pages/SignUp.html" class="signup-btn" id="auth-btn">Sign Up</a>
    `;
  }
});
