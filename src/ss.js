import styled, {css } from "styled-components";
import grid from "./assets/grid.jpg" ;
import wavyGrid from "./assets/wavyGrid.jpg" ;

export const Colors = {
    beige: '#F8F7F6',
    lav1: '#d4ccd6',
    lav2: '#bfb3c2',
    lav3: '#aa99ae',
    blush: '#dbbbaf',
    aqua:'#A0BABA',
    grey1: '#D9DDDC',
    grey2: '#A6A6A6',
    grey3: '#333333',
    grey4: '#222222',
    black: '#000000',
    orange: '#ff6700',
    white: '#ffffff'
}

export const Navig = styled.div `
   
    display: flex ;
    opacity: 40%;
    background-image:  url(${grid});
    background-size: 500px;
    background-repeat: space;
    background-position: center;
    //background-attachment: fixed;
    //background-position: round;
    width:  45%;
    height: 45%;
    justify-content: space-between;
    align-items: center;
    position: relative;
    vertical-align: middle;
    margin: 0 !important;
    height: 8vh;   
    width: 100%;
`

export const NavSpace = styled.div `
    display: flex ;
    flex-direction: ${(props) => props.direc? props.direc: 'row' };
    background-color: ${(props) => props.color? props.color: Colors.black };
    align-items: center;
    text-align: left;
    height: 8vh;
    width: 100%;
    position: relative;
`

export const Space = styled.div `
    display: flex ;
    flex-direction: ${(props) => props.direc? props.direc: 'column' };
    background-color: ${(props) => props.color? props.color: Colors.black };
    align-items: center;
    text-align: left;
    height: 52vh;
    width: 100%;
    position: relative;
`

export const MainSpace = styled.div `
    display: flex ;
    gap: 0px;
    flex-direction: ${(props) => props.direc? props.direc: 'column' };
    background-color: ${(props) => props.color? props.color: Colors.black };
    align-items: center;
    text-align: left;
    //justify-content: center; --> vertical
    height: 210vh;
    width: 100%; 
    position: relative;
    top: 0px;

    padding 0px;

`

export const TfgSpace = styled.div `
    display: flex ;
    gap: 0px;
    flex-direction: ${(props) => props.direc? props.direc: 'column' };
    background-color: ${(props) => props.color? props.color: Colors.black };
    align-items: center;
    text-align: left;
    height: 50vh;
    width: 100%; 
    position: relative;
    margin-bottom: 20px;
`
export const TfgSpace2 = styled.div `
    display: flex ;
    //gap: 0px;
    align-items: center;
    margin: 20px;
    flex-direction: ${(props) => props.direc? props.direc: 'column' };
    background-color: ${(props) => props.color? props.color: Colors.black };
    text-align: left;
    height: 100vh;
    width: 100%; 
    //position: relative;
`

export const Number = styled.text `
    display: flex;
    background: -webkit-linear-gradient( ${Colors.white}, ${Colors.grey3});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 200px;
    color: ${(props) => props.color? props.color: Colors.grey2 };
    padding: 15px;
    font-family: 'Helvetica';
    text-border: 2px dotted grey ;
    
`

export const GoodHeading = styled.text `
    display: flex;
    font-size: 30px;
    color: ${(props) => props.color? props.color: Colors.grey1 };
    padding: 15px;
    font-family: 'Helvetica';
    
`
export const GoodPara = styled.text `
    display: flex;
    font-size: 17px;
    color: ${(props) => props.color? props.color: Colors.grey2 };
    padding: 15px;
    letter-spacing: 1px;
    font-family: 'Helvetica';
    
`

export const GoodSpace = styled.div `
    display: flex ;
    margin: 10 px;
    flex-direction: row;
    background-color: ${(props) => props.color? props.color: Colors.black };
    padding: 8px;
    //vertical-align: bottom;
    height: 43%;
    width: 80%;
    border-radius: 4px;
    &:hover{
        background-color: ${Colors.black};
        border: 1px dotted white ;
        border-color: ${Colors.grey1};
        transform: scale(1.01);
    }   
`


