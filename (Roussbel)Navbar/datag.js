let data = [
    {
    title: "Brand New! PNY GeForce RTX 4080 Super Verto OC 16GB",
    img: "../images/products/g1.png",
    condition: "New in box",
    price: {
        raw: "$899.95",
        extracted: 899.95
    },
    shipping: "Free shipping",
    extensions: [
        "Buy It Now",
        "1,508 sold"
    ],
    thumbnail: "../images/products/g1.png"
},
    {
    title: "GIGABYTE GeForce RTX 4080 Super WINDFORCE V2, Graphics Card",
    img: "../images/products/g2.png",
    condition: "New in box",
    price: {
        raw: "$950.00",
        extracted: 950.00
    },
    shipping: "Free shipping",
    extensions: [
        "Buy It Now",
        "2,508 sold"
    ],
    thumbnail: "../images/products/g2.png"
},
    {
    title: "MSI RTX 4080 Super Gaming X Slim",
    img: "../images/products/g3.png",
    condition: "Open box",
    price: {
        raw: "$630.00",
        extracted: 630.00
    },
    shipping: "Free shipping",
    extensions: [
        "Buy It Now",
        "508 sold"
    ],
    thumbnail: "../images/products/g3.png",
},
    {
        title: "MSI NVIDIA GeForce RTX 4080 Super 16GB Expert GDDR6X Graphics Card",
        img: "../images/products/g4.png",
        condition: "Used",
        price: {
            raw: "$13.99",
            extracted: 13.99
        },
        shipping: "Free shipping",
        extensions: [
            "Buy It Now",
            "4,408 sold"
        ],
        thumbnail: "../images/products/g4.png"
},
    {
    title: "ryzen 7 7800x3d bundle",
    img: "../images/products/c1.png",
    condition: "New in box",
    price: {
        raw: "$899.95",
        extracted: 899.95
    },
    shipping: "Free shipping",
    extensions: [
        "Buy It Now",
        "1,508 sold"
    ],
    thumbnail: "../images/products/c1.png"
},
    {
    title: "AMD Ryzen 7 7800X3D 4.2GHz 8-Cores 16-Threads Socket AM5 CPU Processor",
    img: "../images/products/c2.png",
    condition: "New in box",
    price: {
        raw: "$950.00",
        extracted: 950.00
    },
    shipping: "Free shipping",
    extensions: [
        "Buy It Now",
        "2,508 sold"
    ],
    thumbnail: "../images/products/c2.png"
},
    {
    title: "Intel Core i9-14900K Unlocked Desktop Processor NEW",
    img: "../images/products/c3.png",
    condition: "New in box",
    price: {
        raw: "$499.99",
        extracted: 499.99
    },
    shipping: "Free shipping",
    extensions: [
        "Buy It Now",
        "508 sold"
    ],
    thumbnail: "../images/products/c3.png"
},
    {
        title: "NEW Intel Core i9-14900K 3.2GHz 24-Cores LGA 1700 CPU Processor (BX8071514900K)",
        img: "../images/products/c4.png",
        condition: "New in box",
        price: {
            raw: "$480.00",
            extracted: 480.00
        },
        shipping: "Free shipping",
        extensions: [
            "Buy It Now",
            "4,408 sold"
        ],
        thumbnail: "../images/products/c4.png"
},
    {
    title: "Samsung Galaxy S24 Ultra 5G S928U1 512GB (Factory Unlocked) - Excellent",
    img: "../images/products/sp1.png",
    price: {
        raw: "$937.99",
        extracted: 480.00
    },
    shipping: "Free shipping",
    extensions: [
        "Buy It Now",
        "393 sold"
    ],
    thumbnail: "../images/products/sp1.png"
},
    {
    title: "Apple iPhone 15 Pro 1TB ( Unlocked) US E-Sim Version. Excellent",
    img: "../images/products/sp2.png",
    price: {
        raw: "$999.99",
        extracted: 999.99
    },
    shipping: "Free shipping",
    extensions: [
        "Buy It Now",
        "175 sold"
    ],
    thumbnail: "../images/products/sp2.png"
},
    {
    title: "HUAWEI Mate 60 Pro Smartphone 6.82",
    img: "../images/products/sp3.png",
    price: {
        raw: "$1,299.00",
        extracted: 1299.00
    },
    shipping: "Free shipping",
    extensions: [
        "Buy It Now",
        "393 sold"
    ],
    thumbnail: "../images/products/sp3.png"
    },
    {
    title: "OnePlus 12 5G Snapdragon 8 Gen 3",
    img: "../images/products/sp4.png",
    price: {
        raw: "$999.99",
        extracted: 999.99
    },
    shipping: "Free shipping",
    extensions: [
        "Buy It Now",
        "175 sold"
    ],
    thumbnail: "../images/products/sp4.png"
},
    {
    title: "Nintendo Switch HAC-001(-01) 32GB Consoles",
    img: "../images/products/con1.png",
    price: {
        raw: "$150.00",
        extracted: 150.00
    },
    shipping: "Free shipping",
    extensions: [
        "Buy It Now",
        "500 sold"
    ],
    thumbnail: "../images/products/con1.png"
},
    {
    title: "Sony Playstation 5 Blu-Ray Edition Consoles ",
    img: "../images/products/sp4.png",
    price: {
        raw: "$459.00",
        extracted: 459.00
    },
    shipping: "Free shipping",
    extensions: [
        "Buy It Now",
        "257 sold"
    ],
    thumbnail: "../images/products/sp4.png"
},
    {
    title: "Sony Playstation 4 Pro Consoles",
    img: "../images/products/con2.png",
    price: {
        raw: "$299.00",
        extracted: 299.00
    },
    shipping: "Free shipping",
    extensions: [
        "Buy It Now",
        "170 sold"
    ],
    thumbnail: "../images/products/con2.png"
}
    
]

let key = localStorage.getItem("search_term")
key = key.trim().split(" ");
for (let i = 0; i < key.length;) {
    if ((!key[i].includes(key[i].toUpperCase())) && (key[i].length <= 3)) {
        key.splice(i, 1);
    }
    else {
        i++;
    }
}
for (let i = 0; i < key.length;) {
    if ((key[i].length <= 1)) {
        key.splice(i, 1);
    }
    else {
        i++;
    }
}

let ans = [];
TakeData(key);
function TakeData(value) {
    let searchData
    for (let ii = 0; ii < key.length; ii++) {
        searchData = data.filter(function (elem) {
            return (elem.title + "").toUpperCase().includes((value[ii] + "").toUpperCase());
        });
        ans = ans.concat(searchData);
    }

    localStorage.setItem("items", JSON.stringify(ans));
}

let mcategoryul = document.querySelectorAll(".mcategoryul");
let i = 0;
function mcategoryclicked(a) {
    mcategoryul[i].style.display = "none";
    mcategoryul[a].style.display = "block";
    i = a;
}