import { FunctionComponent } from "react";

interface IframePopapProps {
    iframeSrc: string
}
 
const IframePopap: FunctionComponent<IframePopapProps> = ({iframeSrc}) => {
    return ( 
        <div className="max-w-[800px] max-h-[500px] w-full h-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[40px] rounded-[20px] overflow-hidden">
            <iframe className="w-full h-full bg-white" src={iframeSrc}></iframe>
        </div>
     );
}
 
export default IframePopap;