import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { errorfunction } from './tostify';
import Cookies from 'js-cookie';
import axios from 'axios'
export const UserContext = React.createContext();

export default function ContextProvider({ children }){

      const [ud, setud] = useState(false);
      const [loader,setloader]=useState(false);
      const nav=useNavigate();

const fun=async ()=>{
     
  try{
    const token=Cookies.get('token');
    if(token)
        await axios.post(`http://localhost:5000/v1/verify`,{"token":token}).then((result)=>{

            if(result.data.status)
            {

            setud(result.data.data);
            setTimeout(()=>setloader(true),100);

          }
          else
          {
            console.log(result.data.msg);
            errorfunction("Your secssion expaired Login again");
            Cookies.remove('token');
            nav('/login');

          }
        })
        
     

  }
  catch(err){
      console.log(err);
  }

}

       

      return (
        <UserContext.Provider value={{ud,fun,loader}} >
          {children}
        </UserContext.Provider>
      );
    }
    