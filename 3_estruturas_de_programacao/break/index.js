let nome = "Jason Bourne";

for(let i = 0; i < 10; i = i + 1) {
    if(i == 3) {
        nome = "Daniel"
    }

    if(i == 5 && nome == "Daniel") {
        console.log("O nome é Daniel!");
        break;
    }
    console.log(i);
}