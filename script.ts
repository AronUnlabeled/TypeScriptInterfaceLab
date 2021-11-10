interface Mountain{
    name:string;
    height:number;
}


//let Mountains=[Kilimanjaro,Everest,Denali];

let Mountains: Mountain[] = [
    {name: "Kilimanjaro", height:19341},
    {name: "Everest", height:29029},
    {name: "Denali", height:20310}
    ]
    



function findNameOfTallestMountain(m:Mountain[]):string{
    let tallest: Mountain = m[0];
    for (let i = 1; i < m.length; i++) 
        if(tallest.height<m[i].height)
            tallest= m[i];
    return tallest.name;
}

let tallestMountainName:string = findNameOfTallestMountain(Mountains);
console.log(tallestMountainName)

interface Product{
    name:string;
    price:number;
}

let Products: Product[] = [
    {name: "couch", price:500},
    {name: "bed", price:600},
    {name: "desk", price:700}
    ]

function calcAverageProductPrice(p:Product[]): number{
    let avg: number = p[0].price;
    for(let i=1; i<p.length; i++)
        avg+=p[i].price;
    avg /= p.length;
    return avg;
}
let priceAverage = calcAverageProductPrice(Products);
console.log(priceAverage);

interface InventoryItem{
    product:Product;
    qauntity:number;
}



let Inventory: InventoryItem[] = [
    {product:{name: "motor", price:10.00}, qauntity:10},
    {product:{name: "sensor", price:12.50}, qauntity:4},
    {product:{name: "LED", price:1.00}, qauntity:20}
    ]

function  calcInventoryValue(inv:InventoryItem[]):number {
    let total: number = inv[0].product.price * inv[0].qauntity;
    for(let i=1; i<inv.length; i++)
        total+=inv[i].product.price * inv[i].qauntity;
    return total;
}

let priceTotal:number = calcInventoryValue(Inventory);
console.log(priceTotal);
