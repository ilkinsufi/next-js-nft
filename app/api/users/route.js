export async function GET(request) {
  const users = [
    { id: 1, name: "Ilkin" },
    { id: 2, name: "Ilkin2" },
    { id: 3, name: "Ilkin3" },
  ];

  return new Response(JSON.stringify(users));
}
