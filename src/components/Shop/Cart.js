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
	IconButton,
	Grid,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { productActions } from "../../store/product-slice";
import { cartActions } from "../../store/cart-slice";
import { useState } from "react";
import { ShopItemModal } from "./ShopItemModal";
import { CartBadge } from "./CartBadge";

export const Cart = (props) => {
	const cartProducts = useSelector((state) => state.cart.cartProducts);
	const handleClose = () => props.setOpen(false);
	const [open, setOpen] = useState(false);
	const handleProductOpen = () => setOpen(true);
	const handleProductClose = () => setOpen(false);
	// const existingCartItem = cartProducts.find((item) => item.image === cartImage);
	// if (existingCartItem) {
	// }

	// console.log(cartProducts);

	const singleProductData = useSelector(
		(state) => state.product.singleProductData
	);

	const style = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: "70%",
		height: "80%",
		bgcolor: "background.paper",
		boxShadow: 24,
		p: 4,
		backgroundColor: "#ececec",
		overflow: "scroll",
		overflowX: "hidden",
	};

	let totalPrice = 0;
	cartProducts.forEach((product) => {
		totalPrice = totalPrice + +product.price * product.quantity;
	});

	const dispatch = useDispatch();

	return (
		<>
			{open && (
				<ShopItemModal
					handleClose={handleProductClose}
					open={open}
					productData={singleProductData}
				/>
			)}
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
					<Card
						sx={style}
						onClick={() => {
							if (cartProducts.length === 0) handleClose();
						}}
					>
						<Box display="flex" justifyContent="flex-end">
							<IconButton onClick={handleClose}>
								<CloseIcon sx={{ ":hover": { color: "error.main" } }} />
							</IconButton>
						</Box>
						{cartProducts.length !== 0 && (
							<Typography
								sx={{ display: "flex", justifyContent: "center" }}
								gutterBottom
								variant="h3"
							>
								My Cart
							</Typography>
						)}

						{cartProducts.length === 0 && (
							<Typography marginTop={20} align="center" variant="h3">
								Your cart is empty.
							</Typography>
						)}
						<Grid container>
							{cartProducts.map((product, i) => (
								<Card key={i} sx={{ width: "20%", height: "45%", m: 3 }}>
									<Typography
										sx={{
											display: "flex",
											justifyContent: "center",
											fontSize: 20,
											fontStyle: "italic",
										}}
									>
										{product.title}
									</Typography>
									<CardActionArea
										disabled
										sx={{ borderBottom: 1, borderColor: "divider" }}
									>
										<img
											src={product.image}
											width="100%"
											height="100%"
											loading="lazy"
											alt="product"
										/>
									</CardActionArea>
									<CardContent>
										<Box display="flex">
											<Button
												onClick={() => {
													dispatch(cartActions.onRemoveProduct(product));
												}}
												sx={{ color: "black", fontSize: 12 }}
											>
												Remove
											</Button>
											<Button
												sx={{ color: "black", fontSize: 12 }}
												onClick={() => {
													dispatch(
														productActions.setSingleProductData({
															title: product.title,
															image: product.image,
															description: product.description,
															techInfo: product.techInfo,
															price: product.price,
														})
													);
													handleProductOpen();
												}}
											>
												View product
											</Button>
										</Box>

										<Typography
											gutterBottom
											sx={{
												display: "flex",
												justifyContent: "start",
												fontSize: 20,
											}}
										>
											Price : {Number(product.price).toLocaleString()} €
										</Typography>
										{product.quantity > 1 && (
											<CartBadge quantity={product.quantity} />
										)}
									</CardContent>
								</Card>
							))}
						</Grid>
						{cartProducts.length !== 0 && (
							<Typography p={5} fontSize={26}>
								Total Price : {totalPrice.toLocaleString()} €
							</Typography>
						)}
					</Card>
				</Fade>
			</Modal>
		</>
	);
};
