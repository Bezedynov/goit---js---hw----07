const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const createListItems = arr => {
    arr.forEach(food => {
      const ingredientsEl = document.querySelector('#ingredients');
      const listItemsEl = document.createElement('li');
      listItemsEl.textContent = food;
      return ingredientsEl.appendChild(listItemsEl);
    });
  };
  
  createListItems(ingredients);
