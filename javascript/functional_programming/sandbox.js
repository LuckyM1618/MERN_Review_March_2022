function outer() {
    var count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

const counter = outer();
counter();
counter();

