import { InputBox, TextArea } from "@/components";
import { UpdateBlogValues } from "@/utils/types";
import { BlogStatus } from "@prisma/client";
import { Formik, Form } from "formik";

type UpdateBlogProps = {
  closeModal: () => void;
};

export const UpdateBlog: React.FC<UpdateBlogProps> = ({ closeModal }) => {
  const initialValues: UpdateBlogValues = {
    slug: "",
    title: "",
    subTitle: "",
    description: "",
    coverImage: "",
    category: "",
    media: [],
    author: "",
    excerpt: "",
    isFeatured: false,
    tags: [],
    status: BlogStatus.DRAFT,
    userId: "",
  };

  const handleSubmit = (values: UpdateBlogValues) => {
    console.log(values);
    closeModal();
  };

  return (
    <div className="w-full h-full md:w-[50%] max-h-[90%] flex flex-col gap-5 items-center">
      <h1 className="font-poppinsSemibold text-[32px] text-white">
        Create Blog
      </h1>
      <Formik<UpdateBlogValues>
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({}) => (
          <Form style={{ width: "100%" }}>
            <div className="w-full flex flex-col gap-5">
              <div className="w-full flex flex-col md:flex-row gap-5">
                <InputBox
                  label={"Slug"}
                  name={"slug"}
                  placeholder={"Slug"}
                  labelColor="text-white"
                  inputClasses=""
                  className="w-full"
                />
                <InputBox
                  label={"Title"}
                  name={"title"}
                  placeholder={"Title"}
                  labelColor="text-white"
                  inputClasses=""
                  className="w-full"
                />
              </div>
              <div className="w-full flex flex-col md:flex-row gap-5">
                <InputBox
                  label={"Sub Title"}
                  name={"subTitle"}
                  placeholder={"Sub Title"}
                  labelColor="text-white"
                  inputClasses=""
                  className="w-full"
                />
                <InputBox
                  label={"Author"}
                  name={"author"}
                  placeholder={"Author"}
                  labelColor="text-white"
                  inputClasses=""
                  className="w-full"
                />
              </div>
              <div className="w-full">
                <InputBox
                  label={"Excerpt"}
                  name={"excerpt"}
                  placeholder={"Excerpt"}
                  labelColor="text-white"
                  className="w-full"
                />
              </div>
              <div className="w-full">
                <TextArea
                  label={"Description"}
                  name={"description"}
                  placeholder={"Description"}
                  className="w-full"
                  labelColor="text-white"
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
