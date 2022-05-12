import type { NextPage } from "next";
import { Banner, Layout } from "../components";
import { FAQ, Home } from "../layouts";

const FAQs: NextPage = () => {
	return (
		<Layout
			title={"Choco - Store"}
			pageDescription={"Encuentra tu ropa favorita"}
		>
			<FAQ />
		</Layout>
	);
};

export default FAQs;
