import {
	StyledIconTitleContainer,
	StyledSkill,
	StyledTotal,
	StyledValue
} from './card-skill.styles';

const CardSkill = ({ icon, title, score, color, bgColor }) => {
	return (
		<StyledSkill $bgColor={bgColor}>
			<StyledIconTitleContainer $color={color}>
				<img src={icon} alt={'icon ' + title} />
				<span>{title}</span>
			</StyledIconTitleContainer>
			<div>
				<StyledValue>{score}</StyledValue>
				<StyledTotal> / 100</StyledTotal>
			</div>
		</StyledSkill>
	);
};

export default CardSkill;
