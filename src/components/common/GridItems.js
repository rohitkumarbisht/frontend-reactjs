import React from "react";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import GridItem from "./GridItem";
import DocumentIcon from "./icons/document.png";
import FileIcon from "./icons/file.png";
import PercentageIcon from "./icons/percentage.png";
import TimeIcon from "./icons/time.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const GridItems = ({ reportType, data }) => {

  const getDashboardItems = (reportType, data) => {
    if (reportType === "student") {
      return [
        {
          title: data.score ? "Score" : "Total Assessment",
          value: data.score || data.total_assessments,
          icon: DocumentIcon,
        },
        {
          title: data.rank ? "Rank" : "Total Questions",
          value: data.rank || data.total_questions,
          icon: FileIcon,
        },
        {
          title: data.percentage ? "Percentage" : "Percentage",
          value: data.percentage
            ? `${data.percentage}%`
            : `${data.total_correct_percentage}%`,
          icon: PercentageIcon,
        },
        {
          title: data.percentile ? "Percentile" : "Average test time",
          value: data.percentile || data.average_test_time,
          icon: TimeIcon,
        },
        {
          title: data.test_time ? "Time Taken" : "Total test time",
          value: data.test_time || data.total_test_time,
          icon: TimeIcon,
        },
      ];
    } else if (reportType === "teacher") {
      return [
        {
          title: "Total Students",
          value: data.total_students,
          icon: DocumentIcon,
        },
        {
          title: "Total Assessments Attempted",
          value: data.assessment_attempted,
          icon: FileIcon,
        },
        {
          title: "Average Percentage",
          value: `${data.overall_percentage}%`,
          icon: PercentageIcon,
        },
        {
          title: "Average Time",
          value: data.average_test_time,
          icon: TimeIcon,
        },
      ];
    } else {
      return [];
    }
  };

  const items = getDashboardItems(reportType, data);

  return (
    <Grid item spacing={2} container >
      {items.map((item, index) => (
        <GridItem
          key={item.title}
          title={item.title}
          value={item.value}
          icon={item.icon}
          reportType={reportType}
          itemComponent={Item}
        />
      ))}
    </Grid>
  );
};

export default GridItems;
