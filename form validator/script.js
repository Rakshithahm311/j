const form = document.getElementById("form")
const username = document.getElementById("username")
const password = document.getElementById("password")
const email = document.getElementById("email")
const password2 = document.getElementById("password2")


//error messages
function showerror(input , msg){
    console.log(" show error")
    const formControl = input.parentElement
    
    formControl.className = "form-control error"
    const small = formControl.querySelector('small')
    small.innerText = msg
}

// success message

function successmsg(input){
    
    const formControl = input.parentElement
    formControl.className = "form-control success"


}

// to check empty field

function checkrequired(inputarr){
    inputarr.forEach((input)=>{
        if(input.value.trim() === ''){
            showerror(input , `${getinputId(input.id)} field required`)
        }else{
            successmsg(input)
        }
        
        
    })
}

// check feild length

function checklength(input , min , max){
    if(input.value.length < min){
        showerror(input , `it require min of ${min} characters`)
    }else if(input.value.length >  max){
        showerror(input , `it require max of ${max} charater`)
    }else{
        successmsg(input)
    }
}

// check email

function checkemail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(email.value).toLowerCase())){
            successmsg(email)
    }else{
        showerror(email , `enter a valid email`)
    }
}

// paswor match

function passwordmatch(input1 , input2){
    if(input1.value !== input2.value){
        showerror(input2 , "passwords did not match")
    }
}

function getinputId(input){
    return input.charAt(0).toUpperCase()+input.slice(1)
}


//event listeners

form.addEventListener('submit' , (e)=>{
    e.preventDefault()
    checkrequired([username , email , password , password2])
    checklength(username , 4 , 8)
    checklength(password , 4 , 8)
    checkemail(email)
    passwordmatch(password , password2)
  


})