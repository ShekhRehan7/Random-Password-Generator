let user = document.getElementById('input');// User-defined length
let error =document.getElementById('error');
let check1=document.getElementById('check1');
let check2=document.getElementById('check2');
let check3=document.getElementById('check3');
let check4=document.getElementById('check4');
let show =document.getElementById('show');


function generatePassword(){

    // if ( user< 5 || user > 30) {
    //     error.innerHTML='Length must be between 5 and 30 characters.';
    // }
    

    //character sets
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()-_=+[]{}|;:,.<>?';


    
    let charSet = '';
    let password = '';

    if (check1.checked) {
        charSet += lowercaseChars;
    }
    if (check2.checked) {
        charSet += uppercaseChars;
    }
    if (check3.checked) {
        charSet += symbols;
    }
    if (check4.checked) {
        charSet += numbers;
    }

    if (charSet == '' ||user.value == '' || user.value <5 || user.value>30) {
        error.innerHTML= ' <-- Enter the length and length must be lie b/w 5 - 30 and also select at least any one type -->';
       
        show.value = 'Loading ...'

    }
    // console.log(charSet)


    // Generate the password
   else{

    for (let i = 0; i < user.value; i++) {
        const randomIndex = Math.floor(Math.random()*charSet.length);
        password += `${charSet.at(randomIndex)}`;
        // console.log(password)
    }

    show.value = password ;
    error.innerText = ''
    
   }
    
    
}


