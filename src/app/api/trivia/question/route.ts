import questions from "../../../data";

export const dynamic = "force-dynamic";

export function GET(request) {
  const id = request.nextUrl.searchParams.get("id");

  if (id) {
    return new Response(JSON.stringify(questions[id].question));
  }
}
