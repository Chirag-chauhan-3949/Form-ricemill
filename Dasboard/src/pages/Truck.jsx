import React ,{useState} from 'react';
import { Link } from 'react-router-dom'
const Add_New_Truck  = () => {
  const [truckData, setTruckData] = useState({
    truck_number: 0,
    transporter: "", // Note: You might want to fix the typo here (should be transporter)
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTruckData({
      ...truckData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/truck/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(truckData),
      });

      if (response.status === 201) {
        console.log("Truck added successfully");
        // Optionally, you can handle success here (e.g., show a success message)
      } else {
        console.error("Failed to add truck");
        // Optionally, you can handle errors here (e.g., show an error message)
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

    return (
        <div className='ml-[400px] h-fit w-8/12 pb-6 border-[#000000] border-[10px] rounded'>
        <h1 className='flex items-center justify-center font-mono font-bold tracking-normal text-3xl h-12 w-full bg-[#000000] text-[#ffffff]'>Add New Truck</h1>
        <form onSubmit={handleSubmit}>
          <fieldset className='m-10 '>
            <label className=' text-lg'>Truck Number <input className='border-black rounded border-[1px] h-9 w-[450px] mt-2 p-1 mb-7' type="number" name='truck_number' value={truckData.truck_number} onChange={handleInputChange}/> </label><br />
            <label>Truck driver name <input className='border-black rounded border-[1px] h-9 w-[450px] mt-2 p-1 mb-7' type="text" name='transporter' value={truckData.transporter} onChange={handleInputChange}/> </label><br />
            {/* <label className=' text-lg' htmlFor='transporter'>Select Transporter<span className=' text-red-900 font-bold '>(Required*)</span></label><br />            
            <select autoComplete='off' value={truckData.transporter} onChange={handleInputChange} className='border-[1px] rounded-[4px] h-9 w-[450px] mb-2 border-black bg-white' id="transporter" name="transporter">
                    <option value=""></option>
                    <option value="saab">mnjsdb</option>
                    <option value="fiat">fksknfjsnk</option>
                    <option value="audi">jejesnj</option>
            </select> */}
            <h2 className='block subpixel-antialiased font-mono'>Cannot Find Transporter?<Link to="/Add_NEw_Transporter"> <span className=' text-blue-600 '>Add New Transporter..</span></Link></h2>
          </fieldset>
          <button type='submit' className='ml-[45px] w-40 h-10 bg-black text-white rounded-[4px]'>Add New Truck</button>
        </form>
    </div>
    );
};

export default Add_New_Truck ;