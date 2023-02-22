import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

function Recipe() {

  let params=useParams();
  const[details, setDetails]=useState({});
  const[active, setActive]=useState('instructions');


  const fetchDetails= async()=>{
    const api= await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const data=await api.json();
    setDetails(data);
  }
  
  useEffect(()=>{
    fetchDetails();
  }, [params.name]);

  return (
    <DetailWrapper>
      <div className="">
      <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
    <Info>
      <ButtonStyle className={active==='instructions' ? 'active': ''} onClick={(()=> setActive('instructions'))}>Instructions</ButtonStyle>
      <ButtonStyle className={active==='ingredients' ? 'active': ''} onClick={(()=> setActive('ingredients'))}>Ingredients</ButtonStyle>

      {active=== 'instructions' && (
        <div>
        <p dangerouslySetInnerHTML={{__html: details.instructions}}></p>
      </div>  
      )}
      {active=== 'ingredients' && (
      <ul>
        {details.extendedIngredients?.map((ingredient)=>(
            <li key={ingredient.id}>{ingredient.original}</li>
          ))}
      </ul>
      )}
    </Info>
    </DetailWrapper>
    
  );
}

const DetailWrapper=styled.div`
  margin-top: 10rem;
  margin-bottom:5rem;
  display: flex;
  img{
    margin-top:2rem;
    border-radius: 1rem;
    /* max-width: 400px; */
  }

  .active{
    background: linear-gradient(35deg, #494949, #313131);
    color: #fff;
  }

  p{
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-size: 1.2rem;
    line-height: 2.5rem;
  }

  li{
    font-size: 1.2rem;
    line-height: 2.5rem;
  }

  ul{
    margin-top: 2rem;
  }
`;

const ButtonStyle= styled.button`
  padding:1rem 2rem;
  color: #313131;
  background: #fff;
  border: 2px solid #313131;
  margin-right: 2rem;
  font-weight:600;
`;

const Info=styled.div`
  margin-left: 10rem;
`;

export default Recipe