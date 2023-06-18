import React from "react";
import { Box, CardMedia, Card, Stack } from "@mui/material";

export const CustomCarouselCard = (item) => {
	return (
		<Stack p={2} sx={{ alignItems: "center" }}>
			<Card
				sx={{
					maxWidth: "100%",
					position: "relative",
					// cursor: "pointer",
				}}
			>
				<Box sx={{ position: "relative" }}>
					<CardMedia
						component="img"
						height="450"
						width="100%"
						image={item.item.image}
						loading="lazy"
						alt={item.item.title}
					/>
				</Box>
			</Card>
		</Stack>
	);
};