export const InnerGood = styled.div `
    display: flex ;
    margin: 10 px;
    flex-direction: column;
    background-color: ${(props) => props.color? props.color: Colors.black };
    padding: 10px;
    padding-top: 40px;
    //align-items: right;
    width: 80%;
  
`

export const ProjectSpace = styled.div `
    display: flex ;
    padding-top: 20px;
    grid-gap: 2px;
    flex-direction: ${(props) => props.direc? props.direc: 'column' };
    background-color: ${(props) => props.color? props.color: Colors.black };
    align-items: center;
    text-align: left;
    height: 150vh;
    width: 100%; 
    position: relative;
`

export const FooterSpace = styled.div `
    display: flex ;
    bottom: 0px;
    background-color: ${(props) => props.color? props.color: Colors.black };
    flex-direction: ${(props) => props.direc? props.direc: 'column' };
    /* padding: 20px;
    padding-top: 100px; */
    //justify-content: center;
    align-items: center;
    text-align: left;
    height: 10vh;
    width: 100%;
    position: absolute;
`


export const ReelSpace = styled.div `
    display: flex ;
    margin: 10px;
    background-color: ${(props) => props.color? props.color: Colors.black };
    flex-direction: ${(props) => props.direc? props.direc: 'row' };
    align-items: center;
    justify-content: space-between; 
    text-align: left;
    height: 20vh;
    width: 80%;
    position: relative;
`

export const Box = styled.div `
    display: flex ;
    margin: 10 px;
    flex-direction: column;
    //align-items: bottom;
    background-color: ${(props) => props.color? props.color: Colors.grey4 };
    padding: 10px;
    padding-top: 40px;
    //vertical-align: bottom;
    height: 100%;
    width: 20%;
    border-radius: 4px;
    &:hover{
        background-color: ${Colors.grey4};
        border: 1px solid white ;
        border-color: ${Colors.grey1};
        transform: scale(1.01);
        
    }

    
`

export const Space2 = styled.div `
    display: flex ;
    flex-direction: ${(props) => props.direc? props.direc: 'row' };
    align-items: center;
    background-color: ${(props) => props.color? props.color: Colors.black };
    padding: 10px;
    vertical-align: middle;
    height: 150px;
    width: 500px;
    justify-content: center;
    
`


export const Space3 = styled.div `
    display: flex ;
    overflow: auto;
    flex-direction: ${(props) => props.direc? props.direc: 'row' };
    align-items: center;
    background-color: ${(props) => props.color? props.color: Colors.black };
    padding: 10px;
    vertical-align: middle;
    //height: 40vh;
    justify-content: center;

`

export const Space4 = styled.div `
    display: flex ;
    grid-gap: 2px;
    padding-top: 12px;
    padding-bottom: 15px;
    //position: relative;
    //overflow: auto;
    flex-direction: ${(props) => props.direc? props.direc: 'column' };
    align-items: center;
    background-color: ${(props) => props.color? props.color: Colors.black };
    padding: 10px;
    vertical-align: middle;
    width: 80%;
    //height: 100vh;
    justify-content: space-evenly;

`



export const SkillSpace = styled.div `
    display: flex ;
    flex-direction: ${(props) => props.direc? props.direc: 'row' };
    background-color: ${(props) => props.color? props.color: Colors.black };
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    grid-gap: 0 px;
    height: ${(props) => props.height? props.height: '14vh' }; 
    width: 100%;
    position: relative;
`


export const SkillBg = styled.div `
    display: flex ;
    flex-direction: ${(props) => props.direc? props.direc: 'column' };
    background-color: ${(props) => props.color? props.color: Colors.black };
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    grid-gap: 0 px;
    // height: ${(props) => props.height? props.height: '14vh' }; 
    // width: 100%;
    // position: relative;
    // padding-bottom: 15px; 
    
`


