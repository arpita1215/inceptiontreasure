import React , {useEffect , useState} from "react";
import Social from './Social'
import swal from 'sweetalert';

const Contact = () => {
 
  const[userData, setuserData] = useState({name:"",email:"",phone:"",work:"",message:""});

  const  userContact = async() => {
    try {
      const res= await fetch('/getdata',{
        method:"GET",
        headers:{
          "Content-Type":"application/json"
        },
      });


      const data= await res.json();
      setuserData({...userData ,name:data.name, email: data.email, phone: data.phone, work: data.work});

      if(!res.status===200){
        const error = new Error(res.error);
        throw error;
      }

    } catch (error) {
      console.log(error);
    }
  }

useEffect(()=>{
  userContact();
},[]);

  // we are storing data in states
  const handleInputs=(e)=>{
    const name = e.target.name;
    const value= e.target.value;

    setuserData({...userData , [name]: value});

  }

  // Send the data to the backend
  const contactForm = async(e) =>{
    e.preventDefault();

    const{name,email,phone,work,message} = userData;

    const res = await fetch("/contact",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,email,phone,work,message
      })
    });

    const data = await res.json();

    if(!data){
      swal({
        title: "message not send",
        icon: "error",
      });
    
    }else if(userData.message===""){
      swal({
        title: "Please Write a message",
        icon: "warning",
      });
    }
    else{
      swal({
        title: "Message Sent Successfully",
        icon: "success",
      });
      setuserData({...userData ,message:""});
    }

  }

  return (
    <>
      <div className='contactbody'>
        <div className='container'>
          <div className='form-container'>
            <div className='left-container'>
              <div className='left-inner-container'>
                <h2>Let's Chat</h2>
                <p>
                  Whether you have a question, want to start a project or simply
                  want to connect.
                </p>
                <br />
                <p>Feel free to send me a message in the contact form</p>
              </div>
            </div>
            <div className='right-container'>
              <div className='right-inner-container'>
                <form method="POST">
                  <h2 className='lg-view'>Contact</h2>
                  <h2 className='sm-view'>Let's Chat</h2>
                  <p>* Required</p>

                  <input type='text' value={userData.name} onChange={handleInputs} name="name" placeholder='Name *' />
                  <input type='email' value={userData.email} onChange={handleInputs} name="email" placeholder='Email *' />
                  <input type='text'   value={userData.work} onChange={handleInputs} name="work" placeholder='Work'/>
                  <input type='phone' value={userData.phone} onChange={handleInputs} name="phone" placeholder='Phone' />
                  <textarea rows='4' value={userData.message}  onChange={handleInputs} name="message" placeholder='Message' ></textarea>
                  <button type="submit" onClick={contactForm} style={{marginTop:"10px"}}>Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Social/>
      </div>
    </>
  );
};

export default Contact;
