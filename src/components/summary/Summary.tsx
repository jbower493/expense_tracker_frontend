// Imports
import { ReactElement } from 'react';
import styled from 'styled-components';
import { Category } from 'App';


// Types
type SummaryProps = {
    category: Category
};

type ProgressSpendProps = {
    width: number
};


// Styles
const StyledSummary = styled.section`
    border-radius: 10px;
    border: #001a5c solid 2px;
    padding: 10px;
    margin-bottom: 15px;
    height: 80px;
`;

const Info = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Text = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    h4 {
        color: #001a5c;
        font-size: 14px;
        font-weight: 600;
        text-transform: capitalize;
    }

    p {
        color: #001a5c;
        font-size: 14px;
    }
`;

const ProgressContainer = styled.div`
    height: 12px;
    width: 100%;
    padding-right: 2px;
    position: relative;
`;

const ProgressBackground = styled.div`
    background-color: #eaeaea;
    height: 100%;
    width: 100%;
    border-radius: 40px;
`;

const ProgressSpend = styled.div<ProgressSpendProps>`
    height: 100%;
    background-color: #00ffc2;
    border-radius: 40px;
    width: ${(props) => props.width <= 120 ? props.width : 120}%;
`;

const ProgressStopper = styled.div`
    border-right: #001a5c 2px dashed;
    height: 25px;
    position: absolute;
    right: 0;
    bottom: 0;
`;


// Component
const Summary = ({ category }: SummaryProps): ReactElement => {
    const { categoryName, spend, budget } = category;

    return (
        <StyledSummary>
            <Info>
                <Text>
                    <h4>{categoryName}</h4>
                    <p>${spend} / ${budget}</p>
                </Text>
                <ProgressContainer>
                    <ProgressBackground>
                        <ProgressSpend width={(spend / budget) * 100} />   
                    </ProgressBackground>
                    <ProgressStopper />
                </ProgressContainer>
            </Info>
        </StyledSummary>
    );
};

export default Summary;