export const SkillGrid = styled.div `
   
    display: flex ;
    opacity: 40%;
    background-image:  url(${grid});
    background-attachment: fixed;

    background-size: cover ;
    //background-size: 400px;
    background-repeat: no-repeat;
    background-position: center;
    justify-content: right;
    align-items: center;
    position: relative;
    vertical-align: middle;
    margin: 0 !important;
    height: 20vh;   
    width: 100%;
`

export const SingleSkill = styled.div `
   
    display: flex ;
    flex-direction: column;
    
    justify-content: center;
    align-items: center;
    position: relative;
    vertical-align: middle;
    /* height: 20vh;   
    width: 100%; */
    width: 0.5vw;
    //height:100px;
    transition: all 0.6s ease;
    transform-style: preserve-3d; 
    &:hover{
        transform: scale(1.125);
    }

`


export const WaveSpace = styled.div `
    display: flex ;
    flex-direction: ${(props) => props.direc? props.direc: 'row' };
    background-color: ${(props) => props.color? props.color: Colors.black };
    align-items: center;
    justify-content: space-evenly;
    text-align: left;
    grid-gap: 0 px;
    height: ${(props) => props.height? props.height: '30vh' }; 
    width: 100%;
    position: relative;
    padding-bottom: 15px; 
    
`


export const WavyGrid = styled.div `
   
    display: flex ;
    opacity: 20%;
    background-image:  url(${wavyGrid});
    background-attachment: fixed;
    background-size: cover ;
    //background-size: 400px;
    background-repeat: no-repeat;
    background-position: center;
    justify-content: right;
    align-items: center;
    position: relative;
    vertical-align: middle;
    margin: 0 !important;
    height: 28vh;   
    width: 100%;
`



export const TextBanner = styled.div `
    display: flex ;
    background-color: ${Colors.lav2};
    padding-left: 10px;
    padding-right: 10px;
    justify-content: center
    vertical-align: middle;
    width: 100%;
    height: 80px;
`

export const TextSpace = styled.div `

    display: flex ;
    flex-direction: ${(props) => props.direc? props.direc: 'column' };
    padding: 10px;
    //background-color: ${(props) => props.color? props.color: Colors.blush };
    //justify-content: left;
    //vertical-align: middle;
    height: 40%;
`

// export const Image= styled.div `
    
//     background-image: url(${anya});
//     background-size: 300px;
//     background-repeat: no-repeat;
//     background-position: center;
//     width:  45%;
//     height: 45%;
// `





export const Text1 = styled.text `
    font-size: 38px;
    padding: 10px;
    //background: -webkit-linear-gradient(#FF6700, #C811E0, #7F11E0);
    background: -webkit-linear-gradient( ${Colors.grey1}, ${Colors.grey3});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    /* background: linear-gradient(to bottom , rgba(255,103,0,1), rgba(127,17,224,1), );
    background-clip: text;  */
    //color: ${(props) => props.color? props.color: Colors.beige };
    font-family: 'Helvetica', cursive;
    letter-spacing: 2px;
    

`

export const Text2 = styled.text `
    display: flex;
    background: -webkit-linear-gradient( ${Colors.white}, ${Colors.grey3});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: ${(props) => props.size? props.size: '25px'};
    color: ${(props) => props.color? props.color: Colors.black };
    padding: 15px;
    font-family: 'Helvetica';
`

export const Text3 = styled.text `
    font-size: 18px;
    //color: black;
    color: ${(props) => props.color? props.color: Colors.grey2 };
    padding: 10px;
    font-family: 'Helvetica';

    &:hover{
        color: ${Colors.grey1};
    }
    //letter-spacing: 2px;
    //font-style: Georgia;
    /* &:hover {
        color: black;
    } */
`

export const Text4 = styled.text `
    font-size: 15px;
    color: ${(props) => props.color? props.color: Colors.grey2 };
    padding: 15px;
    font-family: 'Helvetica';
`

export const Text5 = styled.text `
    font-size: 12px;
    // text-align: justify;
    display: flex;
    color: ${(props) => props.color? props.color: Colors.grey2 };
    padding: 10px;
    line-height: 18px;
    font-family: 'Helvetica';
`

