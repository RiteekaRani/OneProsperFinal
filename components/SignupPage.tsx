import type { JoinUsEmailCapture as JoinUsEmailCaptureSpec, SignupPage as SignupPageSpec } from "@/lib/spec";
import { JoinUsEmailCapture } from "@/components/JoinUsEmailCapture";

type SignupPageProps = {
  data: SignupPageSpec;
  joinUs: JoinUsEmailCaptureSpec;
};

export function SignupPage({ data, joinUs }: SignupPageProps) {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-12">
      <h1 className="text-3xl font-semibold text-slate-900">{data.title}</h1>
      <p className="mt-4 text-slate-600">{data.body}</p>
      <div className="mt-8">
        <JoinUsEmailCapture data={joinUs} />
      </div>
    </main>
  );
}
