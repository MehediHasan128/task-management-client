import { Box, Typography } from "@mui/material";

const DisplayTask = () => {
    return (
        <div className="bg-slate-800 p-10 rounded-md">
            <Box className="text-white grid grid-cols-3 gap-5">
                <Box className="bg-slate-900 p-5 rounded-md">
                    <Typography variant="h6">
                        <p>To-Do</p>
                    </Typography>
                    <Box className="space-y-3">
                    <Box className="bg-zinc-950 border p-5">
                    <Typography>
                        <p>Title: Add pic</p>
                    </Typography>
                    <Typography>
                        <p>Description: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, ipsum? Quasi vero veritatis aliquam ea mollitia ab a nemo commodi? In, quis.</p>
                    </Typography>
                    </Box>
                    <Box className="bg-zinc-950 border p-5">
                    <Typography>
                        <p>Title: Add pic</p>
                    </Typography>
                    <Typography>
                        <p>Description: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, ipsum? Quasi vero veritatis aliquam ea mollitia ab a nemo commodi? In, quis.</p>
                    </Typography>
                    </Box>
                    </Box>
                </Box>
                <Box className="bg-slate-900 p-5 rounded-md">
                    <Typography variant="h6">
                        <p>Ongoing</p>
                    </Typography>
                    <Box className="space-y-3">
                    <Box className="bg-zinc-950 border p-5">
                    <Typography>
                        <p>Title: Add pic</p>
                    </Typography>
                    <Typography>
                        <p>Description: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, ipsum? Quasi vero veritatis aliquam ea mollitia ab a nemo commodi? In, quis.</p>
                    </Typography>
                    </Box>
                    <Box className="bg-zinc-950 border p-5">
                    <Typography>
                        <p>Title: Add pic</p>
                    </Typography>
                    <Typography>
                        <p>Description: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, ipsum? Quasi vero veritatis aliquam ea mollitia ab a nemo commodi? In, quis.</p>
                    </Typography>
                    </Box>
                    </Box>
                </Box>
                <Box className="bg-slate-900 p-5 rounded-md">
                    <Typography variant="h6">
                        <p>Completed</p>
                    </Typography>
                    <Box className="space-y-3">
                    <Box className="bg-zinc-950 border p-5">
                    <Typography>
                        <p>Title: Add pic</p>
                    </Typography>
                    <Typography>
                        <p>Description: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, ipsum? Quasi vero veritatis aliquam ea mollitia ab a nemo commodi? In, quis.</p>
                    </Typography>
                    </Box>
                    <Box className="bg-zinc-950 border p-5">
                    <Typography>
                        <p>Title: Add pic</p>
                    </Typography>
                    <Typography>
                        <p>Description: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, ipsum? Quasi vero veritatis aliquam ea mollitia ab a nemo commodi? In, quis.</p>
                    </Typography>
                    </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    );
};

export default DisplayTask;