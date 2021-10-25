// ------- document object -------

console.dir(document);

console.log(document.URL);
console.log(document.domain);

console.log(document.title);
document.title =  "Product List";

console.log(document.doctype);
console.log(document.head);
console.log(document.body);

console.log(document.forms[0]);

// no links, no images => zero lenght results
console.log(document.links);
console.log(document.images);

// --------- getElementById ---------
console.log(document.getElementById('page-header'));

const pageTitle = document.getElementById('page-title');
console.log(pageTitle.textContent);
console.log(pageTitle.innerText);
console.log(pageTitle.innerHTML);
console.log(pageTitle.outerHTML);

pageTitle.innerHTML = '<h3>A New Product List</h3>';
pageTitle.style.border = 'solid 2px red';


// --------- getElementByClassName ---------
const products = document.getElementsByClassName('product-group-item');
console.log(products);
console.log(products[2]);
products[1].textContent = 'New Product **** ';
products[1].style.backgroundColor = 'lightgreen';
products[2].style.fontWeight = 'bold';

Error - undefined
products.style.color = '#ffffff';

for(let i = 0; i < products.length; i++){
  products[i].style.color = '#f00000';
}


// --------- getElementByTagName ---------
const li = document.getElementsByTagName('li');
console.log(li);


// --------- querySelector ---------
id
const header = document.querySelector('#page-header');
console.log(header);

// class
const product = document.querySelector('.product-group-item');
product.style.backgroundColor = 'lightblue';

// tag
const input = document.querySelector('input');
input.placeholder = 'Add a new Product '

// specific type
const submit = document.querySelector('button[type="submit"]');
submit.style.fontWeight = 'bold';

// pseudo class
var lastItem = document.querySelector('.product-group-item:last-child');
lastItem.style.fontStyle = 'italic';

const aProduct = document.querySelector('.product-group-item:nth-child(2)');
aProduct.style.color = 'lightblue';


// --------- querySelectorAll ---------
const titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Our New Product List';


const odd = document.querySelectorAll('li:nth-child(odd)');
const even= document.querySelectorAll('li:nth-child(even)');
odd.forEach(elem => elem.style.backgroundColor = 'lightblue');
even.forEach(elem => elem.style.backgroundColor = 'lightgreen');




