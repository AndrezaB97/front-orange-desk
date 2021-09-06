import styled from 'styled-components';

export const Header = styled.header`

    nav {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        width: 29.6rem;
        margin: 1.6rem auto 0 auto;

        .progress-bar-container {

        }
    }
`;

export const Main = styled.main`

    .img-container {
        width: 29.6rem;
        height: 17.6rem;
        margin: 2.4rem auto;
        background-color: var(--light-grey);
    }

    .main-description {
        width: 29.6rem;
        height: auto;
        margin: 2.4rem auto 1.6rem auto;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 1.9rem;
    }

    .cards-container {
        width: 29.6rem;
        height: auto;
        margin: 0 auto;

        .card {
            display: flex;
            flex-flow: row no-wrap;
            justify-content: space-between;
            align-items: center;

            margin: 0 auto .8rem auto;
            padding: 2.8rem 3rem;

            background-color: var(--dark-grey);
            border-radius: .8rem;

            color: var(--white);

            .adress {
                h1{
                    font-weight: 400;
                    font-size: 1.6rem;
                    line-height: 2.4rem;
                }

                p {
                    font-weight: 300;
                    font-size: .8rem;
                    line-height: 1.6rem;
                }
            }

            .label {
                font-weight: 600;
                font-size: 2.4rem;
                line-height: 2.4rem;
            }
        }
    }
`;