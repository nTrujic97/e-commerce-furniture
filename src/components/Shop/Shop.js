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
import { useDispatch, useSelector } from "react-redux";
import { ProductTabs } from "./ProductTabs";
import { useGetArmchairsQuery } from "../../store/armchairsSlice/armchairsAPISlice";
import { productActions } from "../../store/product-slice";

export const Shop = () => {
	const { currentProducts } = useSelector((state) => state.product);
	const currentProductsName = useSelector(
		(state) => state.product.currentProductsName
	);
	const singleProductData = useSelector(
		(state) => state.product.singleProductData
	);
	const dispatch = useDispatch();

	// console.log(currentProducts);

	const { data } = useGetArmchairsQuery();
	console.log(data);

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
					productData={singleProductData}
				/>
			)}
			<Grid container>
				{currentProducts.length > 0 &&
					currentProducts.map((item, i) => (
						<Card
							onClick={() => {
								dispatch(
									productActions.setSingleProductData({
										image: item.image,
										title: item.title,
										description: item.description,
										techInfo: item.techInfo,
										price: item.price,
									})
								);
								handleOpen();
							}}
							sx={{
								maxWidth: 330,
								margin: 3,
								":hover": { opacity: 0.8, boxShadow: 20 },
							}}
							key={i}
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
					))}
			</Grid>
		</>
	);
};
