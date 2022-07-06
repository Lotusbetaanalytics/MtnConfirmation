import { Box, styled, TextField, Typography } from "@material-ui/core";
import * as React from "react";
import { Header } from "../../../../Containers";
import { TextAreaSmall } from "../../../../Containers/TextArea";
import styles from "../Supervisory Section 2/section2.module.scss";
import { useHistory } from "react-router-dom";

type Props = {};

const ConfirmationSummary = (props: Props) => {
  const history = useHistory();
  const prevHandler = () => {
    history.push("/view-supervisory/section1");
  };
  const [jobSummary, setJobSummary] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  return (
    <Box>
      <Header title="Confirmation Summary" />
      <Box sx={{ padding: "30px" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            mt: 4,
          }}
          style={{ gap: "20px" }}
        >
          <Box sx={labelStyles}>Job Responsibilities (Summary)</Box>
          <Box
            style={{
              display: "flex",
              gap: "2px",
              flexDirection: "column",
              maxWidth: "85%",
            }}
          >
            <Typography>Comment</Typography>
            <TextAreaSmall
              value={jobSummary}
              rows={8}
              onChange={(e): void => {
                setJobSummary(e.target.value);
              }}
            />
          </Box>
        </Box>
        <FormSectionHeader variant="subtitle2">Documentation</FormSectionHeader>
        <Box style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          <Box
            sx={{
              display: "grid",
              alignItems: "center",
              gridTemplateColumns: "1fr 1fr 1fr",
            }}
            style={{ gap: "20px" }}
          >
            <Box sx={labelStyles}>Copies of Credentials</Box>
            <Box style={{ display: "flex", gap: "20px" }}>
              <input type="checkbox" />
              <Typography>(Please tick the box)</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "grid",
              alignItems: "center",
              gridTemplateColumns: "1fr 1fr 1fr",
            }}
            style={{ gap: "20px" }}
          >
            <Box sx={labelStyles}>Passport Photograph</Box>
            <Box style={{ display: "flex", gap: "20px" }}>
              <input type="checkbox" />
              <Typography>(Please tick the box)</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "grid",
              alignItems: "center",
              gridTemplateColumns: "1fr 1fr 1fr",
            }}
            style={{ gap: "20px" }}
          >
            <Box sx={labelStyles}>Satisfactory reference of ex employer</Box>
            <Box style={{ display: "flex", gap: "20px" }}>
              <input type="checkbox" />
              <Typography>(Please tick the box)</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "grid",
              alignItems: "center",
              gridTemplateColumns: "1fr 1fr 1fr",
            }}
            style={{ gap: "20px" }}
          >
            <Box sx={labelStyles}>HRIS Bio Date</Box>
            <Box style={{ display: "flex", gap: "20px" }}>
              <input type="checkbox" />
              <Typography>(Please tick the box)</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "grid",
              alignItems: "center",
              gridTemplateColumns: "1fr 1fr 1fr",
            }}
            style={{ gap: "20px" }}
          >
            <Box sx={labelStyles}>NYSC Discharge/Exemption Certificate</Box>
            <Box style={{ display: "flex", gap: "20px" }}>
              <input type="checkbox" />
              <Typography>(Please tick the box)</Typography>
            </Box>
          </Box>
        </Box>
        <FormSectionHeader variant="subtitle2">
          Confirmation Approvals
        </FormSectionHeader>
        <Box style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          <Box
            sx={{
              display: "grid",
              alignItems: "center",
              gridTemplateColumns: "1fr 1fr 1fr",
            }}
            style={{ gap: "20px" }}
          >
            <Box sx={labelStyles}>Line Manager's Signoff</Box>
            <Box style={{ display: "flex", gap: "20px" }}>
              <input type="checkbox" />
              <Typography>(Please tick the box)</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "grid",
              alignItems: "center",
              gridTemplateColumns: "1fr 1fr 1fr",
            }}
            style={{ gap: "20px" }}
          >
            <Box sx={labelStyles}>HR Business Partners Signoff Included</Box>
            <Box style={{ display: "flex", gap: "20px" }}>
              <input type="checkbox" />
              <Typography>(Please tick the box)</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <div className={`${styles.evaluation__section__button} `}>
        <div className="mtn__btnContaainer">
          <div>
            <button
              className="mtn__btn mtn__blackOutline"
              type="button"
              onClick={() => prevHandler()}
              disabled={loading}
            >
              Cancel
            </button>
          </div>
          <div>
            <button
              className="mtn__btn mtn__black"
              type="submit"
              disabled={loading}
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default ConfirmationSummary;

const FormSectionHeader = styled(Typography)({
  color: "rgba(0, 0, 0, 1)",
  marginTop: "2rem",
  fontWeight: "bold",
  mb: 0,
});

const labelStyles = {
  display: "flex",
  alignItems: "center",
  height: "80px",
  backgroundColor: "#FFC423",
  borderRadius: "10px",
  color: "rgba(0, 0, 0, 1)",
  maxWidth: "100%",
  paddingLeft: "20px",
  boxSizing: "border-box",
};
