'use strict';
//Задание 1
for (let i = 0; i < 11; i++) {
    console.log(i + filterFor10(i));
}

/**
 *
 * @param f число, которое мы передаём
 * @returns {string} Возвращает строку
 */
function filterFor10(f) {
    if (f == 0) {
        return "- это ноль."
    }
    if (f % 2 == 1) {
        return "- нечётное число."
    }
    if (f % 2 == 0) {
        return "- чётное число."
    }
}

//Задание 2
const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};
console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userName);
console.log(post.comments[1].text);

//Задание 3
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(function (item){
    item.price *= 0.85;
    console.log(item.price);
})

//Задание 4
const prod = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
]

//Пункт 4.1
const prodWithPhotos = prod.filter(function (e){
    return ( e.hasOwnProperty('photos') && e.photos.length > 0);
})
console.log(prodWithPhotos);

//Пункт 4.2
prod.sort(function (a,b){
    if (a.price > b.price){
        return 1;
    }
    if (a.price < b.price){
        return -1;
    }
    return 0;
})
console.log(prod);

//Пункт 5
for( let i = 0; i < 10; i = more(i)){

}
function more(a){
 console.log(a);
 return ++a;
}

//Пункт 6
let rock = 'x';
for(let i = 0; i <21 ; i++){
   console.log(rock);
   rock += 'x';
}




