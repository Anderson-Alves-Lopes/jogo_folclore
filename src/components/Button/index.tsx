import * as B from './styles';

type Props = {
    label: string;
    icon?: any;
    onClick: React.MouseEventHandler<HTMLDivElement>;
}
export const Button = ({label, icon, onClick}: Props)=>{
    return (
     <B.Container onClick={onClick}>
        {icon &&
        <B.IconArea>
            <B.Icon src={icon}/>
        </B.IconArea>
        }
        <B.Label>{label}</B.Label>
     </B.Container>

    );
}