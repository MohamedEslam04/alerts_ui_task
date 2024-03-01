import { alerts } from "../data/ListData";
import "../styles/List.css";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { ListRow } from "./ListRow";

export function AlertList(): JSX.Element {
    const listItems = alerts.map((alert) => <ListRow alert={alert} />);
    return (
        <Box sx={{ flexGrow: 1, margin: 0, paddingLeft: '10px', paddingTop: '30px', bgcolor: '#202020' }}>
            <List disablePadding>{listItems} </List>
        </Box>
    );
}


