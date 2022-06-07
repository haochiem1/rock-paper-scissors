function computerPlay(){
    let x = Math.floor(Math.random() * 3)

    switch(x)
    {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }

    return "Error. Try Again!"
}

let test = computerPlay();
console.log(test);
