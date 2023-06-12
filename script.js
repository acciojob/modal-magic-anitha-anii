document.addEventListener('DOMContentLoaded', () => {
  let obtn = document.getElementById('open');
  
  obtn.addEventListener('click', () => {
    let displayDiv = document.createElement('div');
    displayDiv.className = 'ddiv';

    let header = document.createElement('header');
    header.innerText = "Model Header";
    let tbody = document.createElement('tbody');
    let para = document.createElement('p');
    para.textContent = "Model Body Content";
    let cbutton = document.createElement('button');
    cbutton.className = 'close';
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

