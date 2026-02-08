import { ROUTES } from "@/app/constants/app-routes";
import { redirect } from "next/navigation";

export default function Home() {
  redirect(ROUTES.DASHBOARD);
}
