import styled from 'styled-components';


export const Container = styled.div`
  width:200px;
  height:50px;
  display:flex;
  background-color:#1550ff;
  border-radius:10px;
  cursor:pointer;
  opacity:1;
  transition:all ease .4s;
  margin:15px 0;
  &:hover{
    opacity:.7;
  }
  @media (max-width: 500px){
    width:50%;
    
  }
  
  
`;

export const IconArea = styled.div`
  height: inherit;
  display:flex;
  justify-content:center;
  align-items:center;
  border-right:1px solid rgba(255,255,255,.3);
  padding:0 15px;
  @media (max-width: 350px){
    display:none;
    
  }

`;

export const Icon = styled.img`
 width:30px;
 height:30px;


`;

export const Label = styled.div`
  flex:1;
  height:inherit;
  display:flex;
  padding:0 20px;
  justify-content:center;
  align-items:center;
  color:#fff;
  @media (max-width: 350px){
    padding:0 25px;
    
  }

`;