//DESCRIPTION:

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice


function duplicateCount(text){
    let textToLowerCase = text.toLowerCase();
    let textLength = text.length;
    
    let map = createSymbolWithDuplicatinCountMap(textToLowerCase, textLength)

    return countDuplicationSymbolFromMap(map);
}

function createSymbolWithDuplicatinCountMap(text, length){
    let map = new Map();

    for(i = 0; i < length; i++){
        let symbol = text[i];
        if(map.has(symbol)){
            let count = map.get(symbol) + 1;
            map.set(symbol, count);
        }
        else{
            map.set(symbol, 1);
        }
    }

    return map;
}

function countDuplicationSymbolFromMap(map){
    let count = 0;

    for(let [key, value] of map){
        if(value > 1){
            count++;
        }
    }

    return count;
}