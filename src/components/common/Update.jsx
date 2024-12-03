import { useUpdateUserRoleMutation } from "@/app/feature/userApi/userApi";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Update = ({ role, id, email }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [updateUserRole, { isLoading }] = useUpdateUserRoleMutation();
  const onSubmit = async (data) => {
    try {
      
      const {success} = await updateUserRole({ id, role: data.role}).unwrap();
      if (success) {
        toast.success('user role updated successfully');
      }
    } catch (error) {
      toast.error(error?.data?.message)
    }
  };

  return (
    <Dialog>
      <DialogTrigger>{role === "Admin" ? <span className="text-red-500">Admin</span> :  <span className="text-green-500">USER</span> }</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Role : {email}</DialogTitle>
          <DialogDescription>
            Make changes to your role here. Click save when you're done.
          </DialogDescription>

          <form
            className="flex-col space-y-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <select
              className="w-24 h-8 rounded focus:outline-none ring-1 ring-slate-900"
              name="role"
              {...register("role", { required: true })}
              id=""
            >
              <option value="Admin">Admin</option>
              <option value="USER">USER</option>
            </select>
            <div className="">
              <button
                className="bg-black text-white px-6 py-[7px] rounded-sm"
                type="submit"
              >
                Update
              </button>
            </div>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Update;
