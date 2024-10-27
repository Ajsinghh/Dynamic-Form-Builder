import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ShortTextIcon from "@mui/icons-material/ShortText";
import SubjectIcon from "@mui/icons-material/Subject";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FilterNoneIcon from "@mui/icons-material/FilterNone";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import OnDemandVideoIcon from "@mui/icons-material/OnDemandVideo";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import CloseIcon from "@mui/icons-material/Close";
import { Icon, IconButton, MenuItem } from "@mui/material";
import { Typography } from "@mui/material";
import Select from "@mui/material/Select";
import Switch from "@mui/material/Switch";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import {BsTrash} from "react-icons/bs"
import {BsFileText} from "react-icons/bs"
import {FcRightUp} from "react-icons/fc"
import { useState } from "react";
import "./QuestionTab.css";
const QuestionTab = () => {
    const [questions, setQuestions] = useState(
        [
            {
                questionText: "which is capital of haryana",
                questionType: "radio",
                options: [
                    {optionText: "jind"},
                    {optionText: "rohtak"},
                    {optionText: "gurugao"},
                    {optionText: "chandigarh"},
                ],
                open: true,
                required:false
            }
        ]
    )

    const changeQuestion = (text, i)=>{
       var newQuestion = [...questions];
       newQuestion[i].questionText = text;
       setQuestions(newQuestion);
    }

    const addQuestionType = (i, type)=>{
       let qs = [...questions];
       console.log(qs);
       qs[i].questionType = type;
       setQuestions(qs);
    }

    const changeOptionValue = (text, i , j)=>{
      var optionsQuestion = [...questions];
      optionsQuestion[i].options[j].optionText = text;
      setQuestions(optionsQuestion);
    } 

   const questionsUI = ()=>{
       return questions.map((ques, i) => (
         <div key={i} className="border-l-4 border-l-sky-500">
           <Accordion
             expanded={ques.open}
             className={ques.open ? "border" : ""}
           >
             <AccordionSummary
               aria-controls="panelia-content"
               id="panelia-header"
               elevation={1}
               style={{ width: "100% " }}
             >
               {!questions[i].open ? (
                 <div className="saved-question">
                   <Typography
                     style={{
                       fontSize: "15px",
                       fontWeight: "400",
                       letterSpacing: ".1px",
                       lineHeight: "24px",
                       paddingBottom: "8px",
                     }}
                   >
                     {i + 1}.{questions[i].questionText}
                   </Typography>
                   {ques.options.map((op, j) => (
                     <div key={j}>
                       <div className="flex">
                         <FormControlLabel
                           className="ml-1 mb-1"
                           disabled
                           control={
                             <input
                               type={ques.questionType}
                               color="primary"
                               className="mr-1"
                               required={ques.type}
                             />
                           }
                           label={
                             <Typography
                               className="font-serif text-sm font-normal leading-5 "
                               style={{
                                 letterSpacing: ".2px",
                                 color: "#202124",
                               }}
                             >
                               {ques.options[j].optionText}
                             </Typography>
                           }
                         />
                       </div>
                     </div>
                   ))}
                 </div>
               ) : (
                 ""
               )}
             </AccordionSummary>
             <div className="question-boxes flex flex-row justify-center">
               <AccordionDetails className="add-question bg-white  rounded-lg px-6 py-5 capitalize flex flex-col pt-0 ml-2 w-11/12">
                 <div className="add-question-top flex justify-between items-center">
                   <input
                     type="text"
                     className="question box-border mt-2 font-sans text-base font-normal flex-1 leading-3 w-2/5 border-none outline-none text-black h-10 mr-2 p-2 focus:border-b-[1px] focus:border-b-[#673AB7] focus:bg-[#f4f4f9]"
                     placeholder="Question"
                     onChange={(e)=>{changeQuestion(e.target.value , i)}}
                     value={ques.questionText}
                   />
                   <CropOriginalIcon style={{ color: "#5f6368" }} />
                   <Select
                     className="h-10 w-56 border  border-b-2 border-[#f4f4f9] rounded-sm bg-transparent px-1 py-4 text-black mx-2 "
                     style={{ color: "#5f6368", fontSize: "13px" }}
                   >
                     <MenuItem
                       style={{ color: "rgba(118, 118, 118, 0.3)" }}
                       id="text"
                       value="Text"
                       onClick={()=>{addQuestionType(i,'text')}}
                     >
                       <SubjectIcon className="mr-3" /> Paragraph
                     </MenuItem>
                     <MenuItem
                       style={{ color: "rgba(118, 118, 118, 0.3)" }}
                       id="checkbox"
                       value="Checkbox"
                       onClick={()=>{addQuestionType(i,'checkbox')}}
                     >
                       <CheckBoxIcon
                         style={{ color: "#70757a" }}
                         className="mr-3"
                         checked
                       />{" "}
                       Checkboxes
                     </MenuItem>
                     <MenuItem
                       style={{ color: "rgba(118, 118, 118, 0.3)" }}
                       id="radio"
                       value="Radio"
                       onClick={()=>{addQuestionType(i,'radio')}}
                     >
                       <Radio
                         style={{ color: "#70757a" }}
                         className="mr-3"
                         checked
                       />{" "}
                       Multiple Choice
                     </MenuItem>
                   </Select>
                 </div>
                 {ques.options.map((op, j) => (
                   <div className="add-question-body flex items-center" key={j}>
                     {ques.questionType != "text" ? (
                       <input type={ques.questionType} className="mr-3" />
                     ) : (
                       <ShortTextIcon style={{ color: "#5f6368" }} />
                     )}
                     <div>
                       <input
                         type="text"
                         className="text-input outline-none border-none h-10 w-[490px] font-sans text-sm font-normal focus:border-b-[1.5px] focus:border-b-purple-700"
                         style={{ letterSpacing: ".2px", color: "#202124" }}
                         placeholder="option"
                         value={ques.options[j].optionText}
                         onChange={(e)=>{changeOptionValue(e.target.value, i , j)}}
                       />
                     </div>
                     <CropOriginalIcon style={{ color: "#5f6369" }} />
                     <IconButton aria-label="delete">
                       <CloseIcon />
                     </IconButton>
                   </div>
                 ))}
                 {ques.options.length < 5 ? (
                   <div className="add_question_body flex items-center">
                     <FormControlLabel
                       disabled
                       control={
                         ques.questionType != "text" ? (
                           <input
                             type={ques.questionType}
                             color="primary"
                             aria-label="secondary checkbox"
                             className="mx-3"
                             disabled
                           />
                         ) : (
                           <ShortTextIcon className="mr-3" />
                         )
                       }
                       label={
                         <div>
                           <input
                             type="text"
                             className="text-input outline-none border-none h-10  font-sans  font-normal focus:border-b-[1.5px] focus:border-b-purple-700 text-sm w-20"
                             placeholder="Add Other"
                           />
                           <Button
                             size="small"
                             className="transform-none text-sm font-bold"
                             style={{ color: "#4285f4" }}
                           >
                             Add Option
                           </Button>
                         </div>
                       }
                     />
                   </div>
                 ) : (
                   ""
                 )}
                 <div className="add_footer flex items-center justify-between">
                   <div className="add-question-bottom-left mt-3 border-t-2 flex justify-end items-center ">
                     <Button
                       size="small"
                       className="normal-case text-sm font-semibold"
                       style={{ color: "#4285f4" }}
                     >
                       <FcRightUp className="border-[2px] border-[#4285f4] p-[2px] mr-2" />{" "}
                       Answer Key
                     </Button>
                   </div>
                   <div className="add_question_bottom mt-3 border-t-2 flex justify-end items-center">
                     <IconButton aria-label="copy">
                       <FilterNoneIcon />
                     </IconButton>
                     <IconButton aria-label="delete">
                       <BsTrash />
                     </IconButton>
                     <span className="text-sm" style={{ color: "#5f6368" }}>
                       Required{" "}
                       <Switch
                         name="checkedA"
                         color="primary"
                         checked={false}
                       />{" "}
                     </span>
                     <IconButton>
                       <MoreVertIcon />
                     </IconButton>
                   </div>
                 </div>
               </AccordionDetails>
               <div className="question_edit">
                 <AddCircleOutlineIcon className="edit" fontSize="large" />
                 <OnDemandVideoIcon className="edit" fontSize="large" />
                 <CropOriginalIcon className="edit" fontSize="large" />
                 <TextFieldsIcon className="edit" fontSize="large" />
               </div>
             </div>
           </Accordion>
         </div>
       ));
   }

  return (
    <div>
      <div
        className="question_form pb-7"
        style={{ backgroundColor: "#f4f4f9" }}
      >
        <br></br>
        <div className="section m-auto max-w-[50%]">
          <div className="question-title-section">
            <div className="question-form-top bg-white border-t-8  border-t-purple-800 border rounded-lg px-8 py-6 capitalize">
              <input
                type="text"
                className="question-form-top-name border-b-1 text-black h-9 w-full font-sans text-3xl font-normal leading-10 box-border border-none outline-none"
                style={{ color: "black" }}
                placeholder="Untitled document"
              />
              <input
                type="text"
                className="question-form-top-desc box-border mt-3 font-sans text-sm font-normal leading-10 w-full outline-none border-none border-b-2 text-black h-5"
                style={{ color: "black" }}
                placeholder="Form Description"
              />
            </div>
          </div>
          {questionsUI()}
        </div>
      </div>
    </div>
  );
};

export default QuestionTab;
