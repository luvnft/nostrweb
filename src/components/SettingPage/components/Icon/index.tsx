import React, { useEffect, useRef, useState } from "react";
import {
  StyledFormControl,
  StyledHeadSettingBlock,
  StyledSettingBlock,
  StyledSettingCol,
} from "@/components/SettingPage/styled";
import { InputLabel, OutlinedInput, Typography } from "@mui/material";
import { SaveButton } from "@/components/SettingPage/components/SaveButton";
import { useEditSettingMode } from "@/hooks/useEditSettingMode";
import { IBaseSetting } from "@/types/setting.types";
import { HASH_CONFIG } from "@/consts";

interface ITitleDescription extends IBaseSetting {
  icon: string;
}

export const Icon = ({
  icon,
  handleChange,
  handleBlur,
  submitForm,
  isLoading,
}: ITitleDescription) => {
  const [isEdit, handleAction] = useEditSettingMode(submitForm);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDisabled, setDisabled] = useState(false);
  const handleClick = () => {
    handleAction().then();
    setDisabled((prev) => !prev);
  };

  useEffect(() => {
    if (inputRef.current && isDisabled) {
      inputRef.current.focus();
    }
  }, [isDisabled]);

  return (
    <StyledSettingCol id={HASH_CONFIG.ICON}>
      <StyledSettingBlock>
        <StyledHeadSettingBlock>
          <Typography variant="h6">Icon</Typography>

          <SaveButton
            isEdit={isEdit}
            isLoading={isLoading}
            handleAction={handleClick}
          />
        </StyledHeadSettingBlock>

        <Typography variant="body2" sx={{ mb: 1 }}>
          Icon for site
        </Typography>

        <StyledFormControl disabled={!isEdit} fullWidth size="small">
          <InputLabel htmlFor="icon">Icon url</InputLabel>
          <OutlinedInput
            inputRef={inputRef}
            id="icon"
            name="icon"
            label="Icon url"
            onChange={handleChange}
            value={icon}
            onBlur={handleBlur}
          />
        </StyledFormControl>
      </StyledSettingBlock>
    </StyledSettingCol>
  );
};
