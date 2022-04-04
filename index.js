const tabItems = document.querySelectorAll('.tab-item');
const tabContents = document.querySelectorAll('.tab-content-item');

//Function running when tab clicked
function selectItem(e) {
    removeBorder();
    removeShow();
    //add border to current tab
    this.classList.add('tab-border');

    //grab content item from dom
    const tabContentItem = document.querySelector(`#${this.id}-content`);

    //add show class in tabContentItem
    tabContentItem.classList.add('show');
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
    tabContents.forEach(content => content.classList.remove('show'));
}

//Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));

//Listen for tab click show components
// tabItems.forEach(item => item.addEventListener('click', showContent));
