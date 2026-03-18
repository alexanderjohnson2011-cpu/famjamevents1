export default async (request, context) => {
  const url = new URL(request.url);
  if (url.hostname === "oasis.famjamevents.com") {
    const newPath = `/oasis${url.pathname}`;
    return context.rewrite(newPath);
  }
  return context.next();
};

export const config = {
  path: "/*",
};
