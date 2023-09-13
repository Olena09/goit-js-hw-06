const categoryItems = document.querySelectorAll('.item');
console.log('Number of categories:', categoryItems.length);

categoryItems.forEach(category => {
    const categoryName = category.firstElementChild.textContent;
    const categoryElements = category.firstElementChild.nextElementSibling.children;

    console.log('Category:', categoryName);
    console.log('Elements:', categoryElements.length);
    
});
