const reverse = (num) => {
    if(num < 0){
        let staged = []
        let parsed = num.toString().split('').reverse()
        staged.push(parsed.pop())
        return staged + parsed.join('');
    } else {
        let parsed = num.toString().split('').reverse().join('')
        return parsed
    }
}
reverse(15566)

// Create string variable
const maxChar2 = (str) => {
    let letterCount = {} 
    for(let i = 0; i < str.length; i++){
        if (letterCount[str[i]]){
            letterCount[str[i]] += 1
        } else {
            letterCount[str[i]] = 1
        }
    }
    let best = {
        count: 1,
        letter: ''
    }
    for (const key in letterCount) {
        if (letterCount[key] > best.count){
            best.count = letterCount[key]
            best.letter = key
        }
    }
    return best.letter
}

export default maxChar2

// const maxChar = (string) => {
//     let result = {}    
//     let counter = 1
//     let parsed = string.split('').sort()
//     for (let i = 0; i < parsed.length; i++) {
//         if(parsed[i] === parsed[i + 1]){
//             counter++
//         } else {
//             console.log(counter);
//             // result.parsed[i] = counter
//         }
//     }
//     console.log(result);
// }
// maxChar2("apple 1231111")
