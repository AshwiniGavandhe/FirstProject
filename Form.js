import React,{useState} from 'react';
import SignUpInfo from './SignUpInfo';
import PersonalInfo from './PersonalInfo';


function Form() {

    const[page,setPage]=useState(0);
    const [formData,setFormData]=useState({
        email:"",
        password:"",
        confm:"",
        firstName:"",
        middleName:"",
        lastName:"",
        gender:""
    });

    const FormTitles= ["Sign-up","sucessfully saved"];

    const PageDisplay =() =>{
        if(page===0){
            return<SignUpInfo formData={formData} setFormData={setFormData} />;
        }
        else if(page===1){
            // return<PersonalInfo formData={formData} setFormData={setFormData} />;
            alert("saved data");
            
        }
    };

  return (
 
 <div>

    {/* <div style={{width:page===0?"66.3%":page==1?"100%":"100%"}}></div> */}
    {/* <div style={{width:page===1?"70%":page=="100%" }}></div> */}
 
 <div className='form-container'>
 <div className='header'></div>
 <h1>{FormTitles[page]}</h1>
 <div className='body'>{PageDisplay()}</div>
 <div className='footer'>
<button
disabled={page==0}
 onClick={()=>
     {setPage((currPage )=> currPage -1);

}}
>

Edit</button>

<button
 disabled={page==FormTitles.length-1}
 onClick={()=> 
    {setPage((currPage )=> currPage +1);
}}
>
Save</button>

</div>
</div>
</div>

   
    
  );
}

export default Form;
