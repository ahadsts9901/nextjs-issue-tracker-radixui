"use client"

import React from 'react'
import { TextField, TextArea, Button } from "@radix-ui/themes"
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from 'react-hook-form';
import axios from "axios";
import { useRouter } from 'next/navigation';

const NewIssuePage = () => {

    const { register, control, handleSubmit } = useForm()
    const router = useRouter()

    return (
        <form
            className='space-y-8 max-w-2xl'
            onSubmit={handleSubmit(async (data) => {
                try {
                    const resp = await axios.post('/api/issues', data)
                    router.push('/')
                } catch (error) {
                    console.log("error", error);
                }
            })}>
            <TextField.Root>
                <TextField.Input placeholder="Title..." {...register("title")} />
            </TextField.Root>
            {/* <TextArea placeholder="Description..." /> */}
            <Controller
                name='description'
                control={control}
                render={({ field }) => <SimpleMDE {...field} />}
            />
            <Button>Submit New Issue</Button>
        </form>
    )
}

export default NewIssuePage