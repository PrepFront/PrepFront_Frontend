import { Button } from "@nextui-org/react";

export default function(props){
    const {label, outline, onPress} = props
    return (
        <Button
            auto
            bordered={outline?true:false}
            color='secondary'
            onClick={onPress}
        >
            {label}
        </Button>
    )
}