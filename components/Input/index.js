import { Input } from "@nextui-org/react";

export default function (props) {
    const { label, password, color, ref, name, onChange:_onchange } = props
    if (password) {
        return (
            <Input.Password 
                onChange={_onchange}
                name={name}
                ref={ref}
                placeholder={label}
                css={{
                    width: '100%',
                    marginTop: 10,
                }}
                color={color}
                label={label}
            />
        )
    }
    return (
        <Input
            onChange={_onchange}
            name={name}
            ref={ref}
            placeholder={label}
            css={{
                width: '100%',
                marginTop: 10
            }}
            color={color}
            label={label}
        />
    )
}