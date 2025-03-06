"use client";



const Form = () => {
    async function clientAction(formdata: FormData){
        // const result = singnupForm(formdata);
        // if(result?.message || result?.error){

        // }

    }
  return (         <form action={clientAction} className="mt-6">
        <div className="flex flex-col text-sm">
          <label className="font-[500] mb-1">Username</label>
          <input
            type="text"
            name="username"
            className="border border-gray-400 px-3 py-1.5 rounded-lg mt-1 text-gray-700 font-[400]"
            placeholder="Enter your username"
          />
        </div>

        <div className="flex flex-col text-sm mt-6">
          <label className="font-[500] mb-1">Email address</label>
          <input
            type="email"
            name="email"
            className="border border-gray-400 px-3 py-1.5 rounded-lg mt-1 text-gray-700 font-[400]"
            placeholder="Enter your email address"
          />
        </div>

        <div className="flex flex-col text-sm mt-6">
          <label className="font-[500] mb-1">Password</label>
          <input
            type="password"
            name="password"
            className="border border-gray-400 px-3 py-1.5 rounded-lg mt-1 text-gray-700 font-[400]"
            placeholder="Enter your password"
          />
        </div>

        <div className="flex justify-center mt-8 w-full">
          <div className="w-full">
            <button
              type="submit"
              className="flex items-center justify-center bg-[#0077b6] rounded-lg px-2 py-2 text-sm font-medium text-gray-50 hover:bg-[#023e8a] w-full md:w-96"
               >
              Sign Up
            </button>
          </div>
        </div>
      </form>
  )
}

export default Form
