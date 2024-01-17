import mongoose from 'mongoose';

const modelName = 'issues';
if (mongoose.models[modelName]) {
    delete mongoose.models[modelName];
}

const issueSchema = new mongoose.Schema({
    title: {
        type: String,
        maxlength: 255,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['OPEN', 'IN_PROGRESS', 'CLOSE'],
        default: 'OPEN',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

export const issueModel = mongoose.model(modelName, issueSchema);