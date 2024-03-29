import "../mongodb.mjs";
import { createIssueSchema } from "../../validationSchema.mjs";
import { issueModel } from "../../schema.mjs";
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req, res) => {

    const body = await req.json();
    const validation = createIssueSchema.safeParse(body);

    if (!validation.success) {
        return NextResponse.json(
            validation.error.format(),
            { status: 400 }
        );
    }

    const resp = await issueModel.create(body);

    return NextResponse.json({
        message: "issue created successfully",
    });
};