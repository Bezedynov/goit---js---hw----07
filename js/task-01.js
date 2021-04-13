const listCategoriesEl = document.querySelector('#categories');

console.log(`В списке ${listCategoriesEl.children.length} категории.`)

const listItemsEl = document.querySelectorAll('.item');

const countElements = list => {
    return list.forEach(item => {
      console.log(`Категория: ${item.firstElementChild.textContent}`);
      console.log(` Количество элементов: ${item.querySelectorAll('li').length}`,);
    });
  };
  
  countElements(listItemsEl);