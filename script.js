class Product {

    constructor(type, price, primaryColor, secundaryColor, material, waist, dateIncome, dateDischarge) {
        this.type = type;
        this.primaryColor = primaryColor;
        this.secundaryColor = secundaryColor;
        this.material = material;
        this.waist = waist;
        this.price = parseInt(price);
        this.dateIncome = dateIncome;
        this.dateDischarge = dateDischarge
    };

    buy(date) {
        this.dateDischarge = date;
    };

    priceChange(newPrice) {
        this.price = newPrice;
    };


};

const talle_0 = [
    new Product('Campera', 3000, 'Crudo', 'Rosa', 'Algodon', '0', '1/1/2023', ''),
    new Product('Campera', 3000, 'Crudo', 'Celeste', 'Algodon', '0', '1/1/2023', '')
];

const talle_2 = [
    new Product('Campera', 3100, 'Crudo', 'Rosa', 'Algodon', '2', '1/1/2023', ''),
    new Product('Campera', 3100, 'Crudo', 'Celeste', 'Algodon', '2', '1/1/2023', '')
];
const talle_4 = [
    new Product('Campera', 3200, 'Crudo', 'Rosa', 'Algodon', '4', '1/1/2023', ''),
    new Product('Campera', 3200, 'Crudo', 'Celeste', 'Algodon', '4', '1/1/2023', '')
];
const talle_6 = [
    new Product('Campera', 3300, 'Crudo', 'Rosa', 'Algodon', '6', '1/1/2023', ''),
    new Product('Campera', 3300, 'Crudo', 'Celeste', 'Algodon', '6', '1/1/2023', '')
];
const talle_8 = [
    new Product('Campera', 3400, 'Crudo', 'Rosa', 'Algodon', '8', '1/1/2023', ''),
    new Product('Campera', 3400, 'Crudo', 'Celeste', 'Algodon', '8', '1/1/2023', '')
];
const talle_10 = [
    new Product('Campera', 3500, 'Crudo', 'Rosa', 'Algodon', '10', '1/1/2023', ''),
    new Product('Campera', 3500, 'Crudo', 'Celeste', 'Algodon', '10', '1/1/2023', '')
];
const talle_12 = [
    new Product('Campera', 3600, 'Crudo', 'Rosa', 'Algodon', '12', '1/1/2023', ''),
    new Product('Campera', 3600, 'Crudo', 'Celeste', 'Algodon', '12', '1/1/2023', '')
];

let agregar = confirm('¿Deseas agregar nuevos prductos?');

while (agregar) {
    let temp_type = prompt('¿Que producto queres añadir?');
    let temp_price = prompt('¿Que Precio tiene este producto?');
    let temp_primaryColor = prompt('¿Cual es su color primario?');
    let temp_secundaryColor = prompt('¿Cual es su color secundario');
    let temp_material = prompt('¿De que material esta elaborado?');
    let temp_waist = prompt(`¿Que talle es?
    recorda que los talles disponibles en este momento son 0-2-4-6-8-10-12`);
    let temp_dateIncome = prompt('¿Que fecha es?');

    function productCreate() {
        return new Product(temp_type, temp_price, temp_primaryColor, temp_secundaryColor, temp_material, temp_waist, temp_dateIncome, '');
    }

    switch (temp_waist) {
        case '0':
            talle_0.push(productCreate())
            alert('Se agrego el producto al inventario de los talle 0')
            break;
        case '2':
            talle_2.push(productCreate())
            alert('Se agrego el producto al inventario de los talle 2')
            break;
        case '4':
            talle_4.push(productCreate())
            alert('Se agrego el producto al inventario de los talle 4')
            break;
        case '6':
            talle_6.push(productCreate())
            alert('Se agrego el producto al inventario de los talle 6')
            break;
        case '8':
            talle_8.push(productCreate())
            alert('Se agrego el producto al inventario de los talle 8')
            break;
        case '10':
            talle_10.push(productCreate())
            alert('Se agrego el producto al inventario de los talle 10')
            break;
        case '12':
            talle_12.push(productCreate())
            alert('Se agrego el producto al inventario de los talle 12')
            break;

        default:
            alert('Ese talle no existe en nuestro stock, por favor reclama la creacion de este talle o intenta escribiendolo nuevamente')
            break;
    }


    agregar = confirm('¿Deseas agregar nuevos prductos?');
};

alert(`En la estateria de talle 0 hay ${talle_0.length} productos, 
En la estateria de talle 4 hay ${talle_4.length} productos,
En la estateria de talle 6 hay ${talle_6.length} productos,
En la estateria de talle 2 hay ${talle_2.length} productos,
En la estateria de talle 8 hay ${talle_8.length} productos,
En la estateria de talle 10 hay ${talle_10.length} productos,
En la estateria de talle 12 hay ${talle_12.length} productos.`);
