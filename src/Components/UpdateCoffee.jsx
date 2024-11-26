import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {

const coffee = useLoaderData()

const { _id, name, quantity, taste, photo, category, supplier, details } = coffee;

const handleUpdate = e => {
    e.preventDefault() ;
const form = e.target ;
const name = form.name.value ;
const quantity = form.quantity.value ;
const taste = form.taste.value ;
const photo = form.photo.value ;
const category = form.category.value ;
const supplier = form.supplier.value ;
const details = form.details.value ;
const updatedCoffee = {name, quantity, taste, photo, category, supplier, details}
    console.log(updatedCoffee) ;
    fetch(`http://localhost:5000/coffee/${_id}`, {
        method: 'PUT',
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify(updatedCoffee) 
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount > 0){
            // alert("done")
            Swal.fire({
                title: 'Coffee Updated!',
                text: 'Coffee successfully Updated',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
    })
}

    return (
        <div  className="min-h-screen py-10 bg-slate-100">
           
        <h1 className="text-center font-bold text-5xl">Update Coffee: {name}</h1>
        <p className="w-3/5 mx-auto text-gray-500 text-center py-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod sed nulla sint. Officiis repellendus, in suscipit deserunt eligendi animi impedit delectus. Quaerat nostrum expedita eligendi id saepe voluptatum. Tenetur, nulla!</p>

       <div className="w-3/4 mx-auto">
       <form onSubmit={handleUpdate}>
       <div className="flex gap-8 justify-between w-full pb-10">

{/* Coffee Name */}
<label className="input w-full input-bordered flex items-center gap-2">
<h2>Coffee Name :</h2>
<input type="text" name="name" className="grow" defaultValue={name} placeholder="" />
</label>

{/* Available Quantity */}
<label className="input w-full input-bordered flex items-center gap-2">
<h2>Available Quantity :</h2>
<input type="text" className="grow" defaultValue={quantity} name="quantity" placeholder="" />
</label>
</div>
<div className="flex gap-8 justify-between w-full pb-10">

{/* Supplier */}
<label className="input w-full input-bordered flex items-center gap-2">
<h2>Supplier :</h2>
<input type="text" className="grow" defaultValue={supplier} name="supplier" placeholder="" />
</label>

{/* Taste */}
<label className="input w-full input-bordered flex items-center gap-2">
<h2>Taste :</h2>
<input type="text" className="grow" defaultValue={taste} name="taste" placeholder="" />
</label>
</div>
<div className="flex gap-8 justify-between w-full pb-10">

{/* Category */}
<label className="input w-full input-bordered flex items-center gap-2">
<h2>Category :</h2>
<input type="text" className="grow" defaultValue={category} name="category" placeholder="" />
</label>

{/* Details */}
<label className="input w-full input-bordered flex items-center gap-2">
<h2>Details :</h2>
<input type="text" className="grow" defaultValue={details} name="details" placeholder="" />
</label>
</div>
<div className="flex gap-8 justify-between w-full pb-10">

{/* Photo URL */}
<label className="input w-full input-bordered flex items-center gap-2">
<h2>Photo URL :</h2>
<input type="text" className="grow" defaultValue={photo} name="photo" placeholder="" />
</label>
      
        </div>
        <div className="flex gap-8 justify-between w-full pb-10">   
<input type="submit" value="Update" className="w-full btn btn-neutral" placeholder="" />
        </div>
        </form>
       </div>
        
     </div>
    );
};

export default UpdateCoffee;