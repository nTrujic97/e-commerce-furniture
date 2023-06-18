import {
	Typography,
	Card,
	CardContent,
	CardMedia,
	CardActionArea,
	Grid,
} from "@mui/material";
import React, { useState } from "react";
import { ShopItemModal } from "./ShopItemModal";
import { useSelector } from "react-redux";
import { ProductTabs } from "./ProductTabs";

export const Shop = () => {
	const currentProducts = useSelector((state) => state.product.currentProducts);
	const currentProductsName = useSelector(
		(state) => state.product.currentProductsName
	);

	const [open, setOpen] = useState(false);
	const [productData, setProductData] = useState({});
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	return (
		<>
			<Typography
				marginTop={8}
				variant="h3"
				sx={{ display: "flex", justifyContent: "center", fontStyle: "italic" }}
			>
				{currentProductsName}
			</Typography>
			<ProductTabs />
			{open && (
				<ShopItemModal
					handleClose={handleClose}
					open={open}
					productData={productData}
				/>
			)}
			<Grid container>
				{currentProducts.map((item) => (
					<>
						<Card
							onClick={() => {
								setProductData({
									image: item.image,
									title: item.title,
									description: item.description,
									techInfo: item.techInfo,
									price: item.price,
								});
								handleOpen();
							}}
							sx={{
								maxWidth: 330,
								margin: 3,
								":hover": { opacity: 0.8, boxShadow: 20 },
							}}
							key={item.id}
							item={item}
						>
							<CardActionArea>
								<CardMedia
									sx={{
										":hover": { scale: "1.1", transition: "all 0.2s" },
										transition: "all 0.2s",
									}}
									loading="lazy"
									component="img"
									height="300"
									image={item.image}
									alt={item.title}
								/>
								<CardContent
									sx={{
										bgcolor: "#ececec",
										display: "flex",
										justifyContent: "center",
									}}
								>
									<Typography gutterBottom variant="h5" component="div">
										{item.title}
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</>
				))}
			</Grid>
		</>
	);
};
