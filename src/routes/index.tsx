import Header from "@/components/layout/header";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <>
      <Header />
      <Link to="/test">Go to test</Link>
    </>
  );
}
