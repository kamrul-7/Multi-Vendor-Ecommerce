import { lazy } from "react"
const Login=lazy(()=>import("./../../views/auth/Login"))
const Register=lazy(()=>import("./../../views/auth/Register"))
const AdminLogin=lazy(()=>import("./../../views/auth/AdminLogin"))
const publicRoute =[
    {path:'/login',
        element:<Login></Login>
    },
    {path:'/register',
        element:<Register></Register>
    },
    {path:'/admin/login',
        element:<AdminLogin></AdminLogin>
    },
]

export default publicRoute;