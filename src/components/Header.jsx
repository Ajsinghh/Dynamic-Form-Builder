import { IconButton } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import formimage from "../images/form-image.png"
import SearchIcon from "@mui/icons-material/Search"
import AppsIcon from "@mui/icons-material/Apps"
import {Avatar} from "@mui/material"
const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center mx-auto p-3">
        <div className="flex items-center gap-2">
          <IconButton>
            <MenuIcon />
          </IconButton>
          <img
            className="h-7 w-7 object-cover"
            src={formimage}
            alt="form image"
          />
          <p className="text-slate-700">Forms</p>
        </div>
        <div className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            name="search"
            placeholder="Search"
            className="bg-transparent focus:outline-none w-24 sm:w-96"
          />
            <SearchIcon />
        </div>
        <div className="">
          <IconButton>
            <AppsIcon />
          </IconButton>
          <IconButton>
            <Avatar />
          </IconButton>
        </div>
      </div>
    </header>
  );
}

export default Header