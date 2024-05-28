"use client"

import { FunctionComponent, useRef, useState } from "react";
import sha256 from "sha256";
import { Button } from "../ui/button";

interface AreaSha256Props {
    
}
 
const AreaSha256: FunctionComponent<AreaSha256Props> = () => {
    const [text, setText] = useState('');
    const [hash, setHash] = useState<string | null>(null);

  function generateHash(s: string) {
    setHash(sha256(s))
  }

  return (
    <div className="flex flex-col gap-[20px] w-full">
      <textarea
      className="rounded-[10px] p-[7px]"
    //   value={text}
        onChange={(e) => e.target.value ? setText(e.target.value) : setHash(null)}
      />
      {hash && <p>sha256: {hash}</p>}
      <Button onClick={() => (generateHash(text))}>Generate sha256</Button>
    </div>
  );
}
 
export default AreaSha256;