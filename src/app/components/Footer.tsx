import { Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import React from 'react';

const StyledStack = styled(Stack)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'flex-end',
	margin: theme.spacing(0.2),
	paddingRight: theme.spacing(1),
	color: theme.palette.text.secondary,
	fontSize: '8rem',
}));

const FooterBox = (props: React.ComponentProps<typeof Stack>) => (
	<StyledStack
		direction="column"
		justifyContent="center"
		alignItems="flex-end"
		{...props}
	/>
);

export function Footer() {
	return (
		<FooterBox>
			<Typography variant="body2">MHRS Tools by YuhSylphy</Typography>
		</FooterBox>
	);
}
