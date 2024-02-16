function convertToRoman(num) {

    const numStr = num.toString();
    //console.log(numStr, typeof numStr, numStr.length) // num - tipo = string - longitud

    const numStrReverse = numStr.split('').reverse();
    //console.log(numStrReverse, typeof numStrReverse, numStrReverse.length + " Reversed")
    //         array del revés - typo = object/array - longitud del array

    const unidades = numStrReverse[ 0 ];
    const decenas = numStrReverse[ 1 ];
    const centenas = numStrReverse[ 2 ];
    const uMillar = numStrReverse[ 3 ];
    const numRoman = []

    if (num > 3999) return "Máximo excedido '3999'.";
    if (uMillar == 3) numRoman.push("MMM")
    if (uMillar == 2) numRoman.push("MM")
    if (uMillar == 1) numRoman.push("M");

    if (centenas == 9) numRoman.push("CM")
    if (centenas == 8) numRoman.push("DCCC")
    if (centenas == 7) numRoman.push("DCC")
    if (centenas == 6) numRoman.push("DC")
    if (centenas == 5) numRoman.push("D")
    if (centenas == 4) numRoman.push("CD")
    if (centenas == 3) numRoman.push("CCC")
    if (centenas == 2) numRoman.push("CC")
    if (centenas == 1) numRoman.push("C")

    if (decenas == 9) numRoman.push("XC")
    if (decenas == 8) numRoman.push("LXXX")
    if (decenas == 7) numRoman.push("LXX")
    if (decenas == 6) numRoman.push("LX")
    if (decenas == 5) numRoman.push("L")
    if (decenas == 4) numRoman.push("XL")
    if (decenas == 3) numRoman.push("XXX")
    if (decenas == 2) numRoman.push("XX")
    if (decenas == 1) numRoman.push("X")

    if (unidades == 9) numRoman.push("IX")
    if (unidades == 8) numRoman.push("VIII")
    if (unidades == 7) numRoman.push("VII")
    if (unidades == 6) numRoman.push("VI")
    if (unidades == 5) numRoman.push("V")
    if (unidades == 4) numRoman.push("IV")
    if (unidades == 3) numRoman.push("III")
    if (unidades == 2) numRoman.push("II")
    if (unidades == 1) numRoman.push("I")

    return numRoman.join("")
}

console.log(convertToRoman(99))