import React, {useState} from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Search() {

    const [input, setInput]=useState("");
    const nav=useNavigate();


    const submitHandler=(e)=>{
        e.preventDefault();
        nav('/searched/'+input);
    }

  return (
    <FormStyle onSubmit={submitHandler}>
        <div className="">
            <FaSearch/>
             <input onChange= {(e)=> setInput(e.target.value)} type="text" value={input}/>
        </div>
    </FormStyle>
  )
}

const FormStyle=styled.form`
    margin: 0rem 15rem;
    
    div{
        position: relative;
        width: 100%;
        &:hover{
            filter: brightness(1.5);
        }
    }

    input{
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: #fff;
        padding: 1rem 3rem;
        border-radius: 1rem;
        outline: none;
        width: 100%;
        
    }

    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: #fff;
    }
`;

export default Search