function bunnyEars(bunnies){
    if(bunnies < 0){
        throw new Error ("Invalid input.It is not possible to have negative amount of bunnies")
    }else if(bunnies == 0){
        return 0;
    } else {
        return 2 + bunnyEars(bunnies-1)
    }
}

console.log(bunnyEars(0)); // 0
console.log(bunnyEars(1)); // 2
console.log(bunnyEars(2)); // 4
console.log(bunnyEars(5)); // 10
console.log(bunnyEars(-1)); // Error