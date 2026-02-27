import { GraduationCap, SidebarSimple } from "@phosphor-icons/react";
import FolderTree from "./FolderTree";
import { cn } from "../lib/utils";

export default function Sidebar({ tree, currentPath, onNavigate, collapsed, onToggle }) {
  return (
    <aside
      className={cn(
        "flex h-full flex-col border-r border-border bg-surface transition-all duration-200",
        collapsed ? "w-11" : "w-60"
      )}
    >
      {/* Header — fixed 48px to match PathBar */}
      <div className="flex h-12 shrink-0 items-center justify-between border-b border-border px-3">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-accent">
              <GraduationCap size={14} weight="fill" className="text-white" />
            </div>
            <span className="font-display text-[13px] font-semibold text-text-primary">
              ASIET MCA
            </span>
          </div>
        )}
        <button
          onClick={onToggle}
          className="flex h-7 w-7 items-center justify-center rounded text-text-tertiary transition-colors hover:bg-hover hover:text-text-secondary"
        >
          <SidebarSimple size={16} weight="regular" />
        </button>
      </div>

      {/* Section label */}
      {!collapsed && (
        <div className="px-3 pt-3 pb-1">
          <span className="text-[11px] font-medium tracking-wide text-text-quaternary uppercase">
            Semesters
          </span>
        </div>
      )}

      {/* Tree */}
      {!collapsed && (
        <div className="flex-1 overflow-y-auto">
          <FolderTree tree={tree} currentPath={currentPath} onNavigate={onNavigate} />
        </div>
      )}
    </aside>
  );
}
