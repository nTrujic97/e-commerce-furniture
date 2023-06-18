import React from "react";
import styles from "./Home.module.css";
import { Typography, Button, Box, Stack, Divider, Link } from "@mui/material";
import { CustomCarousel } from "./Carousel/CustomCarousel";
import { NavLink } from "react-router-dom";
import { Cart } from "./Shop/Cart";
import { useDispatch } from "react-redux";
import { productActions } from "../store/product-slice";
import armchairsData from "../images/armchairImages.json";
import { useGetTodosQuery } from "../store/todoSlice/todoAPISlice";

export const Home = () => {
	const dispatch = useDispatch();

	// Example
	// useGetTodosQuery();

	return (
		<>
			<Stack className={styles.background}>
				<Typography sx={{ opacity: 0 }}>_</Typography>

				<Typography
					gutterBottom
					variant="h1"
					sx={{
						bgcolor: "#fafafa; ",
						opacity: 0.4,
						display: "flex",
						justifyContent: "center",
						marginTop: 10,
						fontStyle: "italic",
					}}
				>
					Fotelja commerce
				</Typography>
				<Box
					sx={{
						justifyContent: "center",
						display: "flex",
						marginTop: 20,
					}}
				>
					<Link
						to="/shop"
						component={NavLink}
						sx={{ color: "inherit", textDecoration: "none" }}
					>
						<Button
							sx={{ fontSize: 18 }}
							variant="contained"
							onClick={() => {
								dispatch(productActions.onCurrentProductsName("Armchairs"));
								dispatch(productActions.onSelectProduct(armchairsData));
							}}
						>
							SHOP UP TO 20% OFF
						</Button>
					</Link>
				</Box>
			</Stack>
			<Stack>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						marginTop: "10%",
						marginBottom: "10%",
					}}
				>
					<Typography variant="h2" sx={{ fontFamily: "century-gothic" }}>
						Handmade Furniture
					</Typography>
					<Typography
						variant="h6"
						sx={{
							width: "70%",
							textAlign: "center",
						}}
					>
						Every piece of our furniture should have a work ethic — one that
						exudes strength, stability and is comfortable to work with over the
						long haul. At Kosovo, we achieve this by combining our masterful
						craftsmanship with innovative technology.
						<Divider />
					</Typography>
					<Button sx={{ marginTop: "40px" }} variant="contained">
						ABOUT US
					</Button>
				</Box>
			</Stack>
			<CustomCarousel />
			<Cart ajde="ajde" />
		</>
	);
};
