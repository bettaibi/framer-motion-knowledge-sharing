import React, { useMemo, useRef } from 'react';
import { Box } from './Box.styled';

interface ExpandedPanelProps {
	isShown: boolean;
	headerContent: React.ReactNode;
	panel: React.ReactNode;
}
const ExpandedPanel: React.FC<ExpandedPanelProps> = ({
	isShown,
	headerContent,
	panel,
}) => {
	const panelRef = useRef<HTMLDivElement>(null);

	const computedStyle = useMemo(() => {
		return {
			height: isShown ? panelRef.current?.scrollHeight : 0,
			transition: '0.2s',
			overflow: 'hidden',
		};
	}, [isShown]);

	return (
		<Box>
			{headerContent}

			<Box
				style={computedStyle}
				aria-hidden={!isShown}
				ref={panelRef}
				data-testid='panel-container'>
				{panel}
			</Box>
		</Box>
	);
};

export default React.memo(ExpandedPanel);
