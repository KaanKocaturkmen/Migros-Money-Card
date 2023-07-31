let message =
    `
Welcome to migros, do you have moneycard?
1-YES
2-NO
`;

const products = [
    {
        itemName : "Milk", 
        price : 21 
    },
    {
        itemName : "Yogurt",
        price : 25
    },
    {
        itemName : "Energybar",
        price : 15
    }
]

let end = confirm(message);

if (end) {
    //Have money card
    let name = prompt("Whats ur name");
    let surname= prompt("Whats ur lastname");
    const person = new customer(name,surname,end,products);
    let pay = person.calculate();
    alert(
        `Customer info : ${name} ${surname}
        Pay you need : ${pay}                
        `)
} else {

    const person = new customer(null,null,end,products)
    let pay = person.calculate();
    alert(`Pay you need ${pay}`)
}