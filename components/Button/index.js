import { Button,Loading } from "@nextui-org/react";

export default function (props) {
    const { label, outline, onPress, loading } = props
    return (
        <Button
            auto
            bordered={outline ? true : false}
            color='secondary'
            onPress={onPress}
            disabled={loading}
        >
            {
                loading ? (<Loading type="spinner" color="currentColor" size="sm" />) : label
            }
        </Button>
    )
}