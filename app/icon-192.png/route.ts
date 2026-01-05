import { generateIcon } from "@/lib/icon";

export const runtime = "nodejs";

export async function GET() {
  return generateIcon(192);
}
