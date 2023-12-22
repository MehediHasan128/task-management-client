import { Box, Typography } from "@mui/material";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { useDrag } from "react-dnd";

const DisplayTask = () => {
  const axiosPublic = useAxiosPublic();
  const [allTask, setAllTask] = useState([]);

  useEffect(() => {
    axiosPublic.get("/post").then((res) => {
      setAllTask(res.data);
    });
  }, [axiosPublic]);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  console.log(isDragging);

  const toDoTask = allTask.filter((task) => task.status === "to-do");
  const ongoingTask = allTask.filter((task) => task.status == "ongoing");
  const completedTask = allTask.filter((task) => task.status == "completed");


  const handelDelete = (id) =>{
    axiosPublic.delete(`/task/${id}`)
  }

  return (
    <div className="bg-slate-800 p-10 rounded-md">
      <Box className="text-white grid lg:grid-cols-3 gap-5">
        <Box className="bg-slate-900 p-5 rounded-md">
          <Box className="bg-red-400 p-5 mb-5 text-center rounded-md">
            <Typography variant="h6">
              <p>To-Do</p>
            </Typography>
          </Box>
          <Box className="space-y-3">
            {toDoTask.map((task) => (
              <>
                <Box
                  ref={drag}
                  key={task._id}
                  className="bg-slate-100 text-black p-3 rounded-md shadow-md shadow-gray-300"
                >
                  <Typography
                    className="flex justify-between items-center"
                    variant="h6"
                  >
                    <p>Title: {task.title}</p>
                    <MdDelete onClick={() => handelDelete(task._id)} className="cursor-pointer" />
                  </Typography>
                  <Typography variant="body1">
                    <p>
                      <span className="font-semibold">Description:</span>
                      {task.description.slice(0, 70)}..
                    </p>
                  </Typography>
                  <Typography variant="body1">
                    <p className="font-semibold">
                      priority:{" "}
                      <span className="text-red-700">{task.priority}</span>
                    </p>
                  </Typography>
                </Box>
              </>
            ))}
          </Box>
        </Box>
        <Box className="bg-slate-900 p-5 rounded-md">
          <Box className="bg-lime-600 p-5 mb-5 text-center rounded-md">
            <Typography variant="h6">
              <p>Ongoing</p>
            </Typography>
          </Box>
          <Box className="space-y-3">
            {ongoingTask.map((task) => (
              <>
                <Box
                  key={task._id}
                  className="bg-slate-100 text-black p-3 rounded-md shadow-md shadow-gray-300"
                >
                  <Typography
                    className="flex justify-between items-center"
                    variant="h6"
                  >
                    <p>Title: {task.title}</p>
                    <MdDelete onClick={() => handelDelete(task._id)} className="cursor-pointer" />
                  </Typography>
                  <Typography variant="body1">
                    <p>
                      <span className="font-semibold">Description:</span>
                      {task.description.slice(0, 70)}..
                    </p>
                  </Typography>
                  <Typography variant="body1">
                    <p className="font-semibold">
                      priority:{" "}
                      <span className="text-red-700">{task.priority}</span>
                    </p>
                  </Typography>
                </Box>
              </>
            ))}
          </Box>
        </Box>
        <Box className="bg-slate-900 p-5 rounded-md">
          <Box className="bg-emerald-500 p-5 mb-5 text-center rounded-md">
            <Typography variant="h6">
              <p>Completed</p>
            </Typography>
          </Box>
          <Box className="space-y-3">
            {completedTask.map((task) => (
              <>
                <Box
                  key={task._id}
                  className="bg-slate-100 text-black p-3 rounded-md shadow-md shadow-gray-300"
                >
                  <Typography
                    className="flex justify-between items-center"
                    variant="h6"
                  >
                    <p>Title: {task.title}</p>
                    <MdDelete onClick={() => handelDelete(task._id)} className="cursor-pointer" />
                  </Typography>
                  <Typography variant="body1">
                    <p>
                      <span className="font-semibold">Description:</span>
                      {task.description.slice(0, 70)}..
                    </p>
                  </Typography>
                  <Typography variant="body1">
                    <p className="font-semibold">
                      priority:{" "}
                      <span className="text-red-700">{task.priority}</span>
                    </p>
                  </Typography>
                </Box>
              </>
            ))}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default DisplayTask;
