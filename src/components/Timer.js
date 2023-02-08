import { Box } from "@mui/system";
import { useEffect, useMemo, useState } from "react";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export const Timer = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(
            () => setTime((time) => time + SECOND),
            1000,
        );

        return () => clearInterval(interval);
    }, [
        time
    ]);

    return (
        <Box >
            {Object.entries({
                HH: (time / HOUR) % 24,
                MM: (time / MINUTE) % 60,
                SS: (time / SECOND) % 60,
            }).map(([label, value]) => (
                <Box key={label} >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",

                        }}
                    >
                        <p
                            style={{
                                fontSize: "2rem",
                                fontWeight: "bold",
                                margin: "0",
                                padding: "0",

                            }}
                        > {
                                label
                            }: {`${Math.floor(value)}`.padStart(2, "0")}</p>
                    </Box>
                </Box>
            ))}
        </Box>
    );
};