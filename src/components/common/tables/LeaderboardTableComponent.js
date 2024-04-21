import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { RANK_LABEL, NAME_LABEL, PERCENTAGE_LABEL, SKILL_LABEL, TOTAL_TEST_TIME_LABEL, } from "../../../constants/CommonConstants";

const commonCellStyle = { fontSize: "1rem" };

const tableCellStyle = {
  color: "#4F4F4F",
  fontWeight: "bold",
  fontSize: "1rem",
};

const LeaderboardTableComponent = ({ data, decodedJti }) => {
  const { leaderboard } = data;

  const assessmentStatusData = Array.isArray(leaderboard) ? leaderboard : [];

  const loggedInUserId = decodedJti;

  return (
    <TableContainer
      component={Paper}
      sx={{ borderRadius: "0px", boxShadow: "none" }}
    >
      <Table
        sx={{ width: "100%", height: 126 }}
        size="small"
        aria-label="status table"
      >
        <TableHead sx={{ background: "#F3F5F9" }}>
          <TableRow>
            <TableCell sx={tableCellStyle} align="center">
              {RANK_LABEL}
            </TableCell>
            <TableCell sx={tableCellStyle} align="center">
              {NAME_LABEL}
            </TableCell>
            <TableCell sx={tableCellStyle} align="center">
              {PERCENTAGE_LABEL}
            </TableCell>
            <TableCell sx={tableCellStyle} align="center">
              {SKILL_LABEL}
            </TableCell>
            <TableCell sx={tableCellStyle} align="center">
              {TOTAL_TEST_TIME_LABEL}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {assessmentStatusData.map((assessment) => (
            <TableRow
              key={assessment.rank}
              sx={{
                backgroundColor:
                  assessment?.user_id &&
                  (assessment.user_id === loggedInUserId
                    ? "#DDE9FE"
                    : "inherit"),
              }}
            >
              <TableCell align="center" sx={commonCellStyle}>
                {assessment.rank}
              </TableCell>
              <TableCell align="center" sx={commonCellStyle}>
                {assessment.name}
              </TableCell>
              <TableCell align="center" sx={commonCellStyle}>
                {assessment.percentage}
              </TableCell>
              <TableCell align="center" sx={commonCellStyle}>
                {assessment.skill}
              </TableCell>
              <TableCell align="center" sx={commonCellStyle}>
                {assessment.total_test_time}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LeaderboardTableComponent;
