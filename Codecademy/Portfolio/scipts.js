const noun = ['someone','something','he','she','it'];
const verb = ['meet','play with','hangout with','find out'];
const object = ['board game','video game','TV','fire','water','sun','moon'];

function GenerateAutoNumber(x){
    return Math.floor(Math.random()*x)
};
console.log(GenerateAutoNumber(10));

function Word (){
   return noun[GenerateAutoNumber(noun.length)];
}
console.log(Word());


console.log(`You will + ${Word()}`);