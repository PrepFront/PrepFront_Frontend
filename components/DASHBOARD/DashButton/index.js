import classNames from "classnames"
import Box from "../../../Containers/Box"

export default function (props) {
    const { Icon, name, onClick } = props
    console.log(name)
    return (
        <Box onClick = {onClick} className = {classNames(' py-2 px-4 rounded-full bg-white cursor-pointer transition-all duration-300 ease-in-out group-hover:visible')}>
            <Icon/>
            <h1 className="font-medium text-dashboard ml-2">{name}</h1>
        </Box>
    )
}