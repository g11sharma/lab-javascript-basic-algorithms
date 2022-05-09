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
//for( let i=0; i<
console.log('a' > 'b')