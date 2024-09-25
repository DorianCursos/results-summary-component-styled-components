import styled from 'styled-components';

const StyledSkill = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 1rem;
	margin-bottom: 1rem;
	border-radius: 0.75rem;
	font-weight: 600;
	background-color: ${({ $bgColor }) => $bgColor};

	&:last-of-type {
		margin-bottom: 1.5rem;

		@media screen and (width > 768px) {
			margin-bottom: 3.5rem;
		}
	}
`;
const StyledIconTitleContainer = styled.div`
	display: flex;
	gap: 0.75rem;
	color: ${({ $color }) => $color};
`;
const StyledValue = styled.span`
	font-weight: 800;
`;
const StyledTotal = styled.span`
	opacity: 0.5;
`;

export { StyledSkill, StyledIconTitleContainer, StyledValue, StyledTotal };
