const form = document.getElementById('form');
const kullaniciAdi = document.getElementById('kullaniciAdi');
const email = document.getElementById('email');
const password= document.getElementById('password');
const rePassword = document.getElementById('rePassword');


function error (input, message){
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className ='invalid-feedback';
}

function success(input){
    input.className = 'form-control is-valid';
}

function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value)){
        success(input);
    }else{
        error(input, 'Hatalı bir email adresi')
    }
};

function checkRequired(inputs){
    inputs.forEach(function(input){
        if(input.value === ''){
            error(input, `${input.id} is required`)
        }else{
            success(input)
        }
    });
};

function checkLength (input, min, max){
    if(input.value.length < min){
        error(input, `${input.id} en az ${min} karakter olmalıdır`)
    }else if(input.value.length > max){
        error(input, `${input.id} en fazla ${max} karakter olmalıdır`)
    }else{
        success(input)
    }
}

function checkPassword(input1, input2){
    if(input1.value !== input2.value){
        error(input2, 'Parolalar eşleşmedi.')
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    checkRequired([kullaniciAdi,email,password,rePassword]);
    checkEmail(email);
    checkLength(kullaniciAdi,7,15);
    checkLength(password,7,15);
    checkPassword(password,rePassword);
})