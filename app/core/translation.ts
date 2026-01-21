import { ITranslation } from "../types/types";

export default async function handleTranslate(args:ITranslation){
    const res = await fetch('/api/translate', {
        method: 'POST',
        body: JSON.stringify({
            text: [args.text],
            target_lang: args.target
        })
    });
    const json = await res.json();
    
    return json;
}