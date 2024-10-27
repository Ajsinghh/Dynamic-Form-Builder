import { Paper, Tabs, Tab } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledPaper = styled(Paper)({
  flexGrow: 1,
});

const StyledTabs = styled(Tabs)({
  height: 10,
});

const StyledTab = styled(Tab)({
  fontSize: 12,
  color: "#5f6368",
  textTransform: "capitalize",
  height: 10,
  fontWeight: 600,
  fontFamily: "Google Sans, Roboto, Arial, sans-serif",
});

const QuesNResTabs = () => {
  return (
    <StyledPaper>
      <StyledTabs centered textColor="primary" indicatorColor="primary">
        <StyledTab  label="Questions"></StyledTab>
        <StyledTab  label="Responses"></StyledTab>
      </StyledTabs>
    </StyledPaper>
  );
};

export default QuesNResTabs;
