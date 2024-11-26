import { FaEye, FaUpload } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const { _id, name, quantity, taste, photo, category, supplier, details } = coffee;

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // console.log("confirmed")
                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            console.log(coffees)
                            const remaining = coffees.filter(cof => cof._id !== id) ;
                            // console.log(remaining)
                            setCoffees(remaining)
                            console.log(coffees)

                        }
                    })

            }
        });
    }

    return (
        <div className="card card-side bg-base-200">
            <figure>
                <img className="p-7"
                    src={photo}
                    alt="Movie" />
            </figure>
            <div className="flex justify-between items-center w-full">
                <div>
                    <h2 className="card-title">Name: <span className="text-gray-500 font-normal">{name}</span></h2>
                    <h2 className="card-title">Quantity: <span className="text-gray-500 font-normal">{quantity}</span></h2>
                    <h2 className="card-title">Supplier: <span className="text-gray-500 font-normal">{supplier}</span></h2>
                </div>
                <div className="card-actions pr-10">
                    <div className="join join-vertical gap-1">
                        <button className="btn bg-orange-500 hover:bg-orange-600 text-white"><FaEye></FaEye></button>
                        <Link to={`/updateCoffee/${_id}`}><button className="btn bg-amber-950 hover:bg-amber-800 text-white"><FaUpload></FaUpload></button></Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn bg-red-600 hover:bg-red-500 text-white"><FaDeleteLeft></FaDeleteLeft></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;