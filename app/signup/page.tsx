import { loadSiteSpec } from "@/lib/spec-server";
import { SignupPage } from "@/components/SignupPage";

export default async function SignupPageRoute() {
  const spec = await loadSiteSpec();
  return <SignupPage data={spec.content.signup} joinUs={spec.content.home.joinUs} />;
}
