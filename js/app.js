const navbar = document.querySelector(".navbar__collection")

function toggleShow (){
    navbar.classList.toggle("show")
}


{
    // 5 masala
    function bar(a, b, c){
        let musbat = 0
        let manfiy = 0
        if(a > 0){
            musbat++
        }else{
            manfiy++
        }
        if(b > 0){
            musbat++
        }else{
            manfiy++
        }
        if(c > 0){
            musbat++
        }else{
            manfiy++
        }
        return `musbat: ${musbat}, manfiy: ${manfiy}`
    }
    // console.log(bar(7, -2, 4));
}
{
    // 6 masala
    function bar(a, b){
        if(a > b){
            return `kattasi: ${a}`
       }else{
        return `${b}`
           }
          
    }
    // console.log( bar(1, 2));
}

{ 
    // 7 masala
    function  bar(a, b){
        if(a < b){
            return`bunda a son ${a} kichkina `
        }else{
            return` bunda b son ${b} kichkina`
        }
    }
    // console.log(bar(1,5));
}

{
    // 8 masala
    function bar(a, b){
        if(a > b){
            return ` a soni kattasi: ${a} , b soni kichkinasi:${b}`
        }else{
            return ` bunda b soni kattasi: ${b} , a soni kichkina:${a}`
        }
     
    }
    // console.log(bar(10, 23));
}

{
    // 9 masala
    function bar(a, b){
        let c = 0
        if(a < b){
            return  `a soni kchik: ${a}, b soni katta: ${b}`
        }else{
            c = a
            a = b
            b = c
            return ` a soni kichik: ${a}, b soni katta: ${b} `
        }
    }
    // console.log(bar(29, 21));
}

{
    // 10 masala
    function bar(a, b){
        if(a != b){
            let sum = a + b
            return` a soni: ${a}, va b soni ${b}, shular yigindisi: ${sum} ga teng`
        }else{
            return `javob ${0} ga teng`
        }
    }
    // console.log(bar(41, 43));
}

{
    // 11 masala
    function bar(a, b){
        let c = 0
        if(a == b){
            return` a soni: ${a}, b soni: ${b}, javob:${c}`
        }else if(a > b){
            return` a son ${a} katta `
        }else{
            return` b son  ${b} katta `
        }
    }
    // console.log(bar(29,21));
}

{
    // 12 masala
  function bar(a, b, c){
    if(a < b ){
    return` ${a}`
    }else if(a < c){
    return` ${a}`
    }else if(b < a){
        return` ${b}`
    }else if(b < c){
        return` ${b}`
    }else if(c < a){
        return `${c}`
    }else if (c < b){
        return` ${c}`
    }
}
//   console.log(bar(12, 64, 4));
}


{
    // 13 masala
    function bar(a, b, c){
        if(b < a || b > c){
            return ` ortasidagi: ${c} `
        }
    }
    // console.log(son(4, 2, 1));
}
{
    // 14 masala
    function bar(a, b, c){
        if(a > b && a > c && b > c){
            return `kichik: ${c} kattasi:${a}`
        }else if(b > a && a > c && b > c){
            return `kichik: ${c} kattasi:${b}`
        }else if(b > c && c > a && b > a){
            return `kichik: ${a} kattasi:${b}`
        }else if(a > c && c > b && a > b){
            return `kichik: ${b} kattasi:${a}`
        }else if(c > a && a > b && c > b){
            return `kichik:${b} kattasi:${c}`
        }else if(c > b && b > a && c > a){
            return `kichik:${a} kattasi:${c}`
        }
    }
    // console.log(bar(6,9,8));
}

{
    // 15 masala
    function bar(a, b, c, d) {
        if (a === b && b === c) return 4;
        if (a === b && b === d) return 3;
        if (a === c && c === d) return 2;
        if (b === c && c === d) return 1;
        return 0;
    }
    // console.log(bar(3,6,12,2));
}

{
    // 16 masala
    function bar( a, b, c) {
        if ( a < b && b < c) {
            return `sonlar ${a} ${b} ${c} 
            Result: a son ${a *= 2} ; b son ${b *= 2} ; c son ${c *= 2};`
        }
        else{
            return `Result = ${-a} , b = ${-b}, c = ${-c} `
        }
    }
    console.log(( bar(2,5,8)));
}

{
    // 17 masala
    function bar( a, b, c) {
        if ((a < b && b < c) || (a > b && b > c) ) {
            return  `sonlar ${a} ${b} ${c} 
            Result: a son ${a *= 2} ; b son ${b *= 2} ; c son ${c *= 2};`
        }
        else{
            return `Result = ${-a} , b = ${-b}, c = ${-c} `
        }
    }
    // console.log(bar(8,10,14));
}

{
    // 18 masala
    function bar(a,b,c) {
        if ( a === b) {
            return `${a} = ${b} va c: ${c} sonning tartib raqami 3`
        }
        else if(a === c){
            return `${a} = ${c} va  b: ${b} sonning tartib raqami 2`
        }
        else if(b === c){
            return `${b} = ${c} va a: ${a} sonning tartib raqami 1`
        }
    }
    // console.log(bar(1,1,2));
}

{
    // 19 masala
    function bar(a , b, c, n) {
        if (a === b && a === c) {
            return `${a} = ${b} = ${c} n:${n} sonning tartib raqami 4`
        } else if (a === b && a === n){
            return `${a} = ${b} = ${n} c:${c} sonning tartib raqami 3`
        } else if (a === c && a === n){
            return `${a} = ${c} = ${n} b:${b} sonning tartib raqami 2`
        } else if (b === c && b === n){
            return `${b} = ${c} = ${n} a:${a} sonning tartib raqami 1`
        }    
    }
    // console.log(bar(1,2,1,1));
}

{
    // 20 masala
    function bar(a, b, c) {
        let masofaAB = Math.abs(a-b);
        let masofaAC = Math.abs(a-c);
        if (masofaAB < masofaAC) {
            return `eng yaqin nuqta b, masofa ${masofaAB}`
        } else {
            return ` eng yaqin masofa c, masofa ${masofaAC}`
        }
    }
    // console.log(bar(2,6,8));
}