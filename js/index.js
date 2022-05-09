let hacker1 = 'gaurnnav';
let hacker2= 'stephane';
 

console.log ( `The driver name is ${hacker1}` )
console.log ( `The driver name is ${hacker2}` )

let hacker1Length = hacker1.length;
let hacker2Length = hacker2.length;
///console.log (hacker1Length < hacker2Length)
if ( hacker1Length < hacker2Length) {
    console.log(`The driver has the longest name, it has ${hacker2Length} characters`)
  } else if (hacker1Length > hacker2Length){
    console.log(`The driver has the longest name, it has ${hacker1Length}hacker1Length`)
  } else {
    console.log(`both are same`)
  }

let capitalhacker1= hacker1.toUpperCase();
let spaceName = ""
for(let i =0 ; i<capitalhacker1.length;i++)
  {
    spaceName = spaceName + " " + capitalhacker1[i];

  }
console.log("Space name",spaceName)
let reverseHacker2=''
for ( let i=hacker2.length-1;i>=0;i--){
  reverseHacker2 +=hacker2[i];
}
console.log(reverseHacker2)

let lexisOrder=''


let lorem='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quam felis, accumsan eu ex sed, efficitur pulvinar nisi. Ut maximus lacinia nunc ac convallis. Sed tincidunt tortor convallis pretium ullamcorper. Pellentesque eu eros in dui interdum congue at vel neque. Aliquam eleifend libero id purus tempor convallis. In ut lacinia dui, vel tempus orci. Mauris in efficitur metus. Sed lacinia nulla a mauris congue hendrerit.\nInteger non posuere tellus. Nulla placerat leo vel molestie tempor. Aenean luctus odio nec lacus porttitor maximus. Quisque viverra vel massa at commodo. Curabitur vel auctor neque. Pellentesque viverra, metus sit amet vestibulum faucibus, lacus nibh viverra arcu, ut scelerisque odio orci hendrerit sem. Aliquam auctor eleifend velit id venenatis. Proin interdum aliquam enim, eget finibus dolor eleifend in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam posuere bibendum aliquam. Sed finibus risus in odio egestas fringilla.\nSuspendisse sed sem vitae eros congue commodo. Maecenas placerat, libero non tempus rutrum, eros augue commodo mauris, at ultrices velit purus eget nunc. Nulla ut elit nibh. Aenean volutpat vel tellus eget interdum. In hac habitasse platea dictumst. Mauris vestibulum diam libero, sed accumsan est suscipit et. Nullam sem mauris, fringilla quis pulvinar et, consequat et risus. Vestibulum nec neque et libero sodales tempus. Vestibulum tempor vehicula facilisis. In massa velit, suscipit in cursus non, vehicula at nulla. Pellentesque ac diam vel diam accumsan vestibulum. Fusce id magna sit amet mi commodo convallis id id libero. Nam ullamcorper elementum urna, vel malesuada purus volutpat nec.'

let wordcount = lorem.split("").length;
console.log (wordcount)

let latin = lorem.split("et").length;
console.log (latin)


let phraseToCheck = 'madam';
let checkPhrase = phraseToCheck.length;
for (let i = 0; i < checkPhrase / 2; i++){
  if (phraseToCheck[i] !== phraseToCheck[checkPhrase - 1 - i]) {
    console.log("NOT a palindrome");
} 
  console.log('is a palindrome')
}