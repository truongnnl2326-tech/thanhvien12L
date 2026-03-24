<script>
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const images = document.querySelectorAll(".member img, .leader img");
  const closeBtn = document.querySelector(".close");

  images.forEach(img => {
    img.onclick = function () {
      modal.style.display = "block";
      modalImg.src = this.src;
    }
  });

  closeBtn.onclick = function () {
    modal.style.display = "none";
  }

  modal.onclick = function (e) {
    if (e.target !== modalImg) {
      modal.style.display = "none";
    }
  }
</script>