import type { NextPage } from "next";
import { Banner, Layout } from "../components";
import { Home } from "../layouts";

const Index: NextPage = () => {
	return (
		<Layout
			title={"Choco - Store"}
			pageDescription={"Encuentra tu ropa favorita"}
		>
			<Home />
			<Banner />
		</Layout>
	);
};

export default Index;
