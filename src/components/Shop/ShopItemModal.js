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
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import { cartActions } from "../../store/cart-slice";
import { useDispatch, useSelector } from "react-redux";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "80%",
	height: "80%",
	bgcolor: "background.paper",
	// border: "1px solid #000",
	boxShadow: 24,
	p: 4,
	display: "flex",
	justifyContent: "center",
};

export const ShopItemModal = (props) => {
	const title = props.productData.title;
	const price = props.productData.price;
	const image = props.productData.image;
	const description = props.productData.description;
	const dispatch = useDispatch();
	const d = useSelector((state) => state.cart.cartProducts);
	const addToCart = () => {
		dispatch(cartActions.addToCart({ title, price, image }));
	};
	console.log(d);
	return (
		<>
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
							<Box display="flex" justifyContent="flex-end">
								<IconButton>
									<CloseIcon
										sx={{ ":hover": { color: "error.main" } }}
										onClick={props.handleClose}
									/>
								</IconButton>
							</Box>
							<Typography variant="h4" align="center" gutterBottom>
								{title}
							</Typography>
							<Typography fontSize={18} align="justify" gutterBottom>
								{description}
							</Typography>
							<Divider />
							<Typography variant="overline" fontSize={20} gutterBottom>
								Technical info:
							</Typography>
							{props.productData.techInfo.map((info) => (
								<Typography fontSize={18}>{info._}</Typography>
							))}
							<Typography fontSize={28} variant="overline">
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
						</Stack>
					</Card>
				</Fade>
			</Modal>
		</>
	);
};
