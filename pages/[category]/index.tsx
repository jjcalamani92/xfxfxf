import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Layout } from "../../components";
import { useProduct } from "../../hooks/useProduct";
import { Category } from "../../layouts";

interface Props {
	category: string;
}

const CategoryPage: NextPage<Props> = ({ category }) => {
	const { products, isLoading } = useProduct(
		`/wearproducts?category=${category}`
	);

	return (
		<Layout
			title={"Choco - Stores"}
			pageDescription={"Encuentra tu ropa favorita"}
		>
			{/* <Category /> */}
		</Layout>
	);
};

export const getStaticPaths: GetStaticPaths = () => {
	const paths = [
		{ params: { category: "men" } },
		{ params: { category: "women" } },
		{ params: { category: "kid" } }
	];
	return {
		paths,
		fallback: false // false or 'blocking',
	};
};

export const getStaticProps: GetStaticProps = ({ params }) => {
	const { category = "" } = params as { category: string };

	return {
		props: {
			category
		},
		revalidate: 60 * 60 * 24
	};
};

export default CategoryPage;
