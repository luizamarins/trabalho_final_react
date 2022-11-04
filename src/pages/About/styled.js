import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    //background-color: whitesmoke;
    height: 100hv; //como isso funciona?
    color: grey;
    align-items: center;

    img {
        width: 100%;
        margin-top: 30px;
        //height: 300px ;
        //border: 2px solid black;
        //border-radius: 30px;
    }

    h2 {
        margin-top: 30px;
        //background-color: black;
    }
`;

export const Content = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
    margin-top: 30px;

    span {
        font-size: 25px;
        margin-right: 15px;
        cursor: pointer;

        :hover{
            opacity: 0.5;
        }
    }

    header {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        width: 100%;
        margin-bottom: 30px;
    }
`;