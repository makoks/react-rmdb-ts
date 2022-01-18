import React from 'react';

// Styles
import { Wrapper, Image } from './Actor.styles';

// Types
type Props = {
    imageUrl: string;
    name: string;
    character: string;
}

const Actor: React.FC<Props> = ({ imageUrl, name, character }) => (
    <Wrapper>
        <Image src={imageUrl} alt={name} />
        <h3>{name}</h3>
        <p>{character}</p>
    </Wrapper>
);

export default Actor;
