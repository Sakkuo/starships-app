import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import "./SkeletonForSingle.css";

const SkeletonForSingle = () => {
    return (
        <Stack spacing={1} sx={{}}>
            <Skeleton
                variant="text"
                sx={{
                    height: "140px",
                    width: '600px',
                    background: "rgba(151, 151, 151, 0.665)",
                    margin: '130px 0 60px 0'
                }}
            />
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "50px",
                }}
            >
                <Skeleton
                    variant="rectangular"
                    sx={{
                        width: { xs: "340px", md: "624px!important" },
                        height: { xs: "330px", md: "419px" },
                        background: "rgba(151, 151, 151, 0.665)",
                        borderRadius: "10px",
                    }}
                />
                <div>
                    <Skeleton
                        variant="text"
                        sx={{
                            width: "600px",
                            height: "75px",
                            background: "rgba(151, 151, 151, 0.665)",
                        }}
                    />
                    <Skeleton
                        variant="text"
                        sx={{
                            width: "600px",
                            height: "75px",
                            background: "rgba(151, 151, 151, 0.665)",
                        }}
                    />
                    <Skeleton
                        variant="text"
                        sx={{
                            width: "600px",
                            height: "75px",
                            background: "rgba(151, 151, 151, 0.665)",
                        }}
                    />
                    <Skeleton
                        variant="text"
                        sx={{
                            width: "600px",
                            height: "75px",
                            background: "rgba(151, 151, 151, 0.665)",
                        }}
                    />
                    <Skeleton
                        variant="text"
                        sx={{
                            width: "600px",
                            height: "75px",
                            background: "rgba(151, 151, 151, 0.665)",
                        }}
                    />
                </div>
            </div>
            <Skeleton
                variant="text"
                sx={{
                    height: "450px",
                    background: "rgba(151, 151, 151, 0.665)",
                }}
            />
        </Stack>
    );
};

export default SkeletonForSingle;
