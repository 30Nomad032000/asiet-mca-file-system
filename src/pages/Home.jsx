import { useNavigate } from "react-router-dom";
import { GraduationCap, FolderSimple, ArrowRight } from "@phosphor-icons/react";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bg px-4">
      <div className="flex max-w-sm flex-col items-center gap-6 text-center">
        {/* Logo mark */}
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent">
          <GraduationCap size={28} weight="fill" className="text-white" />
        </div>

        {/* Title */}
        <div>
          <h1 className="font-display text-2xl font-semibold text-text-primary">
            ASIET MCA
          </h1>
          <p className="mt-1 text-sm text-text-tertiary">
            Department of Computer Applications
          </p>
          <p className="mt-0.5 text-sm text-text-tertiary">
            Course Materials Repository
          </p>
        </div>

        {/* CTA */}
        <button
          onClick={() => navigate("/explorer")}
          className="group mt-2 flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-accent-light"
        >
          <FolderSimple size={16} weight="duotone" />
          Browse Materials
          <ArrowRight
            size={14}
            weight="bold"
            className="transition-transform group-hover:translate-x-0.5"
          />
        </button>

        {/* Footer */}
        <p className="mt-6 text-[11px] text-text-quaternary">
          Adi Shankara Institute of Engineering & Technology, Kalady
        </p>
      </div>
    </div>
  );
}
