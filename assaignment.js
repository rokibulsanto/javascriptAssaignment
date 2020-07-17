//problem 1: converting feet to mile
function feetToMile(feet){
        
       if(feet>=0){

        var mile = feet * 0.000189394;
        var result =  mile.toFixed(8);
        return result; 

       }
       else{
           var error = 'error!! Distance has never a negative value';
           return error;
       }
         
}

var convertedResult = feetToMile(5);
console.log('Your result is:',convertedResult,'mile');

//Problem2:wood calculator
function woodCalculator(chair,table,bed){

    var numOfChair = chair * 1;
    var numOfTable = table * 3;
    var numOfBed = bed * 5;

    var total = numOfChair + numOfTable + numOfBed;
    return total;
}

const amountOfWood = woodCalculator(2,5,3);
console.log('You Need:',amountOfWood ,"Cubic feet wood");

//Problem3:BricCalculator

function brickCalculator(floor){

    if(floor<=10){

        let bricks1 = floor * 15 * 1000;
        return bricks1;
    }

    else if(floor<=20){

        let bricks2 = floor * 12 * 1000;
        return bricks2;
    }


    else {

        let bricks3 = floor * 10 * 1000;
        return bricks3;
    }
}

const result = brickCalculator(27);
console.log('You have to used:',result,'bricks');

//Problem 4: tinyFriend

function tinyFriend(names){

    if(names.length == 0){

        return "the array is empty";
    }

    else{
        var smallName = names[0];
        for(var i=1; i<names.length; i++){

            if(names[i].length<smallName.length){

                smallName = names[i];
            }
        }
    }
    return smallName;
}

var friendsName = tinyFriend(['Rokibul','Hasan','santo','dia','indu']);
console.log('Your short name friend:',friendsName);


