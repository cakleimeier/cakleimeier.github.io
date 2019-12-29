/* Site: catherinekleimeier.com */

import React from "react";
import { Helmet } from "react-helmet";
import "../css/main.scss";

const IndexPage = () => {
	return (
		<div className="application">
			<Helmet>
				<meta charSet="utf-8" />
				<title>Catherine Kleimeier</title>
			</Helmet>
			<section className="columns">
				<div className="column">
					<h1>Catherine Kleimeier</h1>
				</div>
			</section>
		</div>
	)
}

export default IndexPage