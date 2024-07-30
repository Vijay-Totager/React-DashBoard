import React from 'react';
import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { Helmet } from "react-helmet";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Title } from "./Contact.styles";

import { useTheme } from 'Components/theme/themeContext';

const validationSchema = Yup.object({
    fullName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Full Name is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    phoneNumber: Yup.string()
        .matches(/^[0-9]{10}$/, 'Phone number is not valid')
        .required('Phone Number is required'),
    comments: Yup.string()
        .min(10, 'Too Short!')
        .required('Comments are required'),
});

const Contact = () => {
    const { theme } = useTheme();

    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            phoneNumber: '',
            comments: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <>
            <Helmet>
                <title>Contact</title>
            </Helmet>

            <Stack>
                <Box
                    sx={{
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        display: "flex",
                        alignContent: "center",
                        justifyContent: "center",
                        alignItems: "center",
                        height: { xs: "fit-content", md: "150vh" },
                        pt: 5,
                        pb: 10,
                        mt: -12,
                        backgroundColor: theme.palette.background.default,
                    }}
                >
                    <Grid container m={5}>
                        <Stack>
                            <Grid
                                container
                                justifyContent={"center"}
                                alignContent={"center"}
                                alignItems={"center"}
                                display={"flex"}
                                spacing={5}
                            >
                                <Grid item xs={12} md={5}>
                                    <Stack sx={{ pt: 6, pb: 6 }}>
                                        <Typography
                                            sx={{
                                                color: theme.palette.primary.main,
                                                fontSize: { xs: "25px", md: "33px" },
                                                fontWeight: "bold",
                                                textTransform: "capitalize",
                                                textAlign: { xs: 'center', md: 'left' }
                                            }}
                                        >
                                            Contact Us
                                        </Typography>
                                        <Typography
                                            sx={{
                                                color: theme.palette.text.primary,
                                                textAlign: { xs: 'center', md: 'left' },
                                                fontSize: { xs: "14px", md: "15px" },
                                                lineHeight: "30px",
                                                mt: 2
                                            }}
                                        >
                                            Our AI-powered platform enhances community management with<br />
                                            tools for user data management, <br />interaction, communication,
                                            subscription.
                                        </Typography>

                                        <Typography
                                            sx={{
                                                color: theme.palette.text.primary,
                                                fontWeight: "bold",
                                                textTransform: "capitalize",
                                                textAlign: { xs: 'center', md: 'left' },
                                                fontSize: { xs: "15px", md: "20px" },
                                                pt: 5
                                            }}
                                        >
                                            EMAIL
                                        </Typography>
                                        <a href="mailto:info@abc.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                            <Typography
                                                sx={{
                                                    color: theme.palette.text.primary,
                                                    lineHeight: "30px",
                                                    mt: 2,
                                                    textAlign: { xs: 'center', md: 'left' },
                                                    fontSize: { xs: "13px", md: "16px" },
                                                }}
                                            >
                                                info@abc.com
                                            </Typography>
                                        </a>

                                        <Typography
                                            sx={{
                                                color: theme.palette.text.primary,
                                                fontWeight: "bold",
                                                textTransform: "capitalize",
                                                textAlign: { xs: 'center', md: 'left' },
                                                fontSize: { xs: "15px", md: "20px" },
                                                pt: 5
                                            }}
                                        >
                                            PHONE NUMBER
                                        </Typography>
                                        <a href="tel:9945753240" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                            <Typography
                                                sx={{
                                                    color: theme.palette.text.primary,
                                                    lineHeight: "30px",
                                                    mt: 2,
                                                    textAlign: { xs: 'center', md: 'left' },
                                                    fontSize: { xs: "13px", md: "16px" },
                                                }}
                                            >
                                                +91 9945838383
                                            </Typography>
                                        </a>

                                        <Stack display={"flex"} flexDirection={"row"} mt={3}>
                                            <Box
                                                component={"img"}
                                                src={require("../../Assets/Images/conatctus.png")}
                                                alt=""
                                                sx={{ width: "70%", ml: { xs: 5, md: 0 } }}
                                            />
                                        </Stack>
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} md={5} sx={{ backgroundColor: theme.palette.background.paper, p: 5, borderRadius: '10px', ml: { xs: 5, md: 0 } }}>
                                    <form onSubmit={formik.handleSubmit}>
                                        <Stack>
                                            <Typography
                                                sx={{
                                                    color: theme.palette.primary.light,
                                                    fontSize: { xs: "25px", md: "33px" },
                                                    fontWeight: "bold",
                                                    textTransform: "capitalize",
                                                    textAlign: 'center',
                                                }}
                                            >
                                                Get in touch
                                            </Typography>
                                            <Typography sx={Title}>
                                                Full Name
                                            </Typography>
                                            <TextField
                                                type="name"
                                                label="Enter Your Full Name"
                                                variant="outlined"
                                                fullWidth
                                                {...formik.getFieldProps('fullName')}
                                                error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                                                helperText={formik.touched.fullName && formik.errors.fullName}
                                                InputLabelProps={{
                                                    sx: { fontSize: { xs: "13px", md: "18px" } },
                                                }}
                                            />
                                            
                                            <Typography sx={Title}>
                                                Email
                                            </Typography>
                                            <TextField
                                                type="mail"
                                                label="Enter Your Email Address"
                                                variant="outlined"
                                                fullWidth
                                                {...formik.getFieldProps('email')}
                                                error={formik.touched.email && Boolean(formik.errors.email)}
                                                helperText={formik.touched.email && formik.errors.email}
                                                InputLabelProps={{
                                                    sx: { fontSize: { xs: "13px", md: "18px" } },
                                                }}
                                            />
                                            
                                            <Typography sx={Title}>
                                                Phone Number
                                            </Typography>
                                            <TextField
                                                type="tel"
                                                label="Enter Your Phone Number"
                                                variant="outlined"
                                                fullWidth
                                                {...formik.getFieldProps('phoneNumber')}
                                                error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                                                helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                                                InputLabelProps={{
                                                    sx: { fontSize: { xs: "13px", md: "18px" } },
                                                }}
                                            />
                                            
                                            <Typography sx={Title}>
                                                Comments
                                            </Typography>
                                            <TextField
                                                type="text"
                                                label="Enter Your Message"
                                                multiline
                                                rows={3}
                                                variant="outlined"
                                                fullWidth
                                                {...formik.getFieldProps('comments')}
                                                error={formik.touched.comments && Boolean(formik.errors.comments)}
                                                helperText={formik.touched.comments && formik.errors.comments}
                                                InputLabelProps={{
                                                    sx: { fontSize: { xs: "13px", md: "18px" } },
                                                }}
                                            />
                                            
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                sx={{
                                                    textTransform: 'capitalize',
                                                    backgroundColor: theme.palette.primary.main,
                                                    borderRadius: '5px',
                                                    mt: 3,
                                                    '&:hover': {
                                                        backgroundColor: theme.palette.primary.dark,
                                                    },
                                                }}
                                            >
                                                Submit
                                            </Button>
                                        </Stack>
                                    </form>
                                </Grid>
                            </Grid>
                        </Stack>
                    </Grid>
                </Box>
            </Stack>
        </>
    );
};

export default Contact;
