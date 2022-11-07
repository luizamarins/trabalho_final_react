import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 150hv; //como isso funciona?
    color: darkorchid;
    align-items: center;

    img {
        width: 50%;
        margin-top: 30px;
    }

    h2 {
        margin-top: 30px;
    }
`;

export const Content = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
    margin-top: 10px;
    font-size: 25px;

    span {
        font-size: 30px;
        margin-right: 60px;
        cursor: pointer;

        :hover{
            opacity: 0.5;
        }
    }

    header {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        width: 50%;
        margin-bottom: 30px;
    }
`;