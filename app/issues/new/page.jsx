"use client"

import React from 'react'
import { TextField, TextArea,Button } from "@radix-ui/themes"

const NewIssuePage = () => {
    return (
        <div className='space-y-8 max-w-2xl'>
            <TextField.Root>
                <TextField.Input placeholder="Title..." />
            </TextField.Root>
            <TextArea placeholder="Description..." />
            <Button>Submit New Issue</Button>
        </div>
    )
}

export default NewIssuePage