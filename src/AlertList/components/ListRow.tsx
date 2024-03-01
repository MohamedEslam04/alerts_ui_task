import { Alert } from "../data/ListData";
// import "../styles/listRow.css";
import TitleIcon from "@mui/icons-material/Paid";
import PriceIcon from "@mui/icons-material/PriceChangeOutlined";
import PercentageIcon from "@mui/icons-material/StackedLineChartOutlined";
import RiskIcon from "@mui/icons-material/MoneyOutlined";
import ListItem from "@mui/material/ListItem";

interface ListRowProps {
    alert: Alert;
}
export function ListRow(props: ListRowProps): JSX.Element {
    const { alert } = props;
    return (
        <ListItem
            style={{
                borderRadius: "10px",
                backgroundColor: '#313131',
                height: 50,
                marginBottom: 10,
            }}
        >
            <div className="row">
                <TitleIcon className="img" sx={{ color: "white" }} />
                <p className="title">{alert.title}</p>
                <div className="line" />
            </div>
            <div className="row">
                <PriceIcon className="img" sx={{ color: "white" }} />
                <p className="title">{alert.price}</p>
                <div className="line" />
            </div>
            <div className="row">
                <PercentageIcon className="img" sx={{ color: "white" }} />
                <p className="title">{alert.percentage}</p>
                <div className="line" />
            </div>
            <div className="row">
                <RiskIcon className="img" sx={{ color: "white" }} />
                <p className="title">{alert.risk}</p>
            </div>
        </ListItem>
    );
}
