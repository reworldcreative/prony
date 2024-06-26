import React, { FC, useContext, useEffect } from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";
import "./CreateForm.scss";
import Input from "@/components/UI/forms/Input/Input";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";
import TextArea from "@/components/UI/forms/TextArea/TextArea";
import RadioButton from "@/components/UI/forms/RadioButton/RadioButton";
import Checkbox from "@/components/UI/forms/Checkbox/Checkbox";
import Switch from "@/components/UI/forms/Switch/Switch";
import { BoardsItemProps } from "../../BoardsItem";
import FormButtons from "@/components/UI/forms/FormButtons/FormButtons";

interface formProps {
  submitSuccess: (data: BoardsItemProps) => void;
  formTitle: string;
  formData: BoardsItemProps;
  boardsData?: BoardsItemProps[];
  formType: "create" | "edit";
}

const CreateForm: FC<formProps> = ({ submitSuccess, formTitle, formData, boardsData, formType }) => {
  const { isOpenPopUp, setOpenPopUp } = useContext(GlobalContext);
  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors, isValid },
  } = useForm<FieldValues>({
    mode: "onChange",
  });

  useEffect(() => {
    reset();
  }, [isOpenPopUp]);

  const onSubmit = (data: BoardsItemProps) => {
    submitSuccess({ ...data, id: formData.id, posts: formData.posts });
    reset();
    setOpenPopUp(false);
  };

  const onCancel = () => {
    reset();
    setOpenPopUp(false);
  };

  const isValueUnique = (value: string) => {
    const namesArray = boardsData.map((board) => board.name);
    if (namesArray.includes(value.trim())) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <h2 className="title form__title">{formTitle}</h2>

      <div className="form__wrapper">
        <fieldset className="form__fieldset">
          <legend className="visibility-hidden">main information</legend>
          <Input
            label="Board name"
            name="boardName"
            register={register}
            messageType={errors.boardName ? "error" : ""}
            value={formData ? formData.name : ""}
            settings={{
              required: "Board name should be unique",
              minLength: { value: 3, message: "Minimum length should be 3" },
              maxLength: { value: 50, message: "Maximum length should be 30" },
              ...(formType === "create"
                ? { validate: { isUnique: (value) => isValueUnique(value) || "This value must be unique." } }
                : {}),
            }}
            messageText={errors?.boardName?.message.toString() || "error!"}
          />
          <Input
            label="URL"
            name="URL"
            register={register}
            messageType={errors.URL ? "error" : ""}
            value={formData ? formData.URL : ""}
            settings={{
              required: "Invalid URL format",
              pattern: {
                value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
                message: "Invalid URL format",
              },
            }}
            messageText={errors?.URL?.message.toString() || "error!"}
          />

          <TextArea
            label="Description"
            name="description"
            rows={4}
            register={register}
            messageType={errors.description ? "error" : ""}
            value={formData ? formData.description : ""}
            settings={{
              required: "Invalid description",
              minLength: { value: 10, message: "Minimum length should be 10" },
              maxLength: {
                value: 200,
                message: "Maximum length should be 200",
              },
            }}
            messageText={errors?.description?.message.toString() || "error!"}
          />
        </fieldset>

        <section className="form__section">
          <fieldset className="form__fieldset">
            <legend className="text form__legend">Privacy</legend>
            <div className="form__block">
              <div>
                <Controller
                  name="privacy"
                  control={control}
                  defaultValue="public"
                  render={({ field }) => (
                    <RadioButton
                      group="privacy"
                      labelText="Public"
                      value="public"
                      selectedValue={field.value}
                      size="big"
                      type="secondary"
                      field={field}
                      defaultChecked={formData && !formData.privacy}
                    />
                  )}
                />
                <p className="caption  radio-text">
                  The board is visible to anyone. Search engines like Google will index it.
                </p>
              </div>

              <div>
                <Controller
                  name="privacy"
                  control={control}
                  defaultValue="public"
                  render={({ field }) => (
                    <RadioButton
                      group="privacy"
                      labelText="Private"
                      value="private"
                      selectedValue={field.value}
                      size="big"
                      type="secondary"
                      field={field}
                      defaultChecked={formData && formData.privacy}
                    />
                  )}
                />
                <p className="caption radio-text">Only people added to the board can access it</p>
              </div>
            </div>
          </fieldset>

          <fieldset className="form__fieldset">
            <legend className="text form__legend">Status</legend>
            <div className="form__block">
              <div>
                <Controller
                  name="status"
                  control={control}
                  defaultValue="unlocked"
                  render={({ field }) => (
                    <RadioButton
                      group="status"
                      labelText="Locked"
                      value="locked"
                      selectedValue={field.value}
                      size="big"
                      type="secondary"
                      field={field}
                      defaultChecked={formData && formData.locked}
                    />
                  )}
                />
                <p className="caption  radio-text">Only Board Moderators can create new posts</p>
              </div>

              <div>
                <Controller
                  name="status"
                  control={control}
                  defaultValue="unlocked"
                  render={({ field }) => (
                    <RadioButton
                      group="status"
                      labelText="Unlocked"
                      value="unlocked"
                      selectedValue={field.value}
                      size="big"
                      type="secondary"
                      field={field}
                      defaultChecked={formData && !formData.locked}
                    />
                  )}
                />
                <p className="caption radio-text">Anybody can post</p>
              </div>
            </div>
          </fieldset>

          <fieldset className="form__fieldset">
            <div className="form__block">
              <div>
                <Controller
                  name="On_roadmap"
                  control={control}
                  defaultValue={false}
                  render={({ field }) => (
                    <Switch
                      labelText="Board on roadmap"
                      name="On_roadmap"
                      value="On_roadmap"
                      type="secondary"
                      size="big"
                      field={field}
                      defaultChecked={formData && formData.On_roadmap}
                    />
                  )}
                />
                <p className="caption  radio-text">
                  By default, your board is visible on your roadmap. Turn it off if you don’t want your board and its
                  posts to be shown there.
                </p>
              </div>

              <div>
                <Controller
                  name="Indexed"
                  control={control}
                  defaultValue={false}
                  render={({ field }) => (
                    <Switch
                      labelText="Indexed"
                      name="Indexed"
                      value="Indexed"
                      type="secondary"
                      size="big"
                      field={field}
                      defaultChecked={formData ? formData.Indexed : false}
                    />
                  )}
                />
                <p className="caption  radio-text">
                  By default, your board will be indexed by search engines like Google. Turn it off if you don’t want
                  that
                </p>
              </div>
            </div>
          </fieldset>

          <fieldset className="form__fieldset">
            <div className="form__block">
              <div>
                <Controller
                  name="Post_pre_approval"
                  control={control}
                  defaultValue={false}
                  render={({ field }) => (
                    <Checkbox
                      labelText="Post require pre approval"
                      name="Post_pre_approval"
                      value="Post_pre_approval"
                      type="secondary"
                      size="big"
                      field={field}
                      defaultChecked={formData ? formData.Post_pre_approval : false}
                    />
                  )}
                />
                <p className="caption  radio-text">
                  The board is visible to anyone. Search engines like Google will index it.
                </p>
              </div>

              <div>
                <Controller
                  name="Anonymous_voting"
                  control={control}
                  defaultValue={false}
                  render={({ field }) => (
                    <Checkbox
                      labelText="Anonymous voting"
                      name="Anonymous_voting"
                      value="Anonymous_voting"
                      type="secondary"
                      size="big"
                      field={field}
                      defaultChecked={formData ? formData.Anonymous_voting : false}
                    />
                  )}
                />
                <p className="caption  radio-text">Allow anonymous votes</p>
              </div>
            </div>
          </fieldset>
        </section>
      </div>

      <FormButtons isValid={isValid} onCancel={onCancel} type="primary" />
    </form>
  );
};

export default CreateForm;
