const noun = ['someone','something','he','she'];
const verb = ['play','hangout with','watch'];
const eye = ['find out','meet','see'];
const object = ['board game','video game','TV'];
const element = ['water','sun','moon'];
const emotion =['happy','sad','angry','bored']
const IndefinitePronouns ={he :'him', she :'her', it:'it', something :'it', someone:'them'}


  
function GenerateAutoNumber(x){
    return Math.floor(Math.random()*x)
};

function WordEye(){
    return eye[GenerateAutoNumber(eye.length)];
 };

function WordVerb(){
   return verb[GenerateAutoNumber(verb.length)];
};
function WordNoun(){
    return noun[GenerateAutoNumber(noun.length)];
 };
 
 function WordObject(){
    return object[GenerateAutoNumber(object.length)];
 };
 function WordEmotion(){
    return emotion[GenerateAutoNumber(emotion.length)];
 };

 function WordElement(){
    return element[GenerateAutoNumber(element.length)];
 };


 

function GenerareMixedMessage(){
    let person_emotion = WordEmotion();
    let person = WordNoun();
    let dosomething = WordVerb();
    if(person_emotion ==='angry'){
        console.log(`You will ${WordEye()} ${person} is ${person_emotion}`);
        console.log(`Please do not mess with ${IndefinitePronouns[person]}`);
    }else if (dosomething ==='hangout with'){
        console.log(`You will ${WordEye()} ${person} is ${person_emotion}`);
        console.log(`Try to ${dosomething} ${IndefinitePronouns[person]}`);
    }else if (dosomething ==='play'){
        let item = ['board game','video game'];
        console.log(`You will ${WordEye()} ${person} is ${person_emotion}`);
        console.log(`Try to ${dosomething} ${item[GenerateAutoNumber(item.length)]} with ${IndefinitePronouns[person]}`);

    }
    else {console.log(`You will ${WordEye()} ${person} is ${person_emotion}`);
            console.log(`Try to ${dosomething} ${WordObject()} with ${IndefinitePronouns[person]}`);}
    }          


GenerareMixedMessage()