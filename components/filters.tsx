import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import styles from "./filters.module.scss";

export default function Filters({ handleStatusChange, filterStatus }: any) {
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
						control={<Radio color="error" checked={filterStatus === "all"} />}
						label="View all"
					/>
					<FormControlLabel
						value="own"
						control={<Radio color="error" checked={filterStatus === "own"} />}
						label="Own"
					/>
					<FormControlLabel
						value="wishlist"
						control={
							<Radio color="error" checked={filterStatus === "wishlist"} />
						}
						label="Wishlist"
					/>
				</RadioGroup>
			</FormControl>
		</div>
	);
}
