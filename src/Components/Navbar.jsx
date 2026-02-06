import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ handlechange }) => {

    const [city, setcity] = useState(null)

    const seechnages = (e) =>{

        // alert()
         const selectedcity = e.target.value
            setcity(selectedcity);
        // alert(selectedcity)

        handlechange(selectedcity)
    }


    return (
        <div>
            <div className='bg-blue-900 p-4 flex items-center justify-between'>

                <div>
                    <ul className='flex gap-5 items-center'>
                        <Link to="/" className='bg-white p-2 rounded-full px-6 font-semibold text-blue-800'>City Weather</Link>
                        {/* <Link to="/about" >About</Link> */}
                    </ul>
                </div>



                <div>
                    <form className='bg-white p-2 rounded-full'>
                        <select className="w-[200px] text-blue-800 font-semibold" onChange={seechnages}>
                            <option value="">Choose City</option>
                            <option value="Udaipur">Udaipur</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Bengaluru">Bengaluru</option>
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Kolkata">Kolkata</option>
                            <option value="Pune">Pune</option>
                            <option value="Ahmedabad">Ahmedabad</option>
                            <option value="Jaipur">Jaipur</option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Lucknow">Lucknow</option>
                            <option value="Indore">Indore</option>
                            <option value="Bhopal">Bhopal</option>
                            <option value="Surat">Surat</option>
                        </select>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Navbar
