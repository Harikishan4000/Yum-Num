import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";

function Popular() {

    const [popular, setPopular] =useState([]);

    useEffect(()=>{
        getPopular();
    },[]);

    const getPopular= async()=>{

        const check = localStorage.getItem("popular");

        if(check){
            setPopular(JSON.parse(check));
        }else{
            const api=await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
            const data=await api.json();
            localStorage.setItem("popular", JSON.stringify(data.recipes));
            setPopular(data.recipes);
            console.log(data);
        }

        
    };


  return (
    <div>
                <Wrapper>
                    <h3>Popular picks</h3>
                    <Splide options={
                        {perPage: 3,
                        arrows: false,
                        pagination: false,
                        drag: 'free',
                        gap: '5rem'}
                    }>
                    {popular.map((recipe)=>{
                        return(
                            <SplideSlide key={recipe.id}>
                                <Card>
                                    <Link to={"/recipe/"+recipe.id}>
                                        <p>{recipe.title}</p>
                                        <img src={recipe.image} alt="Image" />
                                        <Gradient/>
                                    </Link>
                                </Card>
                            </SplideSlide>
                        );
                    })}
                    </Splide>
                </Wrapper>

    </div>
   
  );
}

const Wrapper= styled.div`
    margin: 4rem 0rem;
`;

const Card= styled.div`
    min-height: 25rem;
    /* max-height: 5rem; */
    overflow: hidden;
    position: relative;

    img{
        position: absolute;
        border-radius: 2rem;
        object-fit: cover;
        left:0;
        width: 100%;
        height:100%;
    }

    p{
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%, 0%);
        color: white;
        width:100%;
        text-align: center;
        font-size: 1rem;
        height:40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const Gradient=styled.div`
    z-index: 3;
    position: absolute;
    border-radius: 2rem;
    width:100%;
    height:100%;
    &:hover{
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
        
    }
`
export default Popular