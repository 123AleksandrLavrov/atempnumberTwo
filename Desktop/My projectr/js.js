let allTasks = JSON.parse(localStorage.getItem('task')) || [];
let valueInput = '';
let input = null;
let currentIndex = -1;

window.addEventListener('load', () => {
  input = document.querySelector('.inp');
  input.addEventListener('change', updateValue);
  let btn = document.querySelector('.btn');
  btn.addEventListener('click', onPressButton);
  localStorage.setItem('task', JSON.stringify(allTasks));
  let btnDelfromLocal = document.querySelector('.delFromLocalStorage');
  btnDelfromLocal.addEventListener('click', () => {
    localStorage.clear('task');
    allTasks = [];
    render();
  });
  let delOneElemFromLocal = document.querySelector('.delOneElemFromLocal');
  delOneElemFromLocal.addEventListener('click', () => {
    localStorage.removeItem('task');
    render();
  });
  render();
});

onPressButton = () => {
  allTasks.push({
    text: valueInput,
    isCheck: false
  });
  input.value = '';
  valueInput = '';
  render();
};

updateValue = e => {
  valueInput = e.target.value;
};

render = () => {
  let content = document.querySelector('.content__box');

  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }

  allTasks.map((item, index) => {
    let contianer = document.createElement('div');
    contianer.id = `task-${index}`;
    contianer.className = 'content-container';

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = item.isCheck;
    checkbox.onchange = () => {
      onChangeCheckbox(index);
    };
    contianer.appendChild(checkbox);

    if (currentIndex === index) {
      let inputEdite = document.createElement('input');
      inputEdite.value = item.text;
      inputEdite.className = 'inputText';
      inputEdite.addEventListener('change', e => {
        allTasks[currentIndex].text = e.target.value;
        localStorage.setItem('task', JSON.stringify(allTasks));
      });
      contianer.appendChild(inputEdite);
    } else {
      let text = document.createElement('p');
      text.innerHTML = item.text;
      text.className = item.isCheck ? 'text-task done-text' : 'text-task';
      contianer.appendChild(text);
      localStorage.setItem('task', JSON.stringify(allTasks));
    }
    if (currentIndex === index) {
      let imageSubmit = document.createElement('img');
      imageSubmit.className = 'imgSub';
      imageSubmit.src = 'images.png';
      contianer.appendChild(imageSubmit);
      imageSubmit.addEventListener('click', () => {
        currentIndex = -1;
        localStorage.setItem('task', JSON.stringify(allTasks));
        render();
      });
    } else {
      let imageEdite = document.createElement('img');
      imageEdite.className = 'imageEdite';
      imageEdite.src = 'edit--v2.png';
      contianer.appendChild(imageEdite);
      imageEdite.addEventListener('click', () => {
        currentIndex = index;
        localStorage.setItem('task', JSON.stringify(allTasks));
        render();
        console.log(currentIndex);
      });
    }

    let btnDelite = document.createElement('img');
    btnDelite.className = 'imgDelite';
    btnDelite.src = 'delete-sign--v2.png';
    btnDelite.addEventListener('click', () => {
      allTasks.splice(index, 1);
      localStorage.setItem('task', JSON.stringify(allTasks));
      render();
    });
    contianer.appendChild(btnDelite);
    content.appendChild(contianer);
  });
};

onChangeCheckbox = index => {
  allTasks[index].isCheck = !allTasks[index].isCheck;
  allTasks.sort((a, b) => (a.isCheck > b.isCheck ? 1 : -1));
  localStorage.setItem('task', JSON.stringify(allTasks));
  //filterTasks();
  render();
};
