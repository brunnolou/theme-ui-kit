/** @jsx jsx */
import { jsx } from "theme-ui";
import { theme, useConfig, ComponentsProvider } from "docz";
import { Styled, ThemeProvider } from "theme-ui";

import defaultTheme from "gatsby-theme-docz/src/theme";
import components from "gatsby-theme-docz/src/components";
import appTheme from "@/materials/theme";
import merge from "lodash.merge";

const Theme: React.FC = ({ children }) => {
	const config = useConfig();
	return (
		<ThemeProvider
			theme={merge(config.themeConfig, appTheme)}
			components={components}
		>
			<ComponentsProvider components={components}>
				<Styled.root>{children}</Styled.root>
			</ComponentsProvider>
		</ThemeProvider>
	);
};

export default theme(defaultTheme)(Theme);
