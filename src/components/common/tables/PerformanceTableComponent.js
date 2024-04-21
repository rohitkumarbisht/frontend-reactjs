import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { PERCENTAGE_LABEL, NUMBER_OF_QUESTIONS_LABEL, TIME_SPENT_LABEL, } from '../../../constants/CommonConstants';

const tableCellStyle = {
  color: "#4F4F4F",
  fontWeight: "bold",
  fontSize: "1rem",
};

const cellStyle = {
  fontSize: "1rem",
};

const createDataRow = (label, rowData) => (
  <TableRow key={label}>
    <TableCell sx={tableCellStyle}>{label}</TableCell>
    <TableCell align="center" sx={cellStyle}>
      {label === "Correct"
        ? rowData.total_correct_questions
        : rowData.total_incorrect_questions}
    </TableCell>
    <TableCell align="center" sx={cellStyle}>
      {label === "Correct"
        ? rowData.total_time_spent_on_correct
        : rowData.total_time_spent_on_incorrect}
    </TableCell>
    <TableCell align="center" sx={cellStyle}>
      {label === "Correct"
        ? rowData.total_correct_percentage
        : rowData.total_incorrect_percentage}
      %
    </TableCell>
  </TableRow>
);

export default function PerformanceTableComponent({ data }) {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ width: "100%", height: 126 }}
        size="small"
        aria-label="performance table"
      >
        <TableHead sx={{ background: "#F3F5F9" }}>
          <TableRow>
            <TableCell></TableCell>
            <TableCell sx={tableCellStyle} align="center">
              {NUMBER_OF_QUESTIONS_LABEL}
            </TableCell>
            <TableCell sx={tableCellStyle} align="center">
              {TIME_SPENT_LABEL}
            </TableCell>
            <TableCell sx={tableCellStyle} align="center">
              {PERCENTAGE_LABEL}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <React.Fragment>
            {createDataRow("Correct", data)}
            {createDataRow("Incorrect", data)}
          </React.Fragment>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
