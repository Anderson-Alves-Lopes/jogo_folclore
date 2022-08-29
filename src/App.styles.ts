import styled from 'styled-components';

export const Main = styled.main`
  padding:0 10px;
  display:flex;
  flex-direction: column;
  align-items: center;
  gap:50px;

  @media (max-width:900px){
    gap:30px;
  }
`;


export const Header = styled.header`
   width:100%;
   height:60px;
   display:flex;
   justify-content:center;
   padding-top:20px;

 
`;

export const Img = styled.img`
  width:40px;
  height:40px;
  transform: rotate(40deg);
  @media (max-width:350px){
    display:none;
  }
  
`;


export const LogoLink = styled.a`
   display:flex;
   justify-content: center;
   align-items: center;
   text-decoration:none;
   color:#000;
   font-family:cursive,sans-serif;
  
  h1{
    font-weight:normal; 
    font-style:italic;
  } 
  p{
    font-size:15px;
    position:relative;
    margin-top:-30px;
    margin-left:100px;
  }
  @media (max-width:450px){
    h1{
      font-size:27px;
    }
  }
`;
export const Ul =styled.ul`
  display:flex;
  list-style:none;
  justify-content:space-between;
  align-items:center;
  display: none;
`;
export const Li = styled.li`
   padding:0 20px;

  a{
    color:#fff;
    text-decoration:none;
    font-size:20px;
    font-family:cursive,sans-serif;
  }
`;

export const Container = styled.div`
   max-width:1140px;
   width:100%;
   margin:auto;
   display:flex;
   align-items:center;
   
   @media (max-width:900px){
    flex-direction:column;
    
   }
`;
export const Info = styled.div`
  display:flex;
  flex-direction:column;
  width:auto;
  
 @media (max-width){
   margin-bottom:30px;
   align-items:center;
   justify-content: center;
   
 }
`;

export const InfoArea = styled.div`
 margin:10px 0;
 width:100%;

@media (max-width:900px){
  display:flex;
  justify-content:space-around;
  text-align:center;
  gap:10px;
}
@media (max-width:350px){
  gap:35px;
}
`;

export const GridArea = styled.div`
  width:100%;
  display:flex;
  justify-content: center;
  
 
`;

export const Grid = styled.div`
  width:90%;
  display:grid;
  grid-template-columns:repeat(6,1fr);
  gap:10px;
 
 @media (max-width:700px){
  grid-template-columns:repeat(4, 1fr);
 }
`;