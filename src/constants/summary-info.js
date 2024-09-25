import { v4 } from 'uuid';
import { COLORS } from '../styles/colors';

const PATH = '/assets/images/';

export const SUMMARY_INFO = [
	{
		id: v4(),
		title: 'Reaction',
		icon: PATH + 'icon-reaction.svg',
		score: 70,
		color: COLORS.red,
		bgColor: COLORS.softRed
	},
	{
		id: v4(),
		title: 'Memory',
		icon: PATH + 'icon-memory.svg',
		score: 92,
		color: COLORS.yellow,
		bgColor: COLORS.softYellow
	},
	{
		id: v4(),
		title: 'Verbal',
		icon: PATH + 'icon-verbal.svg',
		score: 61,
		color: COLORS.green,
		bgColor: COLORS.softGreen
	},
	{
		id: v4(),
		title: 'Visual',
		icon: PATH + 'icon-visual.svg',
		score: 73,
		color: COLORS.blue,
		bgColor: COLORS.softBlue
	}
];
