import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({...rest}:ButtonProps){
    return(
        <button {...rest}/>
    );
}