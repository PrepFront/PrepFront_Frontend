import classNames from "classnames"

export default function (props){
    const {children, className: _className, shadow, onClick} = props
    return(
        <div onClick={onClick} className={classNames( shadow ? 'shadow-xl': '','flex justify-center items-center',_className)}>
            {children}
        </div>
    )
}