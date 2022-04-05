import React from "react";
import styled from "styled-components/macro";

import { QUERIES, WEIGHTS } from "../../constants";

import Breadcrumbs from "../Breadcrumbs";
import Select from "../Select";
import Spacer from "../Spacer";
import ShoeSidebar from "../ShoeSidebar";
import ShoeGrid from "../ShoeGrid";

const ShoeIndex = ({ sortId, setSortId }) => {
	return (
		<Wrapper>
			<MainColumn>
				<Header>
					<Title>Running</Title>
					<Select label="Sort" value={sortId} onChange={ev => setSortId(ev.target.value)}>
						<option value="newest">Newest Releases</option>
						<option value="price">Price</option>
					</Select>
				</Header>
				<Spacer size={32} />
				<ShoeGrid />
			</MainColumn>
			<LeftColumn>
				<Breadcrumbs>
					<Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
					<Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
					<Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
				</Breadcrumbs>
				<MobileTitle>Running</MobileTitle>
				<Spacer size={42} />
				<ShoeSidebar />
			</LeftColumn>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column-reverse;
	align-items: baseline;

	@media ${QUERIES.tablet} {
		flex-direction: row-reverse;
		gap: 32px;
	}
`;

const LeftColumn = styled.div`
	position: relative;
	top: -32px;

	@media ${QUERIES.laptop} {
		position: static;
	}

	@media ${QUERIES.tablet} {
		flex-basis: 248px;
	}
`;

const MainColumn = styled.div`
	flex: 1;
`;

const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: baseline;
`;

const Title = styled.h2`
	font-size: 1.5rem;
	font-weight: ${WEIGHTS.medium};
	display: none;

	@media ${QUERIES.laptop} {
		display: unset;
	}
`;

const MobileTitle = styled.h2`
	font-size: 1.5rem;
	font-weight: ${WEIGHTS.medium};

	@media ${QUERIES.laptop} {
		display: none;
	}
`;

export default ShoeIndex;