export const BigText = styled.text `
    display: flex;
    font-size: 48px;
    color: ${(props) => props.color? props.color: Colors.white };
    padding: 15px;
    font-family: 'Helvetica';
`



export const FooterStyle = styled.div `
    background-color: ${Colors.beige};
    display: flex ;
    //padding: 10px;
    //justify-content: space-between;
    //vertical-align: middle;
    //height: 20vh;    
`


export const ProjectItem = styled.div `
    margin-top: 20px;
    //justify-content: center;
    //flex-direction: column;
    align-self: start;
    vertical-align: middle;
    text-align: left;
    background-color: ${(props) => props.color? props.color: Colors.orange };
    padding: 20px;
    opacity: ${(props) => props.opac? props.opac: 1 };
    height: 30%;
    width: 90%;
    justify-content: space-between;
    vertical-align: middle;
`

export const Card = styled.div `
    margin-top: 10px;
    overflow: auto;
    display: flex;
    margin: 20px;
    align-items: center;
    flex-direction: column;
    background-color: ${(props) => props.color? props.color: Colors.grey3};
    padding: 15px;
    border-radius: 15px; 
    height: 20%;
    width: 50%;
    justify-content: middle;
    //horizontal-align: middle;
    transition: all 0.6s ease;
    transform-style: preserve-3d; 
    &:hover{
        transform: rotateY(180deg);
    }
    .back {
        transform: rotateY(180deg);
    }
    .front, .back {
        position: absolute; 
        backface-visibility: hidden;
        height: 200px;
        width: 200px;
    }
`

export const FrontCard = styled.div `
    //background-color: ${(props) => props.color? props.color: Colors.beige};
    background-color: ${Colors.blush};
    position: relative;
    display: flex;
    overflow: auto;
    //opacity: ${(props) => props.opac? props.opac: 1 };
    height: auto;
    width: 50vw;
    /* align-content: center; 
    justify-content: center;
    text-align: middle; */
`

export const Carte = styled.div `
    margin-top: 10px;
    //overflow: auto;
    display: flex;
    margin: 20px;
    align-items: left;
    flex-direction: column;
    background-color: ${(props) => props.color? props.color: Colors.grey4};
    padding: 15px;
    border-radius: 8px; 
    //height: 30%;
    height: 300px;
    width: 200px;
    justify-content: middle;
    //horizontal-align: middle;
    transition: all 0.6s ease;
    transform-style: preserve-3d; 
    &:hover{
        /* background-color: ${Colors.grey4};
        border: 2px dotted white ;
        border-color: ${Colors.beige}; */
        
        background-color: ${Colors.grey4};
        border: 1px solid white ;
        border-color: ${Colors.grey1};
        transform: scale(1.01);
        
    }
    
`

export const SmallCarte = styled.div `
    margin-top: 0px;
    margin:1px;
    overflow: auto;
    display: flex;
    margin: 20px;
    align-items: center;
    flex-direction: column;
    background-color: ${(props) => props.color? props.color: Colors.grey4};
    padding-top: 0px;
    padding-bottom: 0px;
    padding: 1px;
    border-radius: 12px; 
    width: 200px;
    
    height: ${(props) => props.height? props.height: '50px'};
    justify-content: center;
    align-items: middle;
    transition: all 0.3s ease-in-out;
    tranform: translate3d(0, -100%,0);
    transform-style: preserve-3d; 

    &:hover{
        background-color: ${Colors.grey4};
        border: 2px dotted white ;
        border-color: ${Colors.beige};
        transform: scale(1.125);
    }
    
`

export const LinkStyle = styled.a `
    font-size: ${(props) => props.size? props.size : '20x'};
    color: ${(props) => props.color? props.color : Colors.white};
    text-decoration: none;
    text-align: center;
    letter-spacing: 1px;
    font-family:  Helvetica;
    margin: 10px;
    &:link, 
    &:visited{
        color: ${Colors.white};
    }
    &:hover,
    &:focus{
    color: ${Colors.grey2};
    }
    &:active{
    color: ${Colors.white};
    }
    // marginTop: '400px';
    // position: 'absolute';
`