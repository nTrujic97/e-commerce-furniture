import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Stack, Typography } from "@mui/material";

export const CartBadge = (props) => {
	return (
		<Stack spacing={2} direction="row" marginTop={2}>
			<Badge badgeContent={props.quantity} color="primary">
				<Typography marginRight={2} fontStyle="italic">
					Quantity:
				</Typography>
				<ShoppingCartIcon />
			</Badge>
		</Stack>
	);
};
