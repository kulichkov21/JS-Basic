'use strict';

// Задание 1.1 (ES5)

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    this.price *= 0.75;
}

let product1 = new Product('milk', 100);
product1.make25PercentDiscount();



// Задание 1.1 (ES6)
class ProductES6 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscountES6 () {
        this.price *= 0.75;
    }
}
let product2 = new Product('apple', 50);
product2.make25PercentDiscount();

// Задание 1.2 (ES5)
function PostES5(author, text, date){
    this.author = author;
    this.text = text;
    this.author = author;
}

PostES5.prototype.edit = function (text){
    this.text = text;
};

function AttachedPostES5(author, text, date, highlighted){
   PostES5.call(this,author, text, date);
   this.highlighted = false;
}

AttachedPostES5.prototype = Object.create(PostES5.prototype);
AttachedPostES5.prototype.constructor = AttachedPostES5;

AttachedPostES5.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}

let attachedPost1 = new AttachedPostES5('wwww','eeeee','222222');
attachedPost1.makeTextHighlighted();

// Задание 1.2 (ES6)
class PostES6{
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.author = author;
    }
    edit(text){
        this.text = text;
    }
}

class AttachedPostES6 extends PostES6{
    constructor(author, text, date, highlighted) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted(){
        this.highlighted = true;
    }

}
let attachedPost2 = new AttachedPostES6('wwww','eeeee','222222');
attachedPost2.makeTextHighlighted();