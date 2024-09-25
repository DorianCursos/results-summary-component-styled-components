import { SUMMARY_INFO } from '../../constants/summary-info';
import Button from '../button/Button';
import CardSkill from '../card-skill/CardSkill';
import { StyledCardSummary, StyledTitle } from './card-summary.styles';

const CardSummary = () => {
	return (
		<StyledCardSummary>
			<StyledTitle>Summary</StyledTitle>
			{SUMMARY_INFO.map(card => (
				<CardSkill key={card.id} {...card} />
			))}
			<Button>Continue</Button>
		</StyledCardSummary>
	);
};

export default CardSummary;
