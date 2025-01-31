function showPopup(message) {
    if (!message) return;
  
    // Append the popup elements to the body
    $("body").append(`
      <div id="popup-overlay" style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: none;
        z-index: 999;"></div>
  
      <div id="popup" style="
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 300px;
        padding: 20px;
        background: white;
        border-radius: 8px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        text-align: center;
        display: none;
        z-index: 1000;">
        <p>${message}</p>
        <button id="popup-close" style="margin-top: 10px; padding: 5px 10px; cursor: pointer;">Close</button>
      </div>
    `);
  
    // Show the popup
    $("#popup, #popup-overlay").fadeIn();
  
    // Close the popup when clicking the button or overlay
    $("#popup-close, #popup-overlay").click(function () {
      $("#popup, #popup-overlay").fadeOut(function() {
        $(this).remove(); // Remove elements after hiding
      });
    });
  }

  export default showPopup