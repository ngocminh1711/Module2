const inventory = [
    {type: "machine", value: 5000},
    {type: "machine", value: 650},
    {type: "duck", value: 10},
    {type: "furniture", value: 1200},
    {type: "machine", value: 77}
]
let valueOfinventory = inventory.filter(function(value) {
        return value.type === "machine"
})
// let totalMachineValue = inventory.reduce(function())
console.log(valueOfinventory);


