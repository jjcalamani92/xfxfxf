export const Heading = () => {
	return (
		<div className="mx-auto container">
			<div className="flex flex-col">
				<div className="flex flex-col justify-center">
					<div className="relative">
						<img
							className="hidden sm:block w-full"
							src="https://i.ibb.co/HxXSY0j/jason-wang-Nx-Awry-Abt-Iw-unsplash-1-1.png"
							alt="sofa"
						/>
						<img
							className="sm:hidden w-full"
							src="https://i.ibb.co/B6qwqPT/jason-wang-Nx-Awry-Abt-Iw-unsplash-1.png"
							alt="sofa"
						/>
						<div className="absolute sm:bottom-8 bottom-4 pr-10 sm:pr-0 left-4 sm:left-8 flex justify-start items-start">
							<p className="text-3xl sm:text-4xl font-semibold leading-9 text-white">
								Range Comfort Sofas
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
