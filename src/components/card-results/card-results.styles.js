import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONTS } from '../../styles/fonts';

const StyledResultsCard = styled.div`
	padding: 1.5rem 3.5rem 2.5rem;
	border-radius: 0 0 2rem 2rem;
	text-align: center;
	color: ${COLORS.lightBlue};
	background-image: ${COLORS.mainGradient};
	@media screen and (width > 768px) {
		padding: 2.375rem 3.375rem 2.875rem;
		border-radius: 2rem;
	}
`;

const StyledTitle = styled.h2`
	margin-block: 0;
	font-weight: 800;
	font-size: ${FONTS.fontM};

	@media screen and (width > 768px) {
		font-size: ${FONTS.fontL};
	}
`;
const StyledCircle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 140px;
	aspect-ratio: 1/1;
	margin: 1.5rem auto;
	border-radius: 50%;
	background-image: ${COLORS.secondaryGradient};
	font-weight: 600;

	@media screen and (width > 768px) {
		width: 200px;
	}
`;
const StyledPoints = styled.span`
	color: white;
	font-size: ${FONTS.fontXXL};
	font-weight: 800;

	@media screen and (width > 768px) {
		font-size: ${FONTS.fontXXXL};
	}
`;

const StyledTotal = styled.span`
	opacity: 0.5;
	font-size: ${FONTS.fontS};

	@media screen and (width > 768px) {
		font-size: ${FONTS.fontM};
	}
`;
const StyledResultTitle = styled.span`
	font-weight: 600;
	color: white;
	@media screen and (width > 768px) {
		font-size: ${FONTS.fontXL};
	}
`;
const StyledResultText = styled.p`
	font-size: ${FONTS.fontS};
	@media screen and (width > 768px) {
		font-size: ${FONTS.fontM};
	}
`;

export {
	StyledResultsCard,
	StyledTitle,
	StyledCircle,
	StyledPoints,
	StyledTotal,
	StyledResultTitle,
	StyledResultText
};
