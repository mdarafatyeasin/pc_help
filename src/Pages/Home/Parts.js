import useParts from "../../Hooks/useParts";
import SinglePart from "./SinglePart";
import './Parts.css'

const Parts = () => {
    const [parts] = useParts()
    // console.log(parts)

    return (
        <div className="w-4/5 parts-card m-auto">
            {
                parts.slice(0, 3).map(part =><SinglePart key={part._id} part ={part}></SinglePart>)
            }
        </div>
    );
};

export default Parts;