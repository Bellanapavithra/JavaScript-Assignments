
const products = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 45 }
];

console.log("Student: Pavithra");
console.log("Age: 19");
console.log("Employment Status: Unemployed");

console.log("\n-- All Products (forEach) --");

products.forEach(function(product) {
    console.log(
        "Item: " + product.name +
        " - Price: $" + product.price
    );
});

console.log("\n-- Filtered Products (Price < $50) --");

const affordable = products.filter(
    product => product.price < 50
);

console.log(affordable);

console.log("\n-- Mapped Product Tags (map) --");

const productTags = products.map(
    product => product.name.toUpperCase() +
        " costs $" + product.price
);

console.log(productTags);
