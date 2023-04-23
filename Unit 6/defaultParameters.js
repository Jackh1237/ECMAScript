function greetings ( yourName = "name1", myName = "name2" ){
    let message1 = "hello " + yourName + "\n"
    let message2 = "I'm "+ myName + " nice to meet you!"  
    return message1 + message2
}

console.log(greetings("Jack","Tom"));