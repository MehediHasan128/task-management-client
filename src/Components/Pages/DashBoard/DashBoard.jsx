import { Box, Typography } from "@mui/material";
import { FaCode } from "react-icons/fa";
import { BsBank } from "react-icons/bs";
import { TbBrandOffice } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";
import DisplayTask from "./DisplayTask/DisplayTask";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";


const DashBoard = () => {

    const {register, handleSubmit, reset} = useForm();
    const axiosPublic = useAxiosPublic();

    const onSubmit = (data) =>{
        const title = data.title;
        const description = data.description;
        const priority = data.priority;

        const task = {title, description, priority, status: 'to-do'}
        // console.log(task);
        axiosPublic.post('/task', task)
        .then(res =>{
            if(res.data.insertedId){
                Swal.fire({
                    icon: "success",
                    title: "Task Added",
                    showConfirmButton: false,
                    timer: 1000
                  });
                  reset()
            }
        })

    }

    return (
        <div className="space-y-5">
            <Box className="flex justify-between">
                <Box className="bg-slate-800 rounded-md text-white w-[45%] py-10 text-center">
                    <Typography variant="h5">
                        <p>This Website is benifitial for</p>
                    </Typography>
                    <Box className="my-5 px-5 flex justify-center gap-10">
                        <Box className="w-fit text-center border p-5 bg-zinc-900 rounded-md">
                            <Typography variant="h5">
                            <FaCode className="w-fit mx-auto" />
                            <p className="mt-3">Developers</p>
                            </Typography>
                        </Box>
                        <Box className="w-fit text-center border p-5 bg-zinc-900 rounded-md">
                            <Typography variant="h5">
                            <BsBank className="w-fit mx-auto" />
                            <p className="mt-3">Bankers</p>
                            </Typography>
                        </Box>
                        <Box className="w-fit text-center border p-5 bg-zinc-900 rounded-md">
                            <Typography variant="h5">
                            <TbBrandOffice className="w-fit mx-auto" />
                            <p className="mt-3">Job Holder</p>
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box className="bg-slate-800 rounded-md text-white w-[50%] py-10">
                    <Typography className="flex justify-center items-center gap-3" variant="h5">
                    <FaPlus />
                    <p>Add New task</p>
                    </Typography>
                    <Box className="w-[70%] mx-auto bg-slate-900 mt-5 p-10 rounded-md">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
                            <div>
                                <label>
                                    <Typography variant="h6">
                                        <p>Title</p>
                                    </Typography>
                                </label>
                                <input {...register('title')} className="w-full px-5 py-2 rounded-md text-black" type="text" placeholder="Task titke" />
                            </div>
                            <div>
                                <label>
                                    <Typography variant="h6">
                                        <p>Descriptions</p>
                                    </Typography>
                                </label>
                                <input {...register('description')} className="w-full px-5 py-2 rounded-md text-black" type="text" placeholder="Task descriptions" />
                            </div>
                            <div>
                                <label>
                                    <Typography variant="h6">
                                        <p>Priority</p>
                                    </Typography>
                                </label>
                                <select {...register('priority')} className="w-full px-5 py-2 rounded-md text-black">
                                    <option>---Select Priority---</option>
                                    <option value="low">Low</option>
                                    <option value="moderate">Moderate</option>
                                    <option value="high">High</option>
                                </select>
                            </div>
                            <div>
                                <input className="bg-stone-700 mt-3 px-4 py-2 rounded-md cursor-pointer" type="submit" value="Add Task" />
                            </div>
                        </form>
                    </Box>
                </Box>
            </Box>
            <Box>
                <DisplayTask />
            </Box>
        </div>
    );
};

export default DashBoard;