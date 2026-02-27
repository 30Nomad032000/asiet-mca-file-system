import {
  FolderSimple,
  BookOpenText,
  NotePencil,
  Exam,
  Flask,
  GraduationCap,
} from "@phosphor-icons/react";
import { FileIcon as ReactFileIcon, defaultStyles } from "react-file-icon";

const folderMeta = {
  Notes: { icon: BookOpenText, color: "#0369A1" },
  Assignments: { icon: NotePencil, color: "#B45309" },
  "Question Papers": { icon: Exam, color: "#047857" },
  "Lab Records": { icon: Flask, color: "#7C3AED" },
  "Semester 1": { icon: GraduationCap, color: "#60646C" },
  "Semester 2": { icon: GraduationCap, color: "#60646C" },
  "Semester 3": { icon: GraduationCap, color: "#60646C" },
  "Semester 4": { icon: GraduationCap, color: "#60646C" },
};

export function FolderIcon({ name, size = 20, weight = "duotone" }) {
  const meta = folderMeta[name];
  if (meta) {
    const Icon = meta.icon;
    return <Icon size={size} weight={weight} color={meta.color} />;
  }
  return <FolderSimple size={size} weight={weight} color="#60646C" />;
}

export function TypeFileIcon({ name, size = 32 }) {
  const ext = name.split(".").pop()?.toLowerCase() || "txt";
  const styles = defaultStyles[ext] || defaultStyles.txt || {};
  return (
    <div style={{ width: size, height: size * 1.2 }}>
      <ReactFileIcon extension={ext} {...styles} />
    </div>
  );
}
