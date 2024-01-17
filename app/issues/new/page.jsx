"use client"

import React, { useState } from 'react'
import { TextField, TextArea, Button, Callout, Text } from "@radix-ui/themes"
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from 'react-hook-form';
import axios from "axios";
import { useRouter } from 'next/navigation';
import { createIssueSchema } from "../../validationSchema.mjs";
import { zodResolver } from "@hookform/resolvers/zod";

const NewIssuePage = () => {

    const [error, setError] = useState(null)

    const { register, control, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(createIssueSchema),
    })
    const router = useRouter()

    return (
        <div className='max-w-2xl'>
            {
                error &&
                <Callout.Root className='mb-6' color='red'>
                    <Callout.Text>
                        {error}
                    </Callout.Text>
                </Callout.Root>
            }
            <form
                className='space-y-8'
                onSubmit={handleSubmit(async (data) => {
                    try {
                        const resp = await axios.post('/api/issues', data)
                        router.push('/')
                    } catch (error) {
                        setError('An unexpected error occured')
                    }
                })}>
                <TextField.Root>
                    <TextField.Input placeholder="Title..." {...register("title")} />
                </TextField.Root>
                {
                    errors.title && <Text color="red" as='p'>{errors.title.message}</Text>
                }
                {/* <TextArea placeholder="Description..." /> */}
                <Controller
                    name='description'
                    control={control}
                    render={({ field }) => <SimpleMDE {...field} />}
                />
                {
                    errors.description && <Text color="red" as='p' style={{
                        marginTop: "0"
                    }} >{errors.description.message}</Text>
                }
                <Button>Submit New Issue</Button>
            </form>
        </div>
    )
}

export default NewIssuePage