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
	const [value, setValue] = useState(currentProductsName);
	const dispatch = useDispatch();
	const handleChange = (event, newValue) => {
		setValue(newValue);
		dispatch(productActions.onCurrentProductsName(newValue));
	};

	return (
		<Box sx={{ width: "100%" }}>
			<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
				<Tabs
					textColor="blue"
					value={value}
					onChange={handleChange}
					aria-label="Product tabs"
					TabIndicatorProps={{
						style: { backgroundColor: "black" },
					}}
					sx={{
						".Mui-selected": {
							color: "primary.dark",
						},
					}}
				>
					<Tab
						label="Armchairs"
						value={"Armchairs"}
						onClick={() => {
							dispatch(productActions.onSelectProduct(armchairsData));
						}}
					/>
					<Tab
						label="Sofas"
						value={"Sofas"}
						onClick={() => {
							dispatch(productActions.onSelectProduct(sofasData));
						}}
					/>
					<Tab
						label="Beds"
						value={"Beds"}
						onClick={() => {
							dispatch(productActions.onSelectProduct(bedsData));
						}}
					/>
					<Tab
						label="Poufs"
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
