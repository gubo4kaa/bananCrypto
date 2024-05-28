"use client"
import { FunctionComponent } from "react";
import { Button } from "../ui/button";
import PopupButton from "./components/PopupButton";
import Link from "next/link";
import { urls } from "@/api/apiUrl";
import { useOpenMenuStore } from "@/store/state";

interface DockProps {
    
}
 
const Dock: FunctionComponent<DockProps> = () => {
    const bears = useOpenMenuStore((state) => state.popap)
    const links = urls
    return ( 
    <div className="flex flex-col gap-[10px] max-w-content py-7">
        <Link href="/" className="flex gap-1 px-6">
        <span className="hidden text-2xl font-bold sm:block">
          <span className="text-gray-900">Template</span>
        </span>
        </Link>
        
        {
            links.map((url, key) => {
                return <PopupButton iframeSrc={url} key={key}></PopupButton>
            })
        }
    </div> 
    );
}
 
export default Dock;