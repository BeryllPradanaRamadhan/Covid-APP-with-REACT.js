import ContainerStyled from "./container.styled";

function Container(props) {
    return (
        <ContainerStyled>
            {props.children}
        </ContainerStyled>
    );
}

export default Container;