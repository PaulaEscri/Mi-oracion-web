import { NextRequest, NextResponse } from "next/server";

// Interface for the request body
interface WaitlistRequest {
    email: string;
    country: string;
    language: string;
}

export async function POST(request: NextRequest) {
    try {
        const body: WaitlistRequest = await request.json();
        const { email, country, language } = body;

        // Validation
        if (!email || !country || !language) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "Invalid email format" },
                { status: 400 }
            );
        }

        // Language validation
        if (!["english", "spanish"].includes(language.toLowerCase())) {
            return NextResponse.json(
                { error: "Invalid language preference" },
                { status: 400 }
            );
        }

        // Google Sheets Integration
        const GOOGLE_SHEETS_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

        if (!GOOGLE_SHEETS_URL) {
            console.error("Google Sheets webhook URL not configured");
            return NextResponse.json(
                { error: "Service not configured. Please contact support." },
                { status: 500 }
            );
        }

        // Prepare data for Google Sheets
        const timestamp = new Date().toISOString();
        const formData = {
            email,
            country,
            language,
            timestamp,
        };

        // Send to Google Sheets
        const response = await fetch(GOOGLE_SHEETS_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error("Failed to save to Google Sheets");
        }

        return NextResponse.json(
            {
                success: true,
                message: "Successfully joined the waitlist",
            },
            { status: 200 }
        );
    } catch (error: any) {
        console.error("Waitlist API error:", error);
        return NextResponse.json(
            { error: "Failed to join waitlist. Please try again." },
            { status: 500 }
        );
    }
}
