import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const tableData = [
  {
    id: 1,
    first_name: "Win",
    last_name: "Myrick",
    email: "wmyrick0@sina.com.cn",
    gender: "Male",
    ip_address: "122.122.97.98",
  },
  {
    id: 2,
    first_name: "Minni",
    last_name: "Peacocke",
    email: "mpeacocke1@guardian.co.uk",
    gender: "Female",
    ip_address: "20.40.108.78",
  },
  {
    id: 3,
    first_name: "Claudelle",
    last_name: "Thorogood",
    email: "cthorogood2@woothemes.com",
    gender: "Female",
    ip_address: "138.97.73.59",
  },
  {
    id: 4,
    first_name: "Torre",
    last_name: "Follows",
    email: "tfollows3@e-recht24.de",
    gender: "Male",
    ip_address: "65.155.170.173",
  },
  {
    id: 5,
    first_name: "Brodie",
    last_name: "Bramhill",
    email: "bbramhill4@google.co.jp",
    gender: "Male",
    ip_address: "23.52.154.54",
  },
  {
    id: 6,
    first_name: "Kimberli",
    last_name: "Gallichiccio",
    email: "kgallichiccio5@si.edu",
    gender: "Female",
    ip_address: "143.3.166.75",
  },
  {
    id: 7,
    first_name: "Gavan",
    last_name: "Hillam",
    email: "ghillam6@example.com",
    gender: "Male",
    ip_address: "71.40.58.131",
  },
  {
    id: 8,
    first_name: "Morry",
    last_name: "Tomasutti",
    email: "mtomasutti7@pbs.org",
    gender: "Male",
    ip_address: "23.40.246.47",
  },
  {
    id: 9,
    first_name: "Sydelle",
    last_name: "Easom",
    email: "seasom8@slideshare.net",
    gender: "Female",
    ip_address: "174.38.214.86",
  },
  {
    id: 10,
    first_name: "Calv",
    last_name: "Hugonet",
    email: "chugonet9@facebook.com",
    gender: "Male",
    ip_address: "115.79.94.233",
  },
];
