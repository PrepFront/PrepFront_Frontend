import  {Cards}  from "../../components/Cards";
import SampleImage from '../../public/SampleImage.jpg'

export default function(props){
    return(
        <div style={{backgroundColor : 'red'}} className="flex flex-col justify-center items-center m-5">
            <Cards Image={SampleImage}/>
        </div>
    )
}