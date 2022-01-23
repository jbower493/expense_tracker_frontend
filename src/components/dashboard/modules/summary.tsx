/*********************************************************
* IMPORTS
*********************************************************/
/* BASE *************************************************/
import { ReactElement } from 'react';
import styled from 'styled-components';

/* COMPONENTS *******************************************/
import { Category } from 'components/dashboard/models';

/*********************************************************
*   STYLES
*********************************************************/
const StyledSummary = styled.section`
    border-radius: 10px;
    background-color: white;
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
        color: ${({ theme }) => theme.colors.primary};
        font-size: 14px;
        font-weight: 600;
        text-transform: capitalize;
    }

    p {
        color: ${({ theme }) => theme.colors.primary};
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
    background-color: ${({ theme }) => theme.colors.lightGray};
    height: 100%;
    width: 100%;
    border-radius: 40px;
`;

const ProgressSpend = styled.div<ProgressSpendProps>`
    height: 100%;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 40px;
    width: ${(props) => props.width <= 120 ? props.width : 120}%;
`;

const ProgressStopper = styled.div`
    border-right: ${({ theme }) => theme.colors.primary} 2px dashed;
    height: 25px;
    position: absolute;
    right: 0;
    bottom: 0;
`;

/*********************************************************
*   TYPES
*********************************************************/
type SummaryProps = {
    category: Category
};

type ProgressSpendProps = {
    width: number
};

/*********************************************************
*   COMPONENT
*********************************************************/
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

/*********************************************************
*   EXPORT
*********************************************************/
export default Summary;