document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.getElementById('main-image');
    const dynamicText = document.getElementById('dynamic-text');
  
    mainImage.addEventListener('mouseover', () => {
      dynamicText.textContent = "Discover Our New Collections.";  
    });
  
    mainImage.addEventListener('mouseout', () => {
      dynamicText.textContent = "T-Shirts That Speak Volumes";  
    });
  });