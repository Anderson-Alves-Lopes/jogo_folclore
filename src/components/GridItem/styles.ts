import styled from 'styled-components';

type ContainerProps = {
  showBackground:boolean;
}
export const Container = styled.div<ContainerProps>`
  background-color:${props => props.showBackground === true ? 'rgba(255,255,255,.5)' : 'rgba(0,0,0,.5)'};
  display:flex;
  align-items:center;
  justify-content:center;
  height:100px;
  border-radius:10px;
  cursor:pointer;
  @media (max-width:450px){
    height:70px;
  }
`;

type IconProps ={
  opacity?: number;
}
export const Icon = styled.img<IconProps>`
   height:50px;
   width:50px;
   opacity:${props => props.opacity ? props.opacity : 1};  
  @media (max-width:450px){
    width:40px;
    height:40px;
  }
`;