const Contact = () => {
    return(
        <div>
            <div className="m-2 p-2">
            <h1 className="font-bold text-3xl m-2 p-2">Contact </h1>
            <p>If you have any compliant , please submit it through our email system.</p>
            <p>abc@gmail.com</p>
       
            <form className="m-5 p-5">
                <input className="border border-black mx-5 " type = "text " placeholder="Name"></input>
                <input className="border border-black" type = "text" placeholder="Email"></input>
                <button className="bg-gray-200 m-2 p-2 rounded-3xl">Submit</button>
            </form>
                 </div>
        
        </div>
    )
}

export default Contact