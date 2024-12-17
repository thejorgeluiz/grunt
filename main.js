function greet(name) {
    if (!name) {
        console.log("Hello, World!");
    } else {
        console.log(`Hello, ${name}!`);
    }
}

greet();
greet("Jorge");