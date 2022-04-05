import React from "react";
import Icon from "../Icon";
import styled from "styled-components/macro";
import { QUERIES } from "../../constants";

export const MobileNav = ({ setShowMobileMenu }) => {
	return (
		<Wrapper>
			<Icon id="shopping-bag" />
			<Icon id="search" />
			<Icon onClick={() => setShowMobileMenu(true)} id="menu" />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	gap: 12px;

	@media ${QUERIES.laptop} {
		display: none;
	}

	@media ${QUERIES.tablet} {
		gap: 24px;
	}
`;

export default MobileNav;
