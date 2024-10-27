import StorageIcon from "@mui/icons-material/Storage";
import { IconButton } from "@mui/material";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import newForm from "../images/new-form.png"
const Body = () => {
  return (
    <div className="py-3 px-52 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>Recent Forms</div>
        <div className="flex items-center">
          <div style={{ fontSize: "14px", marginRight: "125px" }}>
            Owned by anyone <ArrowDropDownIcon />
          </div>
          <IconButton>
            <StorageIcon style={{ fontSize: "16px", color: "black" }} />
          </IconButton>
          <IconButton>
            <FolderOpenIcon style={{ fontSize: "16px", color: "black" }} />
          </IconButton>
        </div>
      </div>
      <div>
        <div className="max-w-40">
            <img src={newForm} className="h-16 w-16"/>
            <div>
                <h5></h5>
                <div className="flex justify-between items-center" style={{fontSize:"12px", color:"grey"}}>
                    <div className="flex items-center">
                        <StorageIcon style={{color:"white", fontSize:"12ppx", backgroundColor:"#6E2594", padding:"3px", borderRadius:"2px"}}/>
                        Opened 20 July 2024
                    </div>
                         <MoreVertIcon style={{fontSize:"16px" , color:"grey"}}/>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
