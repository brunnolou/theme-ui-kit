/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { Box, Button, Flex } from "@theme-ui/components";
import * as reakit from "reakit/Tab";

const Tab: React.FC<reakit.TabProps> = props => {
	return (
		<reakit.Tab
			as={Button}
			{...props}
			variant={props.disabled ? "secondary" : "primary"}
			sx={{}}
		></reakit.Tab>
	);
};

const TabList: React.FC<reakit.TabProps> = props => {
	return <reakit.TabList as={Flex} {...props}></reakit.TabList>;
};

const TabPanel: React.FC<reakit.TabProps> = props => {
	return (
		<reakit.TabPanel
			as={Box}
			{...props}
			sx={{ color: "red" }}
		></reakit.TabPanel>
	);
};

export { Tab, TabList, TabPanel, reakit };
export { useTabState } from "reakit/Tab";
