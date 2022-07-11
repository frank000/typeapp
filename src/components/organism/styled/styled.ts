import styled from "styled-components";

export const Container = styled.div `
    background-color: #9e9e9e;
    width: 60%;
    height: 100%;
    margin: 15px auto;
    padding: 10px auto;
    padding-bottom: 50px;
    border-radius: 5px;
    padding-top: 25px;
    padding-left: 50px;
    box-shadow: 3px 3px 5px #222;
    label{
        color: #fff;
        font-weight: bold;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
    h1{
        margin: 0 auto;
        text-align: center;
        color: #fff;
        text-shadow: 3px 3px 5px #222;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

    }
`

interface okButtonProps {
    bgColor:string;
    hoverBgColor:string;

}
export const OkButton = styled.button<okButtonProps>`
    width: 4em;
    font-size: 20px;
    height: 2.9em;
    border-radius: 5px;
    border: 1px solid #777;
    background-color: ${(okButtonProps)=>okButtonProps.bgColor};
    color: #fff;
    font-weight: bold;
    padding-top: 2px;
    margin-left: 15px;
    cursor: pointer;
    &:hover{
        box-shadow: 3px 3px 5px #222;
        background-color: ${(okButtonProps)=>okButtonProps.hoverBgColor};
    }
`

export const ToggleBtn = styled.button`
        /* width: 2em;
    font-size: 10px;
    height: 2em;
    
    border: 1px solid #830000;
    background-color: #ff0000;
    color: #350000;
    font-weight: bold;
    padding-top: 2px;
    margin-left: 15px; */
    border: 0;
    margin-top:2px;
    background-color: #222;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        box-shadow: 3px 3px 5px #222;
        border: 1px solid #fff;
    }
`
