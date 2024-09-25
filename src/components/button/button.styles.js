import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONTS } from '../../styles/fonts';

const StyledButton = styled.button`
	width: 100%;
	border: none;
	border-radius: 8rem;
	color: white;
	background-color: ${COLORS.darkBlue};
	font-weight: 800;
	font-size: ${FONTS.fontS};
	line-height: 3rem;
	cursor: pointer;

	@media screen and (width > 768px) {
		font-size: ${FONTS.fontM};
	}

	@media (hover: hover) {
		&:hover {
			background-color: transparent;
			background-image: ${COLORS.mainGradient};
		}
	}
`;

export { StyledButton };
