npm install [<package-spec> ...]

aliases: add, i, in, ins, inst, insta, instal, isnt, isnta, isntal, isntall

function toReadable (number) {
    let numb;
    let decNumb;
    let hundreedNumb;
    let thousandNumb;
    let millionNumb;
    let milliardNumb;
    switch numb = number.at(-1) {
        case 1: return 'one'; break;
        case 2: return 'two'; break;
        case 3: return 'three'; break;
        case 4: return 'four'; break;
        case 5: return 'five'; break;
        case 6: return 'six'; break;
        case 7: return 'seven'; break;
        case 8: return 'eight'; break;
        case 9: return 'nine'; break;
        case 0: return 'zero'; break;
    }
    switch decNumb = number.at(-2) {
    case 1: return 'ten'; break;
        case 2: return 'twenty'; break;
        case 3: return 'thirty'; break;
        case 4: return 'fourty'; break;
        case 5: return 'fivty'; break;
        case 6: return 'sixty'; break;
        case 7: return 'seventy'; break;
        case 8: return 'eighty'; break;
        case 9: return 'ninety'; break;
    }
    switch hundreedNumb = number.at(-3) {
        case 1: return 'one hundreed'; break;
        case 2: return 'two hundreeds'; break;
        case 3: return 'three hundreeds'; break;
        case 4: return 'four hundreeds'; break;
        case 5: return 'five hundreeds'; break;
        case 6: return 'six hundreeds'; break;
        case 7: return 'seven hundreeds'; break;
        case 8: return 'eight hundreeds'; break;
        case 9: return 'nine hundreeds'; break;
    }
    console.log(`${hundreedNumb}${decNumb}${numb}`);



}