import "../mongodb.mjs"
import { createIssueSchema } from "../../validationSchema.mjs"
import { issueModel } from "../../schema.mjs"

export const POST = async (req, res) => {

    const body = await req.json()
    const validation = createIssueSchema.safeParse(body)

    if (!validation.success) {
        return res.status(400).json({
            message: "validation error",
        })
    }

    const response = await issueModel.create(body)
    console.log(response);

    res.json({
        message: "issue created successfully",
    })

}