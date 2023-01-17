import classNames from "classnames"

export default function (props){
    const {children, className: _className, shadow} = props
    return(
        <div className={classNames( _className, shadow ? 'shadow-xl': '','flex justify-center items-center')}>
            {children}
        </div>
    )
}