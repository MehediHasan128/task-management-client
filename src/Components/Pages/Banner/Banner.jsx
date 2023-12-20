import { Box, Container, Typography } from "@mui/material";
import "./Banner.css";
import task from '../../../assets/task.jpg';

const Banner = () => {
  return (
    <div className="background bg-fixed">
      <Container>
        <Box className="flex justify-center items-center min-h-screen text-white">
          <Box className="flex flex-col lg:flex-row justify-between items-center gap-20 lg:gap-0">
            <Box className="space-y-3">
              <Typography variant="body1">
                <p>Welcome to,</p>
              </Typography>
              <Typography variant="h2">
                <p className="font-bold">T-Management</p>
              </Typography>
              <Typography variant="h5">
                <p>where productivity meets simplicity.</p>
              </Typography>
              <Box>
                <button className="bg-blue-600 px-5 py-3 rounded-lg">
                    Let{"'"}s Explore
                </button>
              </Box>
            </Box>
            <Box className="lg:w-[50%]">
                <div>
                    <img className="rounded-xl" src={task} alt="" />
                </div>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Banner;
