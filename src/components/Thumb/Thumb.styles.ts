import styled from 'styled-components';

export const Image = styled.img`
    width: 100%;
    height: 100%;
    max-width: 720px;
    object-fit: cover;
    transition: all 0.3s;
    animation: animateThumb 0.5s;

    @keyframes animateThumb {
        from {opacity: 0;}
        to {opacity: 1;}
    }
`;

export const ClickableImage = styled(Image)`
    :hover {
        opacity: 0.8;
    }
`;
