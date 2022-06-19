const products = [
    {
        productId: 1,
        name: "headphones",
        category: 1,
        price: 100,
    },
    {
        productId: 2,
        name: "Shoes Nike",
        category: 2,
        price: 300,
    },
    {
        productId: 3,
        name: "hamburger",
        category: 3,
        price: 10,
    },
    {
        productId: 4,
        name: "Fries",
        category: 3,
        price: 5,
    },
    {
        productId: 5,
        name: "Sandwich",
        category: 3,
        price: 10,
    },
    {
        productId: 6,
        name: "laptop",
        category: 1,
        price: 100,
    },
    {
        productId: 7,
        name: "keyboard",
        category: 1,
        price: 50,
    },
    {
        productId: 8,
        name: "t-shirt",
        category: 2,
        price: 16,
    },
];

const categories = [
    { id: 1, name: "Electronic" },
    { id: 2, name: "Clothes" },
    { id: 3, name: "Food" }
];

export const discountsHolyDays = [
    { category: 1, discountApply: true, value: 10 },
    { category: 2, discountApply: false, value: 0 },
    { category: 3, discountApply: true, value: 30 },
];

//// Activity

// cada solución debe de crearse con metodo que retorne el resultado esperado de cada punto
// y su llamda del metodo con un console.log donde muestre la información

/// 1 - ¿Cuál es el promedio de valor de cada tipo de producto?
let objResponse1;
for (let index = 1; index <= 3; index++) {
    const typeProduct = products.filter((value: any) => value.category === index);
    const average = typeProduct.reduce((prev, act) => {
        return prev + act.price;
    }, 0);
    objResponse1 = { categorie: index, average: average / typeProduct.length }
    console.log(objResponse1)
}


/// 2 - ¿Cuál es el producto más costoso de cada categoria?

let objResponse2;
for (let index = 1; index <= 3; index++) {
    const typeProduct = products.filter((value: any) => value.category === index);
    let expensive = 0;
    typeProduct.forEach(element => {
        if (element.price > expensive) {
            expensive = element.price;
        }
    });
    objResponse2 = { categorie: index, expensive: expensive }
    console.log(objResponse2)
}


/// 3 - ¿Exite algún producto de tipo Electronico que cueste $100?

const someProduct = products.find((value: any) => value.category === 1 && value.price === 100);
console.log(someProduct)


/// 4 - Obtener todos los productos que en nombre tengan las letra S. 

let productWithS: any = [];
products.forEach(element => {
    let word = element.name.toLowerCase();
    let wordSplit = word.split('');
    wordSplit.forEach(ind => {
        if (ind === 's') {
            productWithS.push(element.name);
        }
    });
});
console.log(productWithS);


/// 5 - Crear un arreglo de objetos con la siguiente información: { productId: 7 ,nameProduct: 'keyboard', category: 'Electronic', discount: '10', applyDiscount: true}

const productsWithDiscount: any[] = products.map((val: any, index: number) => {
    let nameCategory = categories.find((value: any) => value.id === val.category)
    let valDiscount = discountsHolyDays.find((value: any) => value.category === val.category)
    return { productId: index, nameProduct: val.name, category: nameCategory?.name, discount: valDiscount?.value, applyDiscount:valDiscount?.discountApply };
});
console.log(productsWithDiscount);


/// 6. Crear un arreglo de objetos con la siguiente información: { productId: 7, priceWithDiscount: 45}

const applyDiscount = (price, discount) => {
    return price - ( price*discount/100)
}

const productsApplyDiscount: any[] = products.map((val: any, index: number) => {
    let valDiscount = discountsHolyDays.find((value: any) => value.category === val.category)
    const vall = applyDiscount(val.price,valDiscount?.value)
    let arrayWithDiscount={ productId:val.productId,vall }
    console.log(arrayWithDiscount)
});


// 7. Agregar los siguientes productos, y crear un arreglo con el resultado, ejemplo: [{id: 9, status: 'succes', id:10: status: 'error': message: 'error message'}];
// errors: duplicated key

const newProducts = [
    {
        id: 9,
        name: 'Tucson',
        typeOfProcuct: 'Car',
        discount: 10,
    }, {
        id: 10,
        name: 'Jeep',
        typeOfProcuct: 'Car',
        discount: 10,
    }, {
        id: 10,
        name: 'Screen',
        typeOfProcuct: 'Electronic'
    }, {
        id: 1,
        name: 'Mouse',
        typeOfProcuct: 'Electronic'
    }
] 

const totalProduct = [...products];
newProducts.forEach(productnew => {
    let status='';
    let objAux = {};
    if (totalProduct.some((value)=>value.productId == productnew.id )){
        status='error'
        objAux = {message:'duplicated key'}
    }else {
        status='succes'
        totalProduct.push({productId:productnew.id, name:productnew.name, category:0 , price:0 })
    }
    objAux= {id: productnew.id, status:status,...objAux}
    console.log(objAux)
});