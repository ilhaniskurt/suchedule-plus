import { createFileRoute, useLoaderData } from "@tanstack/react-router";

export const Route = createFileRoute("/test")({
  component: TestComponent,
});

function TestComponent() {
  const data = useLoaderData({ from: "__root__" });

  return <>{JSON.stringify(data)}</>;
  //   return <div>asdas</div>;
}
