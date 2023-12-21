import { Box, Container, Divider, Typography } from "@mui/material";
import bg from "../../../../assets/register.jpg";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Register = () => {

  const {createUser, createAndLogInWithGoogle, setDisplayName} = useContext(AuthContext);

  const {register, handleSubmit} = useForm();

  const onSubmit = (data) =>{
    const name = data.name;
    const email = data.email;
    const password = data.password;
    
    createUser(email, password)
    .then(result =>{
      const user = result.user;
      if(user.uid){
        setDisplayName(user, name)
      }
    })
  }

  const handelRegisterWithGoogle = () =>{
    createAndLogInWithGoogle();
  }

  return (
    <div>
      <Container>
        <Box className="flex justify-center items-center min-h-screen">
          <Box className="flex flex-col lg:flex-row justify-center items-center">
            <Box className="lg:w-[50%]">
              <img src={bg} alt="" />
            </Box>
            <Box className="w-[90%] lg:w-[50%]">
              <Box className="bg-slate-200 py-10 px-5 rounded-md">
                <Typography variant="h4">
                  <p className="font-semibold text-center">Register Now</p>
                </Typography>
                <Box className="my-10">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Box className="space-y-3 px-10">
                            <div>
                                <label>
                                    <Typography variant="h6">
                                        <p>Name</p>
                                    </Typography>
                                </label>
                                <input {...register("name")} className="px-5 py-3 w-full rounded-md" type="text" placeholder="Enter your name" />
                            </div>
                            <div>
                                <label>
                                    <Typography variant="h6">
                                        <p>Email</p>
                                    </Typography>
                                </label>
                                <input {...register("email")} className="px-5 py-3 w-full rounded-md" type="email" placeholder="Enter your email" />
                            </div>
                            <div>
                                <label>
                                    <Typography variant="h6">
                                        <p>Password</p>
                                    </Typography>
                                </label>
                                <input {...register("password")} className="px-5 py-3 w-full rounded-md" type="password" placeholder="Enter a password" />
                            </div>
                            <div>
                                <input className="px-5 py-3 w-full rounded-md bg-blue-500 mt-5 text-white font-semibold cursor-pointer" type="submit" value="Register" />
                            </div>
                        </Box>
                    </form>

                    <Box className="mt-10">
                        <Divider />
                        <Typography>
                            <p className="bg-slate-200 w-fit mx-auto px-3 relative bottom-3">OR</p>
                        </Typography>
                        <Box className="text-center mt-5">
                            <button onClick={handelRegisterWithGoogle} className="bg-white border-2 border-black px-5 py-3 rounded-md">
                                <Typography variant="h6" className="flex items-center gap-2">
                                    <FcGoogle className="text-3xl" />
                                    <p>Register with google</p>
                                </Typography>
                            </button>
                        </Box>
                    </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Register;
