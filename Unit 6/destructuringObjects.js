let player = {name : "Tim", health: 100, strength: 8, defense: 4}
let name, strength, rest
({name, strength, ...rest} = player)

console.log(rest);