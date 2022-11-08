import styled from 'styled-components'

export const Container = styled.div`

padding: 50px;
text-align: center;
justify-content: center;

input {
    margin: 25px;
    border-radius: 10px;
    border: none;

    ::placeholder {
        font-size: 30px;
        text-align: center;
    }
}

button{
    height: 100px;
    width:  250px;
    background-color: #992ECA;
    color: white;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
    border: none;
    margin: 15px;
}
`;