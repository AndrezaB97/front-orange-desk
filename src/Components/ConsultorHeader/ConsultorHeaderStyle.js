import styled from 'styled-components';

export const Header = styled.header`

    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: flex-start;
    width: 29.6rem;
    margin: 1.6rem auto 0 auto;

    .step-bar-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: left;
        width: 100%;
        margin-top: 2rem;

        .previous-btn {
            width: 3.6rem;
            padding: 1rem;
            border-radius: 50%;
            background-color: var(--white);
            cursor: pointer;
            border: .1rem solid var(--dark-grey);
        }

        .step-container .step {
            width: auto;
            padding: 1rem;
            margin: auto;
            text-align: left;
            font-weight: 400;
            font-size: 1.6rem;
            line-height: 2.4rem;
        }
    }    
`;