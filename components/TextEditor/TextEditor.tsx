"use client";
import { useField } from "formik";
import { Editor, IAllProps } from "@tinymce/tinymce-react";
import { Editor as TinyMCEEditor } from "tinymce";
import { uploadFile } from "@/utils/fileUpload";

type TextEditorProps = {
  name: string;
  label?: string;
  className?: string;
  labelColor?: string;
  inputClasses?: string;
} & IAllProps;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleImageUpload = (blobInfo: any) => {
  return new Promise<string>((resolve, reject) => {
    const file = blobInfo.blob();

    uploadFile(file)
      .then((uploadedUrl) => {
        if (uploadedUrl) {
          resolve(uploadedUrl);
          console.log(uploadedUrl);
        } else {
          console.log("Failed To Upload File");
          reject("Image upload failed. Please try again.");
        }
      })
      .catch((err) => {
        console.error("Image upload error:", err);
        reject("Image upload error. Please try again.");
      });
  });
};

export const TextEditor: React.FC<TextEditorProps> = ({
  name,
  label,
  className = "",
  labelColor = "text-white",
  init,
  ...props
}) => {
  const [field, meta, helpers] = useField(name);

  const handleEditorChange = (content: string) => {
    helpers.setValue(content);
    helpers.setTouched(true);
  };

  const editorConfig = {
    height: 500,
    menubar: true,
    plugins: [
      "advlist",
      "autolink",
      "lists",
      "link",
      "image",
      "charmap",
      "preview",
      "anchor",
      "searchreplace",
      "visualblocks",
      "code",
      //   "fullscreen",
      "insertdatetime",
      "media",
      "table",
      "code",
      "help",
      "wordcount",
      "codesample",
    ],
    toolbar:
      "undo redo | blocks | " +
      "bold italic forecolor | alignleft aligncenter " +
      "alignright alignjustify | bullist numlist outdent indent | " +
      "removeformat | help | image media | codesample",
    content_style:
      "body { font-family:Helvetica,Arial,sans-serif; font-size:16px }",
    ...init,
    setup: (editor: TinyMCEEditor) => {
      editor.on("blur", () => helpers.setTouched(true));

      if (init?.setup) {
        init.setup(editor);
      }
    },
    images_upload_handler: handleImageUpload,
  };

  return (
    <div className={`${className} flex flex-col gap-1`}>
      <div className="flex flex-row justify-between items-center px-2">
        <h1 className={`block text-sm font-poppinsRegular ${labelColor}`}>
          {label}
        </h1>
        {meta.touched && meta.error ? (
          <div className="text-red-500 text-sm ml-2">{meta.error}</div>
        ) : null}
      </div>
      <Editor
        apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
        init={editorConfig}
        value={field.value}
        onEditorChange={handleEditorChange}
        {...props}
      />
    </div>
  );
};
