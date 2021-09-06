import styled from 'styled-components';

export const Header = styled.header`

    nav {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;

        width: 29.6rem;

        margin: 1.6rem auto 0 auto;
    }
`;

export const Main = styled.main`

    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    margin: 2.9rem auto 0 auto;

    .img-container {
        width: 29.6rem;
        height: 29.6rem;
        background-color: var(--light-grey);
    }

    .main-description {
        width: 29.6rem;
        height: auto;
    
        margin: 1.6rem auto 2.4rem auto;
    
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 1.9rem;
    }
    
    .btn-container {
        height: 16px;
        margin-top: 2.4rem;   
    }
`;