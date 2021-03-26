

function recursive(n) {

    console.log(n);
    if(n >= 10) return;
    n++
    recursive(n);
}

recursive(0)