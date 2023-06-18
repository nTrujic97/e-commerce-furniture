import {
	Button,
	Divider,
	ImageList,
	ImageListItem,
	Link,
	Stack,
	Typography,
} from "@mui/material";
import React from "react";
import styles from "./AboutUs.module.css";
import itemData from "../images/factoryImages.json";
import { NavLink } from "react-router-dom";

export const AboutUs = () => {
	return (
		<>
			<Stack className={styles.background}>
				<Typography sx={{ opacity: 0 }}>_</Typography>

				<Typography
					variant="h1"
					sx={{
						// bgcolor: "#fafafa; ",
						// opacity: 0.8,
						display: "flex",
						justifyContent: "center",
						marginTop: 20,
						fontStyle: "italic",
						color: "white",
					}}
				>
					Furniture Manufactory since 1984
				</Typography>
			</Stack>
			<Typography variant="h4" align="center" p={10}>
				FORMERLY KNOWN AS VIP Kauch, was established in 1884, and is among the
				global leaders as a high-end brand and furniture manufacturer. By
				consistently investing in manufacturing technologies and in our people
				we are known for the values we hold, and for the artisanal passion we
				apply while still operating at an industrial scale in the design and
				production of modern residential and contract furniture goods.
			</Typography>

			<Divider />
			<Stack display="flex" alignItems="center">
				<ImageList sx={{ width: 900, height: 450 }} cols={3}>
					{itemData.map((item) => (
						<ImageListItem key={item.img}>
							<img
								src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
								srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
								loading="lazy"
							/>
						</ImageListItem>
					))}
				</ImageList>
			</Stack>
			<Divider />

			<Typography variant="h4" align="center" p={10}>
				Our work involves the mind and hands, together, in a very delicate,
				intimate and timeless artisanal quest to bring forth the unique
				personality of each individual design from concept to life. It is truly
				a passionate and very detailed approach undertaken in the quest for
				perfection. We strive to realize something that is exemplary of the
				efforts and care of hand-crafted workmanship.
			</Typography>
			<Stack marginBottom={10} alignItems="center">
				<Link
					to="/"
					component={NavLink}
					sx={{ color: "inherit", textDecoration: "none" }}
				>
					<Button sx={{ width: 150 }} variant="contained">
						Home
					</Button>
				</Link>
			</Stack>
		</>
	);
};
