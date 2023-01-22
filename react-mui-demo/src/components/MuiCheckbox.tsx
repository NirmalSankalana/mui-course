import React, { useState } from "react";
import {
    Box,
    FormControlLabel,
    Checkbox,
    FormControl,
    FormLabel,
    FormGroup,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
export const MuiCheckbox = () => {
    const [acceptTnC, setAcceptTnC] = useState(false);
    console.log({ acceptTnC });

    const changeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAcceptTnC(event.target.checked);
    };

    const [skills, setSkills] = useState<string[]>([]);

    const handleSkillsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = skills.indexOf(event.target.value);
        if (index === -1) {
            setSkills([...skills, event.target.value]);
        } else {
            setSkills(skills.filter((skill) => skill !== event.target.value))
        }
    }
    console.log(skills)
    return (
        <Box>
            <Box>
                <FormControlLabel
                    label="I accept terms and conddtions"
                    control={<Checkbox checked={acceptTnC} onChange={changeHandle} />}
                />
            </Box>
            <Box>
                <Checkbox
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookmarkIcon />}
                    checked={acceptTnC}
                    onChange={changeHandle}
                />
            </Box>
            <Box>
                <FormControl>
                    <FormLabel>Skills</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            label="HTML" value="html"
                            control={<Checkbox checked={skills.includes('html')} onChange={handleSkillsChange} />}
                        />
                        <FormControlLabel
                            label="CSS" value="css"
                            control={<Checkbox checked={skills.includes('css')} onChange={handleSkillsChange} />}
                        />
                        <FormControlLabel
                            label="JAVASCRIPT" value="js"
                            control={<Checkbox checked={skills.includes('js')} onChange={handleSkillsChange} />}
                        />
                    </FormGroup>
                </FormControl>
            </Box>
        </Box>
    );
};
