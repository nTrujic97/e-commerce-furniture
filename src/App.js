import "./App.css";
import { NavBar } from "./components/NavBar";
import { CustomCarousel } from "./components/Carousel/CustomCarousel";
import { Home } from "./components/Home";
import { createTheme, colors, ThemeProvider } from "@mui/material";
import { Shop } from "./components/Shop/Shop";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { ShopItemModal } from "./components/Shop/ShopItemModal";
import { useSelector } from "react-redux";
import { AboutUs } from "./components/AboutUs";

const theme = createTheme({
	palette: {
		primary: {
			main: colors.amber[200],
		},
	},
	typography: {
		fontFamily: "century-gothic",
	},
});

function App() {
	const currentProducts = useSelector((state) => state.product.currentProducts);
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/shop" element={<Shop />} />
					<Route path="/aboutus" element={<AboutUs />} />

					{/* <Home /> */}
					{/* {!currentProducts && <Home />} */}
					{/* {!currentProducts && <CustomCarousel />} */}
					{/* {currentProducts && <Shop />} */}
					{/* <Shop /> */}
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
