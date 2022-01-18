import styled from 'styled-components';

// Types
type Props = {
    image: string;
}

export const Wrapper = styled.div<Props>`
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 41%, rgba(0, 0, 0, 0.65) 100%),
        url(${ ({ image }) => image }),
        var(--darkGrey);
    background-size: 100%, cover;
    background-position: center;
    height: 600px;
    position: relative;
    animation: heroAnimation 1s;

    @keyframes heroAnimation {
        from {opacity: 0;}
        to {opacity: 1;}
    }
`;

export const Content = styled.div`
    padding: 20px;
    margin: 0 auto;
    max-width: var(--maxWidth);
`;

export const Text = styled.div`
    z-index: 100;
    max-width: 100%;
    position: absolute;
    bottom: 40px;
    margin-right: 20px;
    min-height: 100px;
    color: var(--white);

    @media (min-width: 720px) {
        max-width: 700px;
    }

    h1 {
        font-size: var(--fontBig);

        @media (min-width: 720px) {
            font-size: var(--fontSuperBig);
        }
    }

    p {
        font-size: var(--fontSmall);

        @media (min-width: 720px) {
            font-size: var(--fontMed);
        }
    }
`;
