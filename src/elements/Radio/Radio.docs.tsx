import React from "react";
import { Label, Box, Radio, RadioGroup, useRadioState } from "../..";

export const Docs = () => {
	const radio = useRadioState();
	return (
		<>
			<RadioGroup as={Box} {...radio} aria-label="fruits">
				<h4>the value is: {radio.state}</h4>
				<Label>
					<Radio {...radio} value="apple" /> apple
				</Label>
				<Label>
					<Radio {...radio} value="orange" /> orange
				</Label>
				<Label>
					<Radio {...radio} value="watermelon" /> watermelon
				</Label>
			</RadioGroup>
		</>
	);
};
