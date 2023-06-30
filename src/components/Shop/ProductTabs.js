import React, { useState } from "react";
import { Box, Link, Tab, Tabs, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../store/product-slice";
import armchairsData from "../../images/armchairImages.json";
import sofasData from "../../images/sofasImages.json";
import bedsData from "../../images/bedsImages.json";
import poufsData from "../../images/poufsImages.json";

export const ProductTabs = () => {
	const currentProducts = useSelector((state) => state.product.currentProducts);
	const currentProductsName = useSelector(
		(state) => state.product.currentProductsName
	);
	// const [value, setValue] = useState(currentProductsName);
	const value = useSelector((state) => state.product.tabsValue);
	const dispatch = useDispatch();
	const handleChange = (event, newValue) => {
		// setValue(newValue);
		dispatch(productActions.onChangeTabsValue(newValue));
		dispatch(productActions.onCurrentProductsName(newValue));
	};

	return (
		<Box sx={{ width: "100%" }}>
			<Box
				sx={{
					borderBottom: 1,
					borderColor: "divider",
					// width: "25%",
				}}
			>
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label="Product tabs"
					TabIndicatorProps={{
						style: { backgroundColor: "#000000" },
					}}
				>
					<Tab
						label={<span style={{ color: "black" }}>Armchairs</span>}
						value={"Armchairs"}
						onClick={() => {
							dispatch(productActions.onSelectProduct(armchairsData));
						}}
					/>
					<Tab
						label={<span style={{ color: "black" }}>Sofas</span>}
						value={"Sofas"}
						onClick={() => {
							dispatch(productActions.onSelectProduct(sofasData));
						}}
					/>
					<Tab
						label={<span style={{ color: "black" }}>Beds</span>}
						value={"Beds"}
						onClick={() => {
							dispatch(productActions.onSelectProduct(bedsData));
						}}
					/>
					<Tab
						label={<span style={{ color: "black" }}>Poufs</span>}
						value={"Poufs"}
						onClick={() => {
							dispatch(productActions.onSelectProduct(poufsData));
						}}
					/>
				</Tabs>
			</Box>
		</Box>
	);
};
