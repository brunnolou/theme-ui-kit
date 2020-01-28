/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { Radio as ThemeRadio } from "@theme-ui/components";
import * as reakit from "reakit/Radio";

const Radio: React.FC<reakit.RadioProps> = props => {
	return (
		<reakit.Radio as={ThemeRadio} {...props} sx={{ mr: 5 }}></reakit.Radio>
	);
};

export { reakit, ThemeRadio, Radio };
export * from "reakit/Radio";
