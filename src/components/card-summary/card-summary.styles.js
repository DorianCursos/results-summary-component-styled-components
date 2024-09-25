import styled from 'styled-components';
import { FONTS } from '../../styles/fonts';

const StyledCardSummary = styled.div`
	padding: 1.5rem 1.875rem 1.875rem;

	@media screen and (width > 768px) {
		width: 100%;
		padding: 2.375rem 2.5rem 2.875rem;
	}
`;
const StyledTitle = styled.h2`
	margin-block: 0;
	margin-bottom: 1.5rem;
	font-size: ${FONTS.fontM};
	font-weight: 600;

	@media screen and (width > 768px) {
		font-size: ${FONTS.fontL};
	}
`;

export { StyledCardSummary, StyledTitle };
