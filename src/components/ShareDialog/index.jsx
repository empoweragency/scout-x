import React, { useState } from "react"
import styled from "styled-components"
import theme from "../_theme"
import { Dialog } from "@reach/dialog"
import { CloseButton, Icon } from "../Dialog"
import fetch from "isomorphic-unfetch"
import { SolidButton } from "../Button"
import close from "./close.svg"
import { AlertContextConsumer } from "../../contexts/alertContext"

const StyledDialog = styled(Dialog)`
    position: relative;
    width: 95vw;
    max-width: 400px;
    animation: splat 0.15s ease-out;
    @keyframes splat{
        from{
            opacity: 0;
            transform: scale(0.99);
        }
        to{
            opacity: 1;
            transform: scale(1);
        }
    }
`

const Title = styled.h2`
    margin-bottom: 25px;
`

const Field = styled.div`
    position: relative;
    margin-bottom: 25px;
`

const Label = styled.label`
    display: block;
    color: ${theme.text};
    cursor: pointer;
    margin-bottom: 5px;
`

const Input = styled.input`
    font-size: 1rem;
    padding: 10px;
    border: 2px solid ${theme.text};
    display: block;
    width: 100%;
    &:focus{
        outline: 3px solid ${theme.focus};
    }
    &::placeholder{
        opacity: 0.3;
    }
`

const ShareDialog = ({
    pinboard,
    isOpen,
    handleDismiss,
    triggerAlert
}) => {

    const [sending, setSending] = useState(false)

    const [email, setEmail] = useState("")

    const handleSubmit = async e => {
        e.preventDefault()
        setSending(true)
        try{
            console.log(email)
            console.log(pinboard)
            const res = await fetch("/.netlify/functions/send-email")
            const data = await res.json()
            triggerAlert(`Sent to ${email}`)
        } catch(e) {
            triggerAlert("Couldn't send email. Please try again later.")
        }
    }

    return(
        <StyledDialog isOpen={isOpen} onDismiss={handleDismiss} aria-label="Share dialog">
            <CloseButton onClick={handleDismiss}>
                <Icon src={close} alt="Close dialog"/>
            </CloseButton>

            <Title>Share pinned services by email</Title>
            <form onSubmit={handleSubmit}>
                <Field>
                    <Label htmlFor="email">Email address</Label>
                    <Input 
                        id="email"
                        type="email" 
                        required={true}
                        value={email} 
                        onChange={e => setEmail(e.target.value)}
                    />
                </Field>
                <SolidButton disabled={sending}>Send email</SolidButton>
            </form>
        </StyledDialog>
    )
}


export default props =>
    <AlertContextConsumer>
        {alertContext =>
            <ShareDialog
                {...alertContext} 
                {...props}
            />
        }
    </AlertContextConsumer>