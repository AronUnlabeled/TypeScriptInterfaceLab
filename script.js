//let Mountains=[Kilimanjaro,Everest,Denali];
var Mountains = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 }
];
function findNameOfTallestMountain(m) {
    var tallest = m[0];
    for (var i = 1; i < m.length; i++)
        if (tallest.height < m[i].height)
            tallest = m[i];
    return tallest.name;
}
var tallestMountainName = findNameOfTallestMountain(Mountains);
console.log(tallestMountainName);
var Products = [
    { name: "couch", price: 500 },
    { name: "bed", price: 600 },
    { name: "desk", price: 700 }
];
function calcAverageProductPrice(p) {
    var avg = p[0].price;
    for (var i = 1; i < p.length; i++)
        avg += p[i].price;
    avg /= p.length;
    return avg;
}
var priceAverage = calcAverageProductPrice(Products);
console.log(priceAverage);
var Inventory = [
    { product: { name: "motor", price: 10.00 }, qauntity: 10 },
    { product: { name: "sensor", price: 12.50 }, qauntity: 4 },
    { product: { name: "LED", price: 1.00 }, qauntity: 20 }
];
function calcInventoryValue(inv) {
    var total = inv[0].product.price * inv[0].qauntity;
    for (var i = 1; i < inv.length; i++)
        total += inv[i].product.price * inv[i].qauntity;
    return total;
}
var priceTotal = calcInventoryValue(Inventory);
console.log(priceTotal);
