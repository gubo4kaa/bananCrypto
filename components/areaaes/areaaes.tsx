"use client"

import { FunctionComponent, useRef, useState } from "react";
import sha256 from "sha256";
import { Button } from "../ui/button";

interface AreaaesProps {
    
}
 
const Areaaes: FunctionComponent<AreaaesProps> = () => {
    const [text, setText] = useState('');
    const [hash, setHash] = useState<string | null>(null);
    const [keyClient, setKey] = useState<string | null>(null);

  function generateHash(s: string, key?: string | null) {
    if(key) {
      setHash(sha256(s + key))
    } else {
      setHash(sha256(s))
    }
  }

  return (
    <div className="flex flex-col gap-[20px] w-full">
      <textarea
      className="rounded-[10px] p-[7px]"
        onChange={(e) => e.target.value ? setText(e.target.value) : setHash(null)}
      />
      <input onChange={(e) => e.target.value.length > 0 ? setKey(e.target.value) : setKey(null)} className="rounded-[10px] p-[7px]" type="text" placeholder="key"/>
      {hash && <p>aes: {hash}</p>}
      <Button onClick={() => (generateHash(text, keyClient))}>Generate aes</Button>
    </div>
  );
}
 
export default Areaaes;