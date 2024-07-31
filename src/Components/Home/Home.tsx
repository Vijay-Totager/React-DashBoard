import React, { useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Helmet } from "react-helmet";
import StatCard from "../ReUsableComponents/StatCard";
import BarChartTwoToneIcon from "@mui/icons-material/BarChartTwoTone";
import AttachMoneyTwoToneIcon from "@mui/icons-material/AttachMoneyTwoTone";
import TotalSpent from "../ReUsableComponents/TotalSpent";
import WeeklyRevenue from "../ReUsableComponents/WeekRevenue";
import Check from "Components/ReUsableComponents/Check";
import DailyTraffic from "Components/ReUsableComponents/DailyTrafic";
import PaiChart from "Components/ReUsableComponents/PaiChart";
import ProgressTable from "Components/ReUsableComponents/ProgressTable";
import TaskTable from "Components/ReUsableComponents/TaskTable";
import Calender from "Components/ReUsableComponents/Calender";
import Links from "Components/ReUsableComponents/Links";
import AddTaskIcon from "@mui/icons-material/AddTask";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "Components/store/store";
import axios from "axios";
import { setData, setError, setLoading } from "Components/store/tableSlice";
import tableDataComplex from "Components/ReUsableComponents/tableDataComplex";

const Home = () => {
  useEffect(() => {
    const handleResize = () => {
      window.location.reload();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const dispatch = useDispatch<AppDispatch>();

  const { data, loading, error } = useSelector(
    (state: RootState) => state.table
  );
  const { complex = [], check = [], daily = [] }: any = data || {};
  console.log(daily);
  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoading(true));
      try {
        const response = await axios.get<any[]>("http://localhost:3001/multi");
        dispatch(setData(response.data));
      } catch (error: any) {
        dispatch(setError(error.message));
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchData();
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  console.log(data);
  return (
    <>
      <Helmet>
        <title>Home </title>
      </Helmet>

      <Grid container spacing={2} sx={{ p: 1 }}>
        <Grid item xs={12} sx={{ display: { xl: "none" }, width: "100vw" }}>
          <Links secondary={true} />
        </Grid>
        <Grid item xl={2} xs={12} lg={2} md={2}>
          <StatCard
            startContent={
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(244, 247, 254, 1)",
                  borderRadius: "50%",
                }}
              >
                <Typography variant="h6">
                  <BarChartTwoToneIcon sx={{ color: "rgb(67, 24, 255)" }} />
                </Typography>
              </Box>
            }
            name="Earnings"
            value="$350.4"
          />
        </Grid>
        <Grid item xl={2} xs={12} lg={2} md={2}>
          <StatCard
            startContent={
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(244, 247, 254, 1)",
                  borderRadius: "50%",
                }}
              >
                <Typography variant="h6">
                  <AttachMoneyTwoToneIcon sx={{ color: "rgb(67, 24, 255)" }} />
                </Typography>
              </Box>
            }
            name=" Current Spend"
            value="$682.5"
          />
        </Grid>
        <Grid item xl={2} xs={12} lg={2} md={2}>
          <StatCard
            startContent={
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(244, 247, 254, 1)",
                  borderRadius: "50%",
                }}
              >
                <Typography variant="h6">
                  <AttachMoneyTwoToneIcon sx={{ color: "rgb(67, 24, 255)" }} />
                </Typography>
              </Box>
            }
            name="Sales"
            value="$574.34"
          />
        </Grid>
        <Grid item xl={2} xs={12} lg={2} md={2}>
          <StatCard
            startContent={
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(244, 247, 254, 1)",
                  borderRadius: "50%",
                }}
              >
                <Typography variant="h6">
                  <AttachMoneyTwoToneIcon sx={{ color: "rgb(67, 24, 255)" }} />
                </Typography>
              </Box>
            }
            name="Your balance"
            value="$1000"
          />
        </Grid>
        <Grid item xl={2} xs={12} lg={2} md={2}>
          <StatCard
            startContent={
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(244, 247, 254, 1)",
                  borderRadius: "50%",
                }}
              >
                <Typography variant="h6">
                  <AddTaskIcon sx={{ color: "rgb(67, 24, 255)" }} />
                </Typography>
              </Box>
            }
            name="New tasks"
            value="154"
          />
        </Grid>
        <Grid item xl={2} xs={12} lg={2} md={2}>
          <StatCard
            startContent={
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(244, 247, 254, 1)",
                  borderRadius: "50%",
                }}
              >
                <Typography variant="h6">
                  <FileCopyIcon sx={{ color: "rgb(67, 24, 255)" }} />
                </Typography>
              </Box>
            }
            name="Total Projects"
            value="2935"
          />
        </Grid>

        {/* UsesCases  */}
      </Grid>
      <Grid container spacing={2} sx={{ p: 1 }}>
        <Grid item xl={6} md={6} lg={6} xs={12} sx={{ maxheight: "20vh" }}>
          <TotalSpent />
        </Grid>
        <Grid item xl={6} md={6} lg={6} xs={12} sx={{ maxheight: "20vh" }}>
          <WeeklyRevenue />
        </Grid>
        <Grid item xl={6} md={6} lg={6} xs={12} sx={{ maxheight: "20vh" }}>
          <Check tableData={check} />
        </Grid>
        <Grid item xl={3} md={3} lg={3} xs={12}>
          <DailyTraffic />
        </Grid>
        <Grid item xl={3} md={3} lg={3} xs={12}>
          <PaiChart />
        </Grid>
        <Grid item xl={6} lg={6} md={6} xs={12}>
          <ProgressTable tableData={tableDataComplex} />
        </Grid>
        <Grid item xl={3} md={3} lg={3} xs={12}>
          <TaskTable />
        </Grid>
        <Grid item xl={3} md={3} lg={3} xs={12}>
          <Calender selectRange={false} />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
