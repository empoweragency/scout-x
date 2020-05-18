import React, { useState } from "react"
import styled from "styled-components"
import { Outer, Legend, Label, Field, Header, UnfoldButton, ClearButton, Content } from "./layout"
import tick from "./tick.svg"

const Input = styled.input`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 29px;
    height: 29px;
    opacity: 0;
    &:checked + label:after{
        position: absolute;
        content: "";
        display: block;
        height: 19px;
        width: 19px;
        left: 5px;
        top: 5px;
        background-image: url(${tick});
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }
`

const Filter = ({
    legend,
    options,
    selection,
    setSelection,
    setPage,
    foldable
}) => {

    const [unfolded, setUnfolded] = useState(selection.length > 0 ? true : false)

    const handleChange = e => {
        let {checked, value} = e.target
        if(checked){
            setSelection([...selection, value]  )
        } else {
            setSelection(selection.filter(el=> el !== value))
        }
        setPage(1)
    }

    const clear = () => setSelection([])

    return(
        <Outer>
            <Header>
                {foldable ?
                    <UnfoldButton 
                        type="button"
                        aria-expanded={unfolded ? "true" : "false"} 
                        onClick={() => setUnfolded(!unfolded)}
                    >
                        <Legend>{legend}</Legend>
                    </UnfoldButton>
                    :
                    <Legend>{legend}</Legend>
                }
                {selection.length > 0 && 
                    <ClearButton onClick={clear}>Clear</ClearButton>
                }
            </Header>
            {(!foldable || unfolded) && 
                <Content>
                    {options.map(o =>
                        <Field key={o.value}>
                            <Input 
                                type="checkbox" 
                                id={o.value}
                                value={o.value}
                                onChange={handleChange} 
                                checked={selection.includes(o.value)}
                            />
                            <Label htmlFor={o.value}>{o.label}</Label>
                        </Field>
                    )}
                </Content>
            }
        </Outer>
    )
}

export default Filter