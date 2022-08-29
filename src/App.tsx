import { useEffect, useState } from 'react';
import * as C from './App.styles';
import headerImage from './assets/images/folha.png';
import RestartIcon from '../src/assets/images/desfazer.png';
import StartIcon from '../src/assets/images/start.png';
import { InfoItem } from './components/InfoItem';
import { Button } from './components/Button';
import { GridItemType } from './types/GridItemType';
import {items} from './data/items';
import { GridItem } from './components/GridItem';
import { formatTimeElepsed } from './helpers/formatTimeElepsed';


const App = () =>{
  const [playing, setPlaying] = useState<boolean>(false);//para seber que o jogo está rolando
  const [timeElapsed, setTimeElapsed] = useState<number>(0); //tempo de jogo
  const [moveCount, setMoveCount] = useState<number>(0); //quantidade de movimentos
  const [shownCount, setShownCount] = useState<number>(0);//quantidades de cartas mostrando
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);
  useEffect(() => resetAndCreateGrid(), []);
  useEffect(()=>{
    const timer = setInterval(()=>{
      if(playing){
       setTimeElapsed(timeElapsed + 1);
      }
    },1000);
  
    return() => clearInterval(timer);
  },[playing,timeElapsed]);
  useEffect(()=>{
     if(shownCount === 2){
      let opened = gridItems.filter(item => item.shown === true);
      if(opened.length === 2){

        if(opened[0].item === opened[1].item){
          let tempGrid = [...gridItems];
          for(let i in tempGrid){
            if(tempGrid[i].shown){
              tempGrid[i].permanentShown = true;
              tempGrid[i].shown = false;
            }
          }
          setGridItems(tempGrid);
          setShownCount(0);
        }else{
          setTimeout(()=>{
            let tempGrid = [...gridItems];
            for(let i in tempGrid){
              tempGrid[i].shown= false;
            }
            setGridItems(tempGrid);
            setShownCount(0);    
          },1000)
        }
        setMoveCount(moveCount => moveCount +1);
      }
     }
  },[shownCount, gridItems]);
  useEffect(()=>{
    if(moveCount > 0 && gridItems.every(item => item.permanentShown === true)){
         setPlaying(false);
    }
  },[moveCount, gridItems]);
  const resetAndCreateGrid = ()=>{
         setTimeElapsed(0);
         setMoveCount(0);
         setShownCount(0);
         let tempGrid: GridItemType[] = [];
        for(let i = 0; i < (items.length * 2); i++){
             tempGrid.push({
              item: null,
              shown: false,
              permanentShown:false,
             });
        }
        
        for(let w =0; w < 2; w++){
         for(let i = 0; i < items.length; i++){
          let pos = -1;
          while(pos < 0 || tempGrid[pos].item !== null){
            pos = Math.floor(Math.random() * (items.length * 2));
          }
          
         
          tempGrid[pos].item = i;
         }

        }

        setGridItems(tempGrid);
         setPlaying(false);
  }
  const startPlay = ()=>{
    
   if(playing === false && timeElapsed === 0){
    
     
        setPlaying(true);
   }

  }
  const handleItemClick = (index: number) =>{
      if(playing && index !== null && shownCount < 2){
        let tempGrid = [...gridItems];
         
        if(tempGrid[index].permanentShown === false && tempGrid[index].shown === false){
            tempGrid[index].shown = true;
            setShownCount(shownCount + 1);
        }
        setGridItems(tempGrid);
      }
  }
  return(

    <div >
      <C.Main >
      <C.Header >
      
        <C.LogoLink href="">
          <C.Img  src={headerImage}  alt=""/>
          <div>
            <h1>Folclore brasileiro</h1>
            <p>jogo da memória</p>
            </div>
           <C.Img style={{transform:'rotate(-40deg)'}} src={headerImage}  alt=""/>
        </C.LogoLink>
        <C.Ul>
          <C.Li><a href="/">Home</a></C.Li>
          <C.Li><a href="/">Home</a></C.Li>
          <C.Li><a href="/">Home</a></C.Li>
        </C.Ul>
       
      </C.Header>
      
      {/* Container Principal */}
      <C.Container>
      <C.Info>
      <C.InfoArea>
        
        <InfoItem label="Tempo" value={formatTimeElepsed(timeElapsed)} />
        <InfoItem label="Movimentos" value={moveCount.toString()} />
      </C.InfoArea>
      <C.InfoArea>
      <Button label="Iniciar" icon={StartIcon} onClick={startPlay}/>
      <Button label="Reiniciar" icon={RestartIcon} onClick={resetAndCreateGrid}  />
      </C.InfoArea>
      </C.Info>
      <C.GridArea>
        <C.Grid>
         {gridItems.map((item, index)=>(
           <GridItem 
           key={index}
           item={item}
           onClick={()=> handleItemClick(index)}
           />
         ))}
        </C.Grid>
      </C.GridArea>
      </C.Container>
     </C.Main>
    </div>
  );
}
export default App;
