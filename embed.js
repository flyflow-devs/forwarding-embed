(function () {
    // Create the modal element
    const modal = document.createElement('div');
    modal.innerHTML = `
    <div id="forward-embed-modal" style="display: none;">
      <div class="modal-content">
        <span class="close">&times;</span>
        <h2>Select your institution</h2>
        <div class="institution-list">
          <!-- Add institution logos and names here -->
          <div class="institution-item">
            <img src="path/to/logo1.png" alt="Institution 1">
            <span>Institution 1</span>
          </div>
          <div class="institution-item">
            <img src="path/to/logo2.png" alt="Institution 2">
            <span>Institution 2</span>
          </div>
          <!-- Add more institution items as needed -->
        </div>
      </div>
    </div>
  `;
    document.body.appendChild(modal);

    // Get the modal and close button elements
    const embedModal = document.getElementById('forward-embed-modal');
    const closeButton = embedModal.querySelector('.close');

    // Function to open the modal
    function openModal() {
        embedModal.style.display = 'block';
        document.body.classList.add('modal-open');
    }

    // Function to close the modal
    function closeModal() {
        embedModal.style.display = 'none';
        document.body.classList.remove('modal-open');
    }

    // Attach event listener to close button
    closeButton.addEventListener('click', closeModal);

    // Expose the openModal and closeModal functions globally
    window.ForwardEmbed = {
        open: openModal,
        close: closeModal,
    };

    // Add basic styling
    const style = document.createElement('style');
    style.innerHTML = `
    #forward-embed-modal {
      position: fixed;
      z-index: 9999;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
    }
    .modal-content {
      background-color: #fefefe;
      margin: 15% auto;
      padding: 20px;
      border: 1px solid #888;
      width: 80%;
      max-width: 600px;
    }
    .close {
      color: #aaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
      cursor: pointer;
    }
    .close:hover,
    .close:focus {
      color: black;
      text-decoration: none;
      cursor: pointer;
    }
    .modal-open {
      overflow: hidden;
    }
    .institution-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      grid-gap: 20px;
    }
    .institution-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
    }
    .institution-item img {
      width: 80px;
      height: 80px;
      object-fit: contain;
      margin-bottom: 10px;
    }
  `;
    document.head.appendChild(style);
})();