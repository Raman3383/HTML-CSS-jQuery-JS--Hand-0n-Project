const button = document.querySelector("button");
const firstName = document.getElementById("text-input1");
const middleName = document.getElementById("text-input2");
const lastName = document.getElementById("text-input3");
const ulelement = document.getElementById("list-item");
const ulelement2 = document.getElementById("list-item2");
const number = document.querySelector("#text-input4");

function arrangeFML(){
    if( firstName.value ==='' || lastName.value===''){
        alert('Enter first Name and Last name');
    }
    else{
        var fName = firstName.value;
        var mName = middleName.value;
        var lName = lastName.value;
        
        var lielement = document.createElement("li")
        lielement.textContent = `${fName} ${mName} ${lName}`;
        ulelement.appendChild(lielement);
     }
    firstName.value='';
    middleName.value='';
    lastName.value='';
}

function arrangeLMF(){
    if( firstName.value ==='' || lastName.value===''){
        alert('Enter first Name and Last name');
    }
    else{
        var fName = firstName.value;
        var mName = middleName.value;
        var lName = lastName.value;
        
        var lielement = document.createElement("li")
        lielement.textContent = `${lName} ${mName} ${fName}`;
        ulelement.appendChild(lielement);
     }
    firstName.value='';
    middleName.value='';
    lastName.value='';
}

function checkDivisibility(){
    var a = number.value;
    var divisor = 2;
    
    if(a ===''){
        alert('Enter a number for which you want to check Divisibility')
    }else{
        if(a % divisor === 0){
            var result =  a + " is divisible by 2";
            var lielement = document.createElement("li")
            lielement.innerHTML = result;
            ulelement2.appendChild(lielement);
         }
         else{
             alert(a + ' is not divisible by 2');
         } 
    }   
}

