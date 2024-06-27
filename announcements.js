
const announcements = [
    "T-Shirt World Summer Collection is now available to Order.",
    "25% discount on Children's Collection when ordered before End of Month.",
    "T-Shirt World Named Most Innovative 2024 T-Shirt store Award of the Year!"
  ];
  
  document.addEventListener('DOMContentLoaded', () => {
    const announcementContainer = document.querySelector('.announcement-container');
  
    let currentIndex = 0;
  
    function showAnnouncement(index) {
      const announcementDiv = document.createElement('div');
      announcementDiv.className = 'announcement';
      announcementDiv.textContent = announcements[index];
      announcementContainer.innerHTML = '';  
      announcementContainer.appendChild(announcementDiv);
  

      announcementDiv.style.animation = 'slide-in 10s linear infinite';
  

      setTimeout(() => {
        currentIndex = (currentIndex + 1) % announcements.length;
        showAnnouncement(currentIndex);
      }, 10000); 
    }

    showAnnouncement(currentIndex);
  });
