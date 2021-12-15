import { Link, MenuItem } from "@mui/material";

export const Home = () => {
    return (
        <div className="wrapper">
            <h1>Home</h1>
            <div>                                
                <Link to={"/signup"} style={{ textDecoration: 'none' }}>
                    <MenuItem>Signup</MenuItem>
                </Link>
            </div>
            <div>
                <Link to={"/login"} style={{ textDecoration: 'none' }}>
                    <MenuItem>Login</MenuItem>
                </Link>
            </div>
        </div>
    )
}
export default Home;