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
import ErrorMessage from '@/app/components/ErrorMessage';
import Spinner from '@/app/components/Spinner';

const NewIssuePage = () => {

    const [error, setError] = useState(null)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const { register, control, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(createIssueSchema),
    })
    const router = useRouter()

    const submitIssue = handleSubmit(async (data) => {
        try {
            setIsSubmitting(true)
            const resp = await axios.post('/api/issues', data)
            router.push('/')
        } catch (error) {
            setIsSubmitting(false)
            setError('An unexpected error occured')
        }
    })

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
                onSubmit={submitIssue}>
                <ErrorMessage>
                    {errors.title?.message}
                </ErrorMessage>
                <TextField.Root>
                    <TextField.Input placeholder="Title..." {...register("title")} />
                </TextField.Root>
                {/* <TextArea placeholder="Description..." /> */}
                <ErrorMessage>
                    {errors.description?.message}
                </ErrorMessage>
                <Controller
                    name='description'
                    control={control}
                    render={({ field }) => <SimpleMDE {...field} />}
                />
                <Button disabled={isSubmitting} >Submit New Issue {isSubmitting && <Spinner />} </Button>
            </form>
        </div>
    )
}

export default NewIssuePage