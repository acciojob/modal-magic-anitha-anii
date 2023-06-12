document.addEventListener('DOMContentLoaded', () => {
  let obtn = document.getElementById('openModal');
  
  obtn.addEventListener('click', () => {
    let displayDiv = document.createElement('div');
    displayDiv.className = 'modal';

    let header = document.createElement('h2');
	  header.className ='modal-header';
    header.innerText = "Model Header";
    let tbody = document.createElement('tbody');
	  
    let para = document.createElement('p');
	  para.className = 'modal-body';
    para.textContent = "Model Body Content";
    let cbutton = document.createElement('button');
    cbutton.className = 'close-modal';
    cbutton.innerHTML = "X";

    tbody.appendChild(para);
    tbody.appendChild(cbutton);
    displayDiv.appendChild(header);
    displayDiv.appendChild(tbody);

    document.body.appendChild(displayDiv);

    cbutton.addEventListener('click', () => {
      displayDiv.remove();
    });
  });
});

