import React, { useState } from "react";
import {
	Modal,
	Card,
	Fade,
	Backdrop,
	Button,
	Box,
	Typography,
	CardContent,
	CardActionArea,
} from "@mui/material";
import { useSelector } from "react-redux";

export const Cart = (props) => {
	const cartData = useSelector((state) => state.cart.cartProducts);
	const handleClose = () => props.setOpen(false);
	const style = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: "70%",
		height: "80%",
		bgcolor: "background.paper",
		// border: "1px solid #000",
		boxShadow: 24,
		p: 4,
		// display: "flex",
		// justifyContent: "center",
		backgroundColor: "#ececec",
	};

	return (
		<>
			{/* <Button
				variant="contained"
				sx={{ color: "red" }}
				onClick={() => setOpen(true)}
			>
				dsdsd{" "}
			</Button> */}
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={props.open}
				onClose={handleClose}
				closeAfterTransition
				slots={{ backdrop: Backdrop }}
				slotProps={{
					backdrop: {
						timeout: 500,
					},
				}}
			>
				<Fade in={props.open}>
					{/* {cartData.map((item) => {
						<Card sx={style}>ajao</Card>;
					})} */}
					<Card sx={style}>
						<Typography
							sx={{ display: "flex", justifyContent: "center" }}
							gutterBottom
							variant="h3"
						>
							My Cart
						</Typography>
						<Card sx={{ width: "20%", height: "45%" }}>
							<Typography
								sx={{
									display: "flex",
									justifyContent: "center",
									fontSize: 20,
									fontStyle: "italic",
								}}
							>
								Zmaj
							</Typography>
							<CardActionArea sx={{ borderBottom: 1, borderColor: "divider" }}>
								<img
									src="https://images.squarespace-cdn.com/content/v1/5b8b14650dbda3fc35edbdf7/1656594606055-E5SEE1NJIVMVWO455WQ3/DSC_0237aj.jpg?format=1000w"
									width="100%"
									height="100%"
									loading="lazy"
									alt="product"
								/>
							</CardActionArea>
							<CardContent>
								<Box display="flex">
									<Button sx={{ color: "black", fontSize: 12 }}>Remove</Button>
									<Button sx={{ color: "black", fontSize: 12 }}>
										View product
									</Button>
								</Box>
								<Typography
									sx={{
										display: "flex",
										justifyContent: "start",
										fontSize: 20,
									}}
								>
									Price : 1000 €
								</Typography>
							</CardContent>
						</Card>
					</Card>
				</Fade>
			</Modal>
		</>
	);
};
