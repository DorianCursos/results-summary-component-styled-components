import {
	StyledCircle,
	StyledPoints,
	StyledResultsCard,
	StyledResultText,
	StyledResultTitle,
	StyledTitle,
	StyledTotal
} from './card-results.styles';

const CardResults = () => {
	return (
		<StyledResultsCard>
			<StyledTitle>Your Result</StyledTitle>
			<StyledCircle>
				<StyledPoints>76</StyledPoints>
				<StyledTotal>of 100</StyledTotal>
			</StyledCircle>

			<StyledResultTitle>Great</StyledResultTitle>
			<StyledResultText>
				Your scored higher than 65% of the people who have taken these tests.
			</StyledResultText>
		</StyledResultsCard>
	);
};

export default CardResults;
