import {
  useDeleteSingleUserMutation,
  useFetchAllUserQuery,
} from "@/app/feature/userApi/userApi";
import Loading from "@/components/common/Loading";
import Update from "@/components/common/Update";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const UserList = () => {
  const { data: user, isLoading } = useFetchAllUserQuery();

  const [deleteSingleUser] = useDeleteSingleUserMutation();

  const handledeleteProduct = async (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const { success } = await deleteSingleUser(id).unwrap();
          if (success) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  //

  return isLoading ? (
    <Loading />
  ) : (
    <div className="min-h-screen p-4 md:p-8 mt-16">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        {/* All Products : {user?.user?.length} */}
      </h1>
      <div className="">
        <table className="w-full bg-white shadow-md rounded border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-gray-600 text-sm uppercase font-medium">
              <th className="py-3 px-4 text-left">#</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">email</th>
              <th className="py-3 px-4 text-left">role</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {user?.user?.map((product, index) => (
              <tr key={product._id} className=" ">
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4">{product.name}</td>
                <td className="py-3 px-4">
                  {product.email} {product.role}{" "}
                </td>
                <td className="py-3 px-4">
                  <Update
                    email={product.email}
                    role={product.role}
                    id={product._id}
                  />
                </td>
                <td className="py-3 px-4 text-center">
                  <div className="flex items-center justify-center space-x-4">
                    <button
                      onClick={() => handledeleteProduct(product._id)}
                      className="bg-red-500 text-white text-sm px-4 py-2 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
// onClick={() => handledeleteProduct(product._id)}

export default UserList;
