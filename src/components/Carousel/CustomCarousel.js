import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import data from "../../images/carouselImages.json";
import { CustomCarouselCard } from "./CustomCarouselCard";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { useRef } from "react";
import {
	Button,
	Box,
	Accordion,
	Typography,
	AccordionSummary,
	AccordionDetails,
	Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const CustomCarousel = () => {
	const slider = useRef(null);
	const settings = {
		lazyLoad: true,
		dots: true,
		infinite: true,
		// speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 3000,
		pauseOnHover: true,
		cssEase: "linear",
		fade: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<>
			<Slider ref={slider} {...settings}>
				{data.map((item) => (
					<CustomCarouselCard key={item.id} item={item} />
				))}
			</Slider>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-evenly",
					// marginBottom: "50px",
				}}
			>
				<Button
					sx={{ color: "primary.dark" }}
					onClick={() => slider?.current?.slickPrev()}
				>
					<NavigateBeforeIcon fontSize="large" />
				</Button>
				<Button
					sx={{ color: "primary.dark" }}
					onClick={() => slider?.current?.slickNext()}
				>
					<NavigateNextIcon fontSize="large" />
				</Button>
			</Box>
			<Stack
				sx={{ display: "flex", alignItems: "center", marginBottom: "150px" }}
			>
				<Box sx={{ width: "50%", alignItems: "center" }}>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="card-content"
							id="card-header"
						>
							<Typography variant="h5" fontStyle="italic">
								Comfort in Craft
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography variant="body1">
								Find comfort in the synergy of craftsmanship and nature. Whether
								you live in the country, city, or somewhere in between, bring
								the outside in with our timeless handmade furniture. Crafted
								with sustainably harvested North American hardwood that
								celebrates the beauty of the forests and rejuvenates the home.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="card-content"
							id="card-header"
						>
							<Typography variant="h5" fontStyle="italic">
								New Lower Price
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography variant="body1">
								We work hard every day to keep prices as low as possible for
								you, and we lower prices where we can. By producing in high
								volumes with smarter designs and flat packaging, we can continue
								to offer affordable products without compromising quality. Shop
								our new low prices on furniture now!
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="card-content"
							id="card-header"
						>
							<Typography variant="h5" fontStyle="italic">
								Furniture for Your Home
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography variant="body1">
								They say a house doesn’t make a home. Well, that’s
								wholeheartedly true, because YOU do. Your home is an extension
								of yourself, and your furniture should support that! That’s why
								a sideboard isn’t just soulless storage. It’s a collector of
								memories. Where you keep precious souvenirs from your travels,
								and photos of your family. A kitchen shelf isn’t necessarily
								just for keeping utensils, but also a window into your culture
								and identity, keeping all the spices, cookbooks and decorations
								that make up your taste. Check out our selection in your nearby
								store or buy your furniture online from the comfort of your
								home.
							</Typography>
						</AccordionDetails>
					</Accordion>
				</Box>
			</Stack>
		</>
	);
};
