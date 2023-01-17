import { Input } from "@nextui-org/react";

export default function (props) {
    const { label, password, color } = props
    if (password) {
        return (
            <Input.Password
                placeholder={label}
                css={{
                    width: '100%',
                    marginTop: 10,
                }}
                color={color}
            />
        )
    }
    return (
        <Input
            placeholder={label}
            css={{
                width: '100%',
                marginTop: 10
            }}
            color={color}
        />
    )
}