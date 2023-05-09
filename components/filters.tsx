// @ts-nocheck
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import styles from "./filters.module.scss";

export default function Filters({
	handleStatusChange,
	handleComplexityChange,
	filterStatus,
	filterComplexity,
}: any) {
	const marks = [
		{
			value: 0,
			label: "0",
		},
		{
			value: 1,
			label: "1",
		},
		{
			value: 2,
			label: "2",
		},
		{
			value: 3,
			label: "3",
		},
		{
			value: 4,
			label: "4",
		},
		{
			value: 5,
			label: "5",
		},
	];

	return (
		<div className={styles.filters}>
			<FormControl>
				<RadioGroup
					row
					aria-labelledby="status"
					name="status"
					onChange={handleStatusChange}
				>
					<FormControlLabel
						value="all"
						control={
							<Radio
								sx={{
									color: "#fff",
									"&.Mui-checked": {
										color: red[600],
									},
								}}
								checked={filterStatus === "all"}
							/>
						}
						label="View all"
					/>
					<FormControlLabel
						value="own"
						control={
							<Radio
								sx={{
									color: "#fff",
									"&.Mui-checked": {
										color: red[600],
									},
								}}
								checked={filterStatus === "own"}
							/>
						}
						label="Own"
					/>
					<FormControlLabel
						value="wishlist"
						control={
							<Radio
								sx={{
									color: "#fff",
									"&.Mui-checked": {
										color: red[600],
									},
								}}
								checked={filterStatus === "wishlist"}
							/>
						}
						label="Wishlist"
					/>
				</RadioGroup>
			</FormControl>

			<div className={styles.slider}>
				<Typography
					id="complexity-slider"
					variant="body2"
					component="h6"
					gutterBottom
				>
					Complexity
				</Typography>
				<Slider
					getAriaLabel={() => "Complexity"}
					value={filterComplexity}
					onChange={handleComplexityChange}
					valueLabelDisplay="auto"
					disableSwap
					step={1}
					min={0}
					max={5}
					size="small"
					marks
					color="error"
				/>
			</div>
		</div>
	);
}
