function toggleVarian(id) {
  const varian = document.getElementById(id);
  const isVisible = varian.style.display === "block";
  
  // Tutup semua varian
  document.querySelectorAll(".varian").forEach(v => v.style.display = "none");
  
  // Buka varian yang diklik jika sebelumnya tertutup
  if (!isVisible) {
    varian.style.display = "block";
  }
}
