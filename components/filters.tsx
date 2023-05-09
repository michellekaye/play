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
	handlePlayingTimeChange,
	filterStatus,
	filterComplexity,
	filterPlayingTime,
}: any) {
	const playTimeMarks = [
		{
			value: 0,
			label: "0",
		},
		{
			value: 30,
			label: "30",
		},
		{
			value: 60,
			label: "60",
		},
		{
			value: 90,
			label: "90",
		},
		{
			value: 120,
			label: "120",
		},
		{
			value: 150,
			label: "150",
		},
		{
			value: 180,
			label: "180",
		},
		{
			value: 210,
			label: "210+",
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

			<div className={styles.sliders}>
				<div className={styles.slider}>
					<Typography
						id="playtime-slider"
						variant="body2"
						component="h6"
						gutterBottom
					>
						Playing time
					</Typography>
					<Slider
						getAriaLabel={() => "Playing time"}
						value={filterPlayingTime}
						onChange={handlePlayingTimeChange}
						valueLabelDisplay="auto"
						disableSwap
						step={30}
						min={0}
						max={210}
						size="small"
						marks
						color="error"
					/>
				</div>

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
		</div>
	);
}
