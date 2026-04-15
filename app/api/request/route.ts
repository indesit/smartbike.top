import { NextResponse } from "next/server";
import { z } from "zod";

const requestSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(6),
  email: z.string().email(),
  message: z.string().max(600).optional().or(z.literal("")),
});

export async function POST(request: Request) {
  const payload = await request.json();
  const parsed = requestSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        message: "Please complete the form with valid contact details.",
      },
      { status: 400 },
    );
  }

  return NextResponse.json({
    ok: true,
    message:
      "Request received. This prototype stores no data yet, but the flow is ready for CRM or email integration.",
  });
}
