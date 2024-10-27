import MoreVertIcon from "@mui/icons-material/MoreVert"
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore"
import { IconButton } from "@mui/material"
import plusSign from '../images/new-form.png'
import uuid from "react-uuid"
import { useNavigate } from "react-router-dom"
const Template = () => {
 const navigate = useNavigate();
 const handleNewForm = ()=>{
    const id = uuid();
    console.log(id);
    navigate(`/form/${id}`);
 }

  return (
    <div className="bg-slate-100 py-3 px-52 flex flex-col gap-4">
      <div className="template-top  flex items-center justify-between">
        <div className="template-left">
          <span className="" style={{ fontSize: "16px", color: "#202124" }}>
            Start a new form
          </span>
        </div>
        <div className="template-right flex items-center">
          <div className="gallery-button">
            Template gallery
            <UnfoldMoreIcon />
          </div>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="template-body flex gap-5">
        <div className="card" onClick={handleNewForm}>
            <img src={plusSign} alt="new form" className="h-16 w-16"/>
            <span>Blank</span>
        </div>
        <div className="card">
            <img src={plusSign} alt="new form" className="h-16 w-16"/>
            <span>Contact Information</span>
        </div>
        <div className="card">
            <img src={plusSign} alt="new form" className="h-16 w-16"/>
            <span>Feedback Form</span>
        </div>
      </div>
    </div>
  );
}

export default Template