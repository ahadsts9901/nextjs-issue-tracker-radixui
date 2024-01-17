"use client"

import React from 'react'
import { TextField, TextArea, Button } from "@radix-ui/themes"
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssuePage = () => {
    return (
        <div className='space-y-8 max-w-2xl'>
            <TextField.Root>
                <TextField.Input placeholder="Title..." />
            </TextField.Root>
            {/* <TextArea placeholder="Description..." /> */}
            <SimpleMDE />
            <Button>Submit New Issue</Button>
        </div>
    )
}

export default NewIssuePage