import React, { useContext, useState, useEffect } from "react";
import "../styles/Home.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import authContext from "../../../context/AuthContext";
import OrderService from "../../../services/OrderService";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function ODisplay() {
  const a = useContext(authContext);

  const [products, setProducts] = useState([]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    OrderService.getOrder(a.state.email)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, [a.state.email]);

  return (
    <div>
      <div className="dash-home-container">
        <div className="dash-home-navbar">
          <SearchOutlinedIcon className="SearchOutlinedIcon" />
          <input
            className="dash-home-searchbar"
            placeholder="Explore Products"
          />
        </div>
        <div className="dash-home-title">
          <AccountCircleIcon />
          <h3>{a.state.name}</h3>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="cart-product-section"
      >
        <div>
          <h3 style={{ paddingBottom: "30px" }}>Your Order List</h3>
          <div className="cart-list">
            <TableContainer component={Paper}>
              <Table sx={{ width: "70vw" }}>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: "black", fontWeight: "bolder" }}>
                      Order ID
                    </TableCell>
                    <TableCell
                      sx={{ color: "black", fontWeight: "bolder" }}
                      align="center"
                    >
                      Product ID
                    </TableCell>
                    <TableCell
                      sx={{ color: "black", fontWeight: "bolder" }}
                      align="center"
                    >
                      Name
                    </TableCell>
                    <TableCell
                      sx={{ color: "black", fontWeight: "bolder" }}
                      align="center"
                    >
                      Price
                    </TableCell>
                    <TableCell
                      sx={{ color: "black", fontWeight: "bolder" }}
                      align="center"
                    >
                      Date of Order
                    </TableCell>
                    <TableCell
                      sx={{ color: "black", fontWeight: "bolder" }}
                      align="center"
                    >
                      Delivered
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {products.map((product) => (
                    <TableRow
                      key={product.title}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {product.id}
                      </TableCell>
                      <TableCell align="center">{product.pid}</TableCell>
                      <TableCell align="center">{product.title}</TableCell>
                      <TableCell align="center">Rs. {product.price}</TableCell>
                      <TableCell align="center">
                        {formatDate(product.timestamp)}
                      </TableCell>
                      <TableCell align="center">
                        {product.is_delivered}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ODisplay;
