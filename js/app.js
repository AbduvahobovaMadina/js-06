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