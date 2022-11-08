import styled from 'styled-components';

export const Box = styled.div`
padding: 40px 20px;
background: #323242;
position: relative;
bottom: 0;
width: 100%;
@media (max-width: 1000px) {
	padding: 20px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
`;


export const Row = styled.div`
display: flex;
justify-content: center;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;
@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #FFFD59;
margin-bottom: 20px;
margin-left: 30px;
margin-right: 30px;
font-size: 18px;
text-decoration: none;
&:hover {
	color: #DEC6F6;
	transition: 200ms ease-in;
}

span {
    color: #FFFD59
}
`;

export const Content = styled.div`
img {
    width: 19%;
    height: 10%;
    align-items: center;
    display: flex;
    background: transparent;
    margin-top: 35px;
	border-radius: 15px;

}
.copyright{
    display: flex;
    flex-direction: column;
    align-items: center;
}
`;

export const Copyright = styled.p`
	text-align: center;
	margin: 0;
	color: #992ECA;
    margin-top: 30px;
    font-size: 25px;
`;