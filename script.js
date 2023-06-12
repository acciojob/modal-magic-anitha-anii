document.addEventListener('DOMContentLoaded', () => {
  let obtn = document.getElementById('openModal');
  
  obtn.addEventListener('click', () => {
    let displayDiv = document.createElement('div');
    displayDiv.className = 'modal';

    let header = document.createElement('h2');
    header.className = 'modal-header';
    header.innerText = "Modal Header";
    
    let para = document.createElement('p');
    para.className = 'modal-body';
    para.textContent = "Modal Body Content";
    
    let cbutton = document.createElement('button');
    cbutton.className = 'close-modal';
    cbutton.innerHTML = "X";

    let modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    
    let modalHeader = document.createElement('div');
    modalHeader.className = 'modal-header';
    modalHeader.appendChild(header);
    modalHeader.appendChild(cbutton);
    
    let modalBody = document.createElement('div');
    modalBody.className = 'modal-body';
    modalBody.appendChild(para);
    
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    
    displayDiv.appendChild(modalContent);

    document.body.appendChild(displayDiv);

    cbutton.addEventListener('click', () => {
      displayDiv.remove();
    });
  });
});



