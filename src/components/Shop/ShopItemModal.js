import {
	Backdrop,
	Box,
	Modal,
	Fade,
	Card,
	Typography,
	Stack,
	Divider,
	IconButton,
	Button,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import { cartActions } from "../../store/cart-slice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { AddToCartSnackbar } from "./AddToCartSnackbar";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "80%",
	height: "85%",
	bgcolor: "background.paper",
	boxShadow: 24,
	p: 4,
	display: "flex",
	justifyContent: "center",
};

export const ShopItemModal = (props) => {
	const title = props.productData.title;
	const price = props.productData.price;
	const description = props.productData.description;
	// const image = props.productData.image;
	// const techInfo = props.productData.techInfo;
	// const productData = props.productData;

	const dispatch = useDispatch();
	const cartProducts = useSelector((state) => state.cart.cartProducts);
	const [openSnackbar, setOpenSnackbar] = useState(false);

	const onOpenSnackbar = () => {
		setOpenSnackbar(true);
	};
	const onCloseSnackbar = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setOpenSnackbar(false);
	};
	const addToCart = () => {
		dispatch(cartActions.addToCart({ ...props.productData, quantity: 1 }));
		onOpenSnackbar();
	};

	return (
		<Modal
			aria-labelledby="transition-modal-title"
			aria-describedby="transition-modal-description"
			open={props.open}
			onClose={props.handleClose}
			closeAfterTransition
			slots={{ backdrop: Backdrop }}
			slotProps={{
				backdrop: {
					timeout: 500,
				},
			}}
		>
			<Fade in={props.open}>
				<Card sx={style}>
					<img
						onClick={props.handleClose}
						src={props.productData.image}
						sx={{ width: "100%", height: "100%" }}
						loading="lazy"
						alt="product"
					/>
					<Stack>
						<Box>
							<Button variant="contained" sx={{ color: "black" }}>
								Delete
							</Button>
							<Button
								variant="contained"
								sx={{ color: "black", marginLeft: 5 }}
							>
								Update
							</Button>
						</Box>
						<Box display="flex" justifyContent="flex-end">
							<IconButton onClick={props.handleClose}>
								<CloseIcon sx={{ ":hover": { color: "error.main" } }} />
							</IconButton>
						</Box>
						<Typography variant="h4" align="center" gutterBottom>
							{title}
						</Typography>
						<Typography fontSize={16} align="justify" gutterBottom>
							{description}
						</Typography>
						<Divider />
						<Typography variant="overline" fontSize={20} gutterBottom>
							Technical info:
						</Typography>
						{props.productData.techInfo.map((info, i) => (
							<Typography key={i} fontSize={16}>
								{info}
							</Typography>
						))}
						<Typography fontSize={26} variant="overline">
							Price : {Number(price).toLocaleString()} €
						</Typography>
						<Box display="flex" justifyContent="flex-end">
							<IconButton onClick={addToCart}>
								<AddShoppingCartIcon
									fontSize="large"
									sx={{
										color: "primary.dark",
										":hover": { color: "primary.light" },
									}}
								/>
							</IconButton>
						</Box>
						{openSnackbar && (
							<AddToCartSnackbar
								open={openSnackbar}
								handleClose={onCloseSnackbar}
							/>
						)}
					</Stack>
				</Card>
			</Fade>
		</Modal>
	);
};
