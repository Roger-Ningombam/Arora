import { NextResponse } from 'next/server';
import { z } from 'zod';

// Define the schema again for backend validation
const leadSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    company: z.string().min(2),
    projectType: z.string().min(1),
    budget: z.string().min(1),
    message: z.string().optional(),
});

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Validate the data
        const data = leadSchema.parse(body);

        // In a real application, you would send this to your CRM or Email Service
        // For now, we'll log it to confirm it works
        console.log('[LEAD RECEIVED]', data);

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Success response
        return NextResponse.json({
            success: true,
            message: 'Lead received successfully'
        });

    } catch (error) {
        console.error('Lead submission error:', error);

        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { error: 'Validation failed', details: error.flatten() },
                { status: 400 }
            );
        }

        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
