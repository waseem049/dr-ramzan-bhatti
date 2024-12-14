import {
  CreatableInput,
  FileInputBox,
  FormButton,
  InputBox,
  MultiFileInputBox,
  SelectInput,
  TextArea,
} from "@/components";
import { useCreateBlog } from "@/hooks/useCreateBlog";
import { BlogStatusList, Categories, Featured } from "@/utils/constants";
import { LabelValue, UpdateBlogValues } from "@/utils/types";
import { BlogStatus } from "@prisma/client";
import { Formik, Form } from "formik";
import * as Yup from "yup";

export const blogValidationSchema = Yup.object().shape({
  slug: Yup.string()
    .required("Slug is required")
    .matches(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Slug has to be separated by - and should be unique"
    ),

  title: Yup.string()
    .required("Title is required")
    .min(3, "Title must be at least 3 characters")
    .max(100, "Title must not exceed 100 characters"),

  subTitle: Yup.string()
    .required("Subtitle is required")
    .min(3, "Subtitle must be at least 3 characters")
    .max(150, "Subtitle must not exceed 150 characters"),

  description: Yup.string()
    .required("Description is required")
    .min(50, "Description must be at least 50 characters"),

  // coverImage: Yup.string()
  //   .required("Cover image is required")
  //   .url("Must be a valid URL"),

  // category: Yup.object()
  //   .shape({
  //     label: Yup.string().required(),
  //     value: Yup.string().required(),
  //   })
  //   .nullable()
  //   .required("Category is required"),

  media: Yup.array()
    .of(Yup.string())
    .min(1, "Minimum One Image")
    .required("Media is required"),

  author: Yup.string()
    .required("Author is required")
    .min(2, "Author name must be at least 2 characters")
    .max(50, "Author name must not exceed 50 characters"),

  excerpt: Yup.string()
    .required("Excerpt is required")
    .min(10, "Excerpt must be at least 10 characters")
    .max(300, "Excerpt must not exceed 300 characters"),

  isFeatured: Yup.object()
    .shape({
      label: Yup.string().required(),
      value: Yup.boolean().required(),
    })
    .required("Featured status is required"),

  tags: Yup.array()
    .of(
      Yup.object().shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      })
    )
    .min(1, "At least one tag is required"),

  status: Yup.object()
    .shape({
      label: Yup.string().required(),
      value: Yup.string().required(),
    })
    .required("Status is required"),
});

type UpdateBlogProps = {
  closeModal: () => void;
  refetch: () => void;
  userId: string;
};

const initialValues: UpdateBlogValues = {
  slug: "",
  title: "",
  subTitle: "",
  description: "",
  coverImage: "",
  category: null,
  media: [],
  author: "",
  excerpt: "",
  isFeatured: Featured.find((f) => f.value)!,
  tags: [],
  status: BlogStatusList.find((b) => b.value === BlogStatus.DRAFT)!,
  userId: "",
};

export const UpdateBlog: React.FC<UpdateBlogProps> = ({
  closeModal,
  refetch,
  userId,
}) => {
  const { createBlog, isLoading } = useCreateBlog();

  const handleSubmit = async (values: UpdateBlogValues) => {
    console.log(values);
    const tagsAsStringArray =
      values.tags && values.tags.map((t: LabelValue) => t.value);
    try {
      await createBlog({
        slug: values.slug,
        title: values.title,
        subTitle: values.subTitle,
        description: values.description,
        coverImage: values.coverImage,
        category: values?.category?.value as string,
        media: values.media,
        author: values.author,
        excerpt: values.excerpt,
        isFeatured: values.isFeatured.value as boolean,
        tags: tagsAsStringArray as string[],
        status: BlogStatus.DRAFT,
        userId,
      });
      refetch();
      closeModal();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="w-full h-full md:w-[50%] max-h-[90%] flex flex-col gap-5 items-center">
      <h1 className="font-poppinsSemibold text-[32px] text-white">
        Create Blog
      </h1>
      <Formik<UpdateBlogValues>
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={blogValidationSchema}
      >
        {({ isValid, dirty }) => (
          <Form style={{ width: "100%" }}>
            <div className="w-full flex flex-col gap-5 pb-5">
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
              <div className="w-full flex flex-col md:flex-row gap-5">
                <SelectInput
                  label={"Category"}
                  labelColor={"text-white"}
                  name={"category"}
                  placeholder={"Category"}
                  defaultOptions={Categories}
                  className={"w-full"}
                  zIndex={3}
                />
                <CreatableInput
                  className="w-full"
                  name={"tags"}
                  placeholder={"Type to add tags.."}
                  label="Tags"
                  zIndex={3}
                />
              </div>
              <div className="w-full flex flex-col md:flex-row gap-5">
                <SelectInput
                  label={"Featured"}
                  labelColor={"text-white"}
                  name={"isFeatured"}
                  placeholder={"Featured"}
                  defaultOptions={Featured}
                  className={"w-full"}
                />
                <SelectInput
                  label={"Blog Status"}
                  labelColor={"text-white"}
                  name={"status"}
                  placeholder={"Blog Status"}
                  defaultOptions={BlogStatusList}
                  className={"w-full"}
                />
              </div>
              <div className="w-full flex flex-col md:flex-row gap-5">
                <FileInputBox
                  label={"Cover Image"}
                  name={"coverImage"}
                  className="w-full md:w-[22%] "
                />
                <MultiFileInputBox
                  label={"Media"}
                  name={"media"}
                  className="w-full md:w-[75%] "
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
              <FormButton
                disabled={!isValid || dirty}
                type="submit"
                label={"Create Blog"}
                loading={isLoading}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
