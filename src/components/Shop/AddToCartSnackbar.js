import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { forwardRef, useState } from "react";

const Alert = forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export const AddToCartSnackbar = (props) => {
	return (
		<Stack spacing={2} sx={{ width: "100%" }}>
			<Snackbar
				open={props.open}
				autoHideDuration={4000}
				onClose={props.handleClose}
			>
				<Alert
					onClose={props.handleClose}
					severity="success"
					sx={{ width: "100%" }}
				>
					Added to cart successfully!
				</Alert>
			</Snackbar>
		</Stack>
	);
};
