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
import { BsSnapchat, BsTrash } from "react-icons/bs";
import { BsFileText } from "react-icons/bs";
import { FcRightUp } from "react-icons/fc";
import { useState } from "react";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./QuestionTab.css";

const QuestionTab = () => {
  const [questions, setQuestions] = useState([
    {
      questionText: "which is capital of haryana",
      questionType: "radio",
      options: [
        { optionText: "jind" },
        { optionText: "rohtak" },
        { optionText: "gurugao" },
        { optionText: "chandigarh" },
      ],
      open: true,
      required: false,
    },
  ]);

  const changeQuestion = (text, i) => {
    var newQuestion = [...questions];
    newQuestion[i].questionText = text;
    setQuestions(newQuestion);
  };

  const addQuestionType = (i, type) => {
    let qs = [...questions];
    console.log(qs);
    qs[i].questionType = type;
    setQuestions(qs);
  };

  const changeOptionValue = (text, i, j) => {
    var optionsQuestion = [...questions];
    optionsQuestion[i].options[j].optionText = text;
    setQuestions(optionsQuestion);
  };

  const removeOption = (i, j) => {
    var removeOptionQuestion = [...questions];
    if (removeOptionQuestion[i].options.length > 1) {
      removeOptionQuestion[i].options.splice(j, 1);
      setQuestions(removeOptionQuestion);
    }
  };

  const addOption = (i) => {
    var optionsOfQuestion = [...questions];
    if (optionsOfQuestion[i].options.length < 5) {
      optionsOfQuestion[i].options.push({
        optionText: "Option" + (optionsOfQuestion[i].options.length + 1),
      });
    } else {
      console.log("Max 5 option");
    }
    setQuestions(optionsOfQuestion);
  };

  const copyQuestion = (i) => {
    let qs = [...questions];
    var newQuestion = qs[i];
    setQuestions([...questions, newQuestion]);
  };
  const deleteQuestion = (i) => {
    let qs = [...questions];
    if (questions.length > 1) {
      qs.splice(i, 1);
    }
    setQuestions(qs);
  };

  const requiredQuestion = (i) => {
    var reqQuestion = [...questions];
    reqQuestion[i].required = !reqQuestion[i].required;
    setQuestions(reqQuestion);
  };

  const addMoreQuestionField = () => {
    setQuestions([
      ...questions,
      {
        questionText: "Question",
        questionType: "radio",
        options: [{ optionText: "Option 1" }],
        open: true,
        required: false,
      },
    ]);
  };

  const onDragEnd = (result)=>{
     if(result.destination){
        return;
     }
     var itemgg = [...questions];
     const itemF = reorder(
        itemgg,
        result.source.index,
        result.destination.index
     )
     setQuestions(itemF)
  }

  const reorder = (list,startIndex,endIndex)=>{
     const result = Array.from(list);
     const [removed] = result.splice(startIndex,1);
     result.splice(endIndex, 0 , removed);
     return result
  }

  const questionsUI = () => {
    return questions.map((ques, i) => (
        <Draggable key={i} draggableId={i + 'id'} index={i}>
            {(prov)}
        </Draggable>
    ));
  };

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
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                    {questionsUI()}
                    {provided.placeholder}
                    </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
    </div>
  );
};

export default QuestionTab;
