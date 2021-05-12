import React from "react";

import './CheckIn.css';

interface inputProps {
    inputValue:         string,
    inputPlaceholder:   string,
    inputType:          string,
    inputMinLength:     number,
    inputMaxLength:     number,
}

export const Input: React.FC<inputProps> = ({
                                                inputValue,
                                                inputPlaceholder,
                                                inputType,
                                                inputMinLength,
                                                inputMaxLength
                                            }
) => {

    const [input, setInput] = React.useState<string>('');
    const inputChange = ( input: React.ChangeEvent<HTMLInputElement> ) => {
        setInput( input.currentTarget.value ) }
    inputValue = input
    console.log(inputValue)

    return (
        <input
            onChange =  { inputChange }
            value=      { input }
            placeholder={ inputPlaceholder}
            type =      { inputType }
            minLength = { inputMinLength }
            maxLength = { inputMaxLength }
        />
    )
}