import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import React from 'react'

function Catagory() {
  return (
    <div>
        <List>
            <Slink to={'/cuisine/Italian'}>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </Slink>
            <Slink to={'/cuisine/Indian'}>
                <FaHamburger/>
                <h4>Indian</h4>
            </Slink>
            <Slink to={'/cuisine/Korean'}>
                <GiNoodles/>
                <h4>Korean</h4>
            </Slink>
            <Slink to={'/cuisine/Japanese'}>
                <GiChopsticks/>
                <h4>Japanese</h4>
            </Slink>
        </List>
    </div>
    
  )
}

const List=styled.div`
    display: flex;
    justify-content:center;
    gap: 3rem;    
`;
const Slink=styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius:50%;
    margin-right: 2rem;
    text-decoration:none;
    width:6rem;
    height: 6rem;
    background: linear-gradient(35deg, #494949, #313131);
    cursor: pointer;
    transform: scale(0.8);
    &:hover{
        filter: brightness(1.5);
        /* transform: scale(1.00003); */
    }

    &.active{
        background:linear-gradient(to right, #7a5f3c, #a2a05bad);
    }

    h4{
        padding-top:7px;
        color: #fff;
        font-size: 0.8rem;
    }
    svg{
        color: #fff;
        font-size: 1.5rem;
    }
`;

export default Catagory
