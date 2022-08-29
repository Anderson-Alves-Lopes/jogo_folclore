import { GridItemType } from '../../types/GridItemType';
import folha from '../../assets/images/folha.png';
import * as GR from './styles';
import {items} from '../../data/items';

type Props ={
    item:GridItemType,
    onClick: ()=> void,
}
export const GridItem = ({item, onClick}: Props) =>{
    return (

        <GR.Container
         showBackground= {item.permanentShown || item.shown}
         onClick={onClick}
        >
          {item.permanentShown === false && item.shown === false &&
           
           <GR.Icon opacity={.5} src={folha} alt=""/> 
          }
          {(item.permanentShown || item.shown) && item.item !== null &&
            <GR.Icon src={items[item.item].icon} alt="" />
          }
        </GR.Container>
    );
}