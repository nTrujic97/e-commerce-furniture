import {
	AppBar,
	Toolbar,
	Typography,
	Box,
	Stack,
	Button,
	IconButton,
	Menu,
	MenuItem,
	Link,
} from "@mui/material";
import ChairIcon from "@mui/icons-material/Chair";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { productActions } from "../store/product-slice";
import armchairsData from "../images/armchairImages.json";
import sofasData from "../images/sofasImages.json";
import bedsData from "../images/bedsImages.json";
import poufsData from "../images/poufsImages.json";
import { NavLink } from "react-router-dom";
import { Cart } from "./Shop/Cart";

export const NavBar = () => {
	const dispatch = useDispatch();
	const [anchorProfileEl, setAnchorProfileEl] = useState(null);
	const [anchorShopEl, setAnchorShopEl] = useState(null);
	const [cartOpen, setCartOpen] = useState(false);

	const profileOpen = Boolean(anchorProfileEl);
	const shopOpen = Boolean(anchorShopEl);
	const handleProfileClick = (event) => {
		setAnchorProfileEl(event.currentTarget);
	};
	const handleShopClick = (event) => {
		setAnchorShopEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorProfileEl(null);
		setAnchorShopEl(null);
	};
	return (
		<AppBar position="sticky" sx={{ opacity: 0.8 }}>
			<Toolbar>
				<Box p={2} color="inherit" edge="start" aria-label="logo">
					<ChairIcon fontSize="large" />
				</Box>
				<Typography variant="h5" component="div">
					Fotelja Commerce
				</Typography>
				<Stack
					direction="row"
					sx={{
						justifyContent: "space-between",
						flexGrow: 1,
					}}
				>
					<Stack direction="row" marginLeft={10} spacing={4}>
						<Link
							to="/"
							component={NavLink}
							sx={{ color: "inherit", textDecoration: "none" }}
						>
							<Button color="inherit">Home</Button>
						</Link>
						<Button
							color="inherit"
							id="shop-menu-button"
							aria-controls={shopOpen ? "shop-menu" : undefined}
							aria-haspopup="true"
							aria-expanded={shopOpen ? "true" : undefined}
							onClick={handleShopClick}
						>
							Shop
						</Button>

						<Link
							to="/aboutus"
							component={NavLink}
							sx={{ color: "inherit", textDecoration: "none" }}
						>
							<Button color="inherit">About us</Button>
						</Link>
					</Stack>
					<Stack spacing={4} direction="row" marginRight={5}>
						<Button color="inherit">
							<LoginIcon fontSize="small" />
							Login
						</Button>
						<IconButton color="inherit" onClick={() => setCartOpen(true)}>
							<ShoppingCartCheckoutIcon />
						</IconButton>
						<IconButton
							id="profile-menu-button"
							aria-controls={profileOpen ? "profile-menu" : undefined}
							aria-haspopup="true"
							aria-expanded={profileOpen ? "true" : undefined}
							color="inherit"
							onClick={handleProfileClick}
						>
							<PermIdentityIcon />
						</IconButton>

						<IconButton color="inherit">
							<SearchIcon />
						</IconButton>
					</Stack>
					<Menu
						open={profileOpen}
						anchorEl={anchorProfileEl}
						id="profile-menu"
						MenuListProps={{
							"aria-labelledby": "profile-menu-button",
						}}
						onClose={handleClose}
					>
						<MenuItem onClick={handleClose}>
							<LogoutIcon fontSize="small" />
							Logout
						</MenuItem>
					</Menu>
					<Menu
						open={shopOpen}
						anchorEl={anchorShopEl}
						id="shop-menu"
						MenuListProps={{
							"aria-labelledby": "shop-menu-button",
						}}
						onClick={handleClose}
					>
						<Link
							to="/shop"
							component={NavLink}
							sx={{ color: "inherit", textDecoration: "none" }}
						>
							<MenuItem
								onClick={() => {
									dispatch(productActions.onSelectProduct(armchairsData));
									dispatch(productActions.onCurrentProductsName("Armchairs"));
									dispatch(productActions.onChangeTabsValue("Armchairs"));
								}}
							>
								<Typography fontSize={20}>Armchairs</Typography>
							</MenuItem>
						</Link>
						<Link
							to="/shop"
							component={NavLink}
							sx={{ color: "inherit", textDecoration: "none" }}
						>
							<MenuItem
								onClick={() => {
									dispatch(productActions.onSelectProduct(sofasData));
									dispatch(productActions.onCurrentProductsName("Sofas"));
									dispatch(productActions.onChangeTabsValue("Sofas"));
								}}
							>
								<Typography fontSize={20}>Sofas</Typography>
							</MenuItem>
						</Link>
						<Link
							to="/shop"
							component={NavLink}
							sx={{ color: "inherit", textDecoration: "none" }}
						>
							<MenuItem
								onClick={() => {
									dispatch(productActions.onSelectProduct(bedsData));
									dispatch(productActions.onCurrentProductsName("Beds"));
									dispatch(productActions.onChangeTabsValue("Beds"));
								}}
							>
								<Typography fontSize={20}>Beds</Typography>
							</MenuItem>
						</Link>
						<Link
							to="/shop"
							component={NavLink}
							sx={{ color: "inherit", textDecoration: "none" }}
						>
							<MenuItem
								onClick={() => {
									dispatch(productActions.onSelectProduct(poufsData));
									dispatch(productActions.onCurrentProductsName("Poufs"));
									dispatch(productActions.onChangeTabsValue("Poufs"));
								}}
							>
								<Typography fontSize={20}>Poufs</Typography>
							</MenuItem>
						</Link>
					</Menu>
				</Stack>
			</Toolbar>
			<Cart open={cartOpen} setOpen={setCartOpen} />
		</AppBar>
	);
};
