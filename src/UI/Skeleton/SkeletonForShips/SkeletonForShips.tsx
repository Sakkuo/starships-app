import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const Variants: React.FC = () => {
    return (
        <Stack spacing={1}>
            <Skeleton
                variant="rectangular"
                sx={{
                    width: { xs: "340px", md: "385px" },
                    height: { xs: "330px", md: "397px" },
                    background: "rgba(151, 151, 151, 0.665)",
                    borderRadius: '10px'
                }}
            />
        </Stack>
    );
};
export default Variants;
