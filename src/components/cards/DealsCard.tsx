import ArrowDownImage from "@/components/images/ArrowDownImage";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import ProductImage from "@/components/images/ProductImage";

function createData(
  name: string,
  location: string,
  date: string,
  piece: string,
  amount: string,
  status: string
) {
  return { name, location, date, piece, amount, status };
}

// Table data
const data = [
  createData(
    "Apple Watch",
    "6096 Marjolaine Landing",
    "12.09.2025 - 12.53 PM",
    "423",
    "$34,295",
    "Delivered"
  ),
  createData(
    "Lenovo Laptop",
    "1222 Washington River",
    "11.09.2025 - 11.53 PM",
    "323",
    "$14,295",
    "Pending"
  ),
  createData(
    "Apple iPhone",
    "3450 LA Heels",
    "12.10.2025 - 10.53 PM",
    "123",
    "$2,295",
    "Rejected"
  ),
];

const DealsCard = () => {
  return (
    <div className="deals-card">
      <div className="deals-card-heading">
        <h2 className="deals-card-heading-title">Deals Details</h2>
        <div className="select">
          <span className="select-span">October</span>
          <ArrowDownImage />
        </div>
      </div>
      <TableContainer className="table-container" component={Paper}>
        <Table className="table" sx={{ minWidth: 600 }} aria-label="Deals Details">
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Date - Time</TableCell>
              <TableCell>Piece</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, i) => (
              <TableRow key={i} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  <figure className="profile">
                    <ProductImage />
                  </figure>
                  <span className="profile-span">{row.name}</span>
                </TableCell>
                <TableCell>{row.location}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.piece}</TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell>
                  <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DealsCard;
