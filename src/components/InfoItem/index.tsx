
import * as I from './styles';

type Props = {
    label:string;
    value:string;
}
export const InfoItem = ({label, value}: Props)=>{
    return(
        <I.Container>
           <I.Label>{label}</I.Label>
           <I.Value>{value}</I.Value>
        </I.Container>
    )
}