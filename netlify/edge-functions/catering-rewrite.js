export default async (request, context) => {
  const url = new URL(request.url);
  if (url.hostname === "catering.famjamevents.com") {
    const newPath = `/catering${url.pathname}`;
    return context.rewrite(newPath);
  }
  return context.next();
};

export const config = {
  path: "/*",
};
