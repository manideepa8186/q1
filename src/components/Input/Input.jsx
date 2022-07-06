import React,{ useState } from 'react'

function Input({type,label,placeholder,datasetid}) {
    const specialcharacters=['~','`','!','@','#','$',' %','^','&','*','(',')','-','_','+','=','{','}','[',']','|','/','\\',':',';',',','<','>',',','.', '?']
    const [Error, setError] = useState(false)
    const [Value, setValue] = useState('')
    function ValidateEmail(email)
    {   console.log(email)
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(email.match(mailformat))return true;
        return false;
    }
    
    const handleData=(e)=>{
        setValue(e.target.value)
        
        if(type==='text'){
            if(e.target.value.trim().length==0){
                setError("please enter username")
                e.target.classList.add('error')
            }
            else{
                setError('')
                e.target.removeAttribute('class');
            }
        }
        else if(type=='email'){
            if(!ValidateEmail(e.target.value)){
                setError("Email is invalid")
                e.target.classList.add('error')
            }
            else{
                setError('')
                e.target.removeAttribute('class');
            }
        }
        else if(type=='password'){
            const password=e.target.value;
            let d=0;
            if(password.length>0)d++;
            for(let i=0;i<password.length;i++){
                if(password[i]>='a' && password[i]<'z')d++;
                else if(password[i]>='A' && password[i]<'Z')d++;
                else if(specialcharacters.includes(password[i]))d++;
            }
            //sett colors based on value of d;
            console.log(d)
            if(d==0){setError("please enter password");e.target.classList.add('error');}
            else if(d==1){e.target.removeAttribute('class');e.target.classList.add('error');setError('Password is Weak')}
            else if(d==2){e.target.removeAttribute('class');e.target.classList.add('Good');setError('Password is Good')}
            else if(d==3){e.target.removeAttribute('class');e.target.classList.add('Strong');setError('Password is Strong')}
            else {e.target.removeAttribute('class');;setError('Password is Very Strong');}
        }
    

    }
  return (
    <div>
        <label id="label" >{label}</label>
        <input id="input" type={type}  placeholder={placeholder} value={Value} onChange={handleData}/>
        <div style={{display:Error!==''?"inline":"none",color:"red",position: "relative",top: "44px",right: "263px"}}>{Error}</div>
    </div>
  )
}

export default Input;