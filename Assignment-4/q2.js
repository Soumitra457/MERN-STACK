const form=document.getElementsByTagName('form')[0]
form.addEventListener('submit',(event)=>{
    let valid=1;
    let err='';
    const name=document.querySelector("#name").value;
    if(name=='')
    {
        err="Please enter your name.";
        valid=0;
    }

    const email=document.querySelector("#email").value;
    if(email=='' )
    {
        err='Please enter your email.';
        valid=0;
    }

    const phone=document.querySelector("#phone").value;
    if(phone=='' )
    {
        err='Please enter your phone.';
        valid=0;
    }

    const genderValues=document.getElementsByName('Gender');
    let gender='';
    for(let i=0;i<genderValues.length;i++)
    {
        if(genderValues[i].checked)
        {
            gender=genderValues[i].value;
        }
    }
    if(gender=='')
    {
        err='Please select your gender.';
        valid=0;
    }

    const address =document.querySelector("#address").value;
    if(address=='')
    {
        err='Please enter your address.';
        valid=0;
    }

    const pincode =document.querySelector("#pincode").value;
    if(pincode=='')
    {
        err='Please enter your pincode.';
        valid=0;
    }
    const password =document.querySelector("#password").value;
    if(password=='' )
    {
        err='Please enter your password.';
        valid=0;
    }
    const confirmPassword =document.querySelector("#c_password").value;
    if(confirmPassword=='')
    {
        err='Please confirm your password.';
        valid=0;
    }

    if(password!=confirmPassword )
    {
        err='Passwords do not match.';
        valid=0;
    }

    const check=document.querySelector("#i_agree").checked ? document.querySelector("#i_agree").value:'';
    if(check=='')
    {
        err='Please check the agree box.';
        valid=0;
    }

    if(valid==0)
    {
        document.querySelector('#err_msg').style.display="block";
        document.querySelector('#err_msg').innerText=err;
    }

    if(valid==1)
    {
        document.querySelector('#err_msg').style.display="block";
        document.querySelector('#err_msg').style.color='white';
        let op =`Name-${name}\nEmail-${email}\nPhone-${phone}\nGender-${gender}\nAddress-${address}\nPincode-${pincode}\nPassword-${password}`
        document.querySelector('#output').innerText=op;
    }

    event.preventDefault();
}) 