import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const schema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(8),
    city: z.string().optional(),
    subject: z.string().optional(),
    message: z.string().min(5),
    honeypot: z.string().optional().or(z.literal(''))
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const result = schema.safeParse(body);

        if (!result.success) {
            return NextResponse.json({ error: 'Validation failed' }, { status: 400 });
        }

        const { name, email, phone, city, subject, message, honeypot } = result.data;

        // Honeypot check
        if (honeypot && honeypot.length > 0) {
            // It's a bot, return success to deceive
            return NextResponse.json({ success: true });
        }

        await prisma.lead.create({
            data: {
                name,
                email,
                phone,
                city: city || 'Onbekend',
                subject: subject || 'Algemeen',
                message
            }
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Lead error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
