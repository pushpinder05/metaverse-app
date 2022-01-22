import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
    const { authenticate,  } = useMoralis();

  return (
  <div className="bg-black relative">
      <h1>I am the login screen</h1>
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
        <Image className="object-cover rounded-full" src="https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" height={200} width={200} />

        <button onClick={ authenticate } className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse">Login to the METAVERSE</button>
      </div>

      <div className="w-full h-screen">
          <Image src="https://links.papareact.com/55n" layout="fill" objectFit="cover" />
      </div>
  </div>
  )
}

export default Login;


//https://links.papareact.com/3pi