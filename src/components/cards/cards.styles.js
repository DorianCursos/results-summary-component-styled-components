import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledCards = styled.div`
	display: flex;
	flex-direction: column;
	background-color: white;

	@media screen and (width > 768px) {
		flex-direction: row;
		width: 46rem;
		margin-inline: auto;
		box-shadow: 0 1.875rem 3.75rem ${COLORS.shadow};
		border-radius: 2rem;
	}
`;

export { StyledCards };
