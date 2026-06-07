"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Bold, Italic, List, ListOrdered, Heading2, Heading3, Quote, Undo, Redo } from "lucide-react";
import { Button } from "@/shared/ui/button";

interface TiptapEditorProps {
  content: string;
  onChange: (html: string) => void;
  placeholder?: string;
}

export function TiptapEditor({ content, onChange, placeholder }: TiptapEditorProps) {
  const editor = useEditor({
    extensions: [StarterKit],
    content,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    editorProps: {
      attributes: {
        class: "min-h-[200px] w-full px-3 py-2 text-sm focus:outline-none prose prose-sm dark:prose-invert max-w-none",
      },
    },
  });

  if (!editor) return null;

  const tools = [
    { icon: <Bold className="h-4 w-4" />, action: () => editor.chain().focus().toggleBold().run(), active: editor.isActive("bold"), title: "Gras" },
    { icon: <Italic className="h-4 w-4" />, action: () => editor.chain().focus().toggleItalic().run(), active: editor.isActive("italic"), title: "Italique" },
    { icon: <Heading2 className="h-4 w-4" />, action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(), active: editor.isActive("heading", { level: 2 }), title: "Titre H2" },
    { icon: <Heading3 className="h-4 w-4" />, action: () => editor.chain().focus().toggleHeading({ level: 3 }).run(), active: editor.isActive("heading", { level: 3 }), title: "Titre H3" },
    { icon: <List className="h-4 w-4" />, action: () => editor.chain().focus().toggleBulletList().run(), active: editor.isActive("bulletList"), title: "Liste" },
    { icon: <ListOrdered className="h-4 w-4" />, action: () => editor.chain().focus().toggleOrderedList().run(), active: editor.isActive("orderedList"), title: "Liste numérotée" },
    { icon: <Quote className="h-4 w-4" />, action: () => editor.chain().focus().toggleBlockquote().run(), active: editor.isActive("blockquote"), title: "Citation" },
    { icon: <Undo className="h-4 w-4" />, action: () => editor.chain().focus().undo().run(), active: false, title: "Annuler" },
    { icon: <Redo className="h-4 w-4" />, action: () => editor.chain().focus().redo().run(), active: false, title: "Rétablir" },
  ];

  return (
    <div className="border border-input rounded-md overflow-hidden bg-background">
      <div className="flex flex-wrap gap-1 p-2 border-b bg-muted/30">
        {tools.map((tool, i) => (
          <button key={i} type="button" onClick={tool.action} title={tool.title}
            className={`p-1.5 rounded transition-colors ${tool.active ? "bg-primary text-primary-foreground" : "hover:bg-muted text-muted-foreground hover:text-foreground"}`}>
            {tool.icon}
          </button>
        ))}
      </div>
      <EditorContent editor={editor} />
    </div>
  );
}
