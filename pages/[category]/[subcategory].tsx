import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { getProductBySubCategory } from "../../utils/getProduct";
import { useProduct } from "../../hooks/useProduct";
import { Heading, Layout } from "../../components";
import { ProductLayout } from "../../layouts";

interface Props {
	subcategory: string;
}

const ProductPage: NextPage<Props> = ({ subcategory }) => {
	const router = useRouter();
	const { category } = router.query;

	const { products, isLoading } = useProduct(
		`/wearproducts?category=${category}`
	);
	const Products = getProductBySubCategory(products, subcategory);
	return (
		<Layout
			title={"Choco - Stores"}
			pageDescription={"Encuentra tu ropa favorita"}
		>
			<Heading />
			<ProductLayout
				products={Products}
				isLoading={isLoading}
				title={subcategory}
			/>
		</Layout>
	);
};

export const getStaticPaths: GetStaticPaths = () => {
	const paths = [{ params: { category: "men", subcategory: "chamarras" } }];
	return {
		paths,
		fallback: false // false or 'blocking',
	};
};

export const getStaticProps: GetStaticProps = ({ params }) => {
	const { subcategory = "" } = params as { subcategory: string };
	return {
		props: {
			subcategory
		},
		revalidate: 60 * 60 * 24
	};
};

export default ProductPage;
