import Loader from "./loader";

export default function WaitForData({
    objects,
    children
}) {
    const loading = objects.reduce((isLoading, obj) => {
        return isLoading || obj.isLoading
    }, false)

    if (loading) {
        return <Loader message={'Content is being loaded'}/>
    }

    return (
        <>
            {children}
        </>
    )
}