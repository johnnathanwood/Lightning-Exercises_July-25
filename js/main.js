// var getString = [45, "I", true, null, "am", 3.56, "a", undefined, { catchphrase: "Oh hai, Mark"}, "JS", "rockstar"] ;

// const result = getString.filter(Word => i > 100);

// console.log(result);

// rawArray = [45, "I", true, null, "am", 3.56, "a", undefined, { catchphrase: "Oh hai, Mark"}, "JS", "rockstar"];
// strArray.forEach(element =>{
//     if(typeof (element) === "string"){
//         strArray.push(element);
//     }
// });

let array = [45, "I", true, null, "am", 3.56, "a", undefined, { catchphrase: "Oh hai, Mark"}, "JS", "rockstar"]

const strings = array.filter(item => {
    const isString = (typeof item === 'string')
    return isString;



});
console.log(strings)
