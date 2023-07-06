import React, { useState } from "react";
import { IconButton, Collapse } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

interface ExpandableButtonProps {
  children: React.ReactNode;
}

function ExpandableButton({ children }: ExpandableButtonProps) {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {children}
      </Collapse>
      <IconButton
        onClick={handleExpand}
        size="small"
        sx={{
          transition: "transform 0.3s",
          width: "100%",
          borderRadius: "10px",
        }}
        aria-expanded={expanded}
        aria-label="expand"
      >
        <ExpandMore
          sx={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </IconButton>
    </>
  );
}

export default ExpandableButton;
