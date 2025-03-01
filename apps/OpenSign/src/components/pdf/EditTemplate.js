import React, { useState, useEffect } from "react";
import { checkIsSubscribed, getFileName } from "../../constant/Utils";
import Upgrade from "../../primitives/Upgrade";
import { isEnableSubscription } from "../../constant/const";
import { useTranslation } from "react-i18next";
// import SelectFolder from "../../premitives/SelectFolder";

const EditTemplate = ({ template, onSuccess }) => {
  const { t } = useTranslation();
  // const [folder, setFolder] = useState({ ObjectId: "", Name: "" });
  const [formData, setFormData] = useState({
    Name: template?.Name || "",
    Note: template?.Note || "",
    Description: template?.Description || "",
    SendinOrder: template?.SendinOrder ? `${template?.SendinOrder}` : "false",
    AutomaticReminders: template?.AutomaticReminders || false,
    RemindOnceInEvery: template?.RemindOnceInEvery || 5
  });
  const [isSubscribe, setIsSubscribe] = useState(false);
  useEffect(() => {
    fetchSubscription();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const fetchSubscription = async () => {
    if (isEnableSubscription) {
      const getIsSubscribe = await checkIsSubscribed();
      setIsSubscribe(getIsSubscribe);
    }
  };
  const handleStrInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // const handleFolder = (data) => {
  //   console.log("handleFolder ", data)
  //   setFolder(data);
  // };

  // Define a function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const isChecked = formData.SendinOrder === "true" ? true : false;
    const AutoReminder = formData?.AutomaticReminders || false;

    let reminderDate = {};
    if (AutoReminder) {
      const RemindOnceInEvery = parseInt(formData?.RemindOnceInEvery);
      const ReminderDate = new Date(template?.createdAt);
      ReminderDate.setDate(ReminderDate.getDate() + RemindOnceInEvery);
      reminderDate = { NextReminderDate: ReminderDate };
    }
    const data = { ...formData, SendinOrder: isChecked, ...reminderDate };
    onSuccess(data);
  };
  const handleAutoReminder = () => {
    setFormData((prev) => ({
      ...prev,
      AutomaticReminders: !formData.AutomaticReminders
    }));
  };
  return (
    <div className="max-h-[300px] md:max-h-[400px] overflow-y-scroll p-[10px]">
      <div className="text-base-content">
        <form onSubmit={handleSubmit}>
          <div className="mb-[0.35rem]">
            <label htmlFor="name" className="text-[13px]">
              {t("report-heading.File")}
            </label>
            <div className="op-input op-input-bordered op-input-sm focus:outline-none py-2 font-semibold w-full text-xs">
              {getFileName(template.URL)}
            </div>
          </div>
          <div className="mb-[0.35rem]">
            <label htmlFor="name" className="text-[13px]">
              {t("name")}
              <span className="text-[13px] text-[red]"> *</span>
            </label>
            <input
              type="text"
              name="Name"
              value={formData.Name}
              onChange={(e) => handleStrInput(e)}
              onInvalid={(e) => e.target.setCustomValidity(t("input-required"))}
              onInput={(e) => e.target.setCustomValidity("")}
              required
              className="op-input op-input-bordered op-input-sm focus:outline-none hover:border-base-content w-full text-xs"
            />
          </div>
          <div className="mb-[0.35rem]">
            <label htmlFor="Note" className="text-[13px]">
              {t("report-heading.Note")}
            </label>
            <input
              type="text"
              name="Note"
              id="Note"
              value={formData.Note}
              onChange={(e) => handleStrInput(e)}
              className="op-input op-input-bordered op-input-sm focus:outline-none hover:border-base-content w-full text-xs"
            />
          </div>
          <div className="mb-[0.35rem]">
            <label htmlFor="Description" className="text-[13px]">
              {t("description")}
            </label>
            <input
              type="text"
              name="Description"
              id="Description"
              value={formData.Description}
              onChange={(e) => handleStrInput(e)}
              className="op-input op-input-bordered op-input-sm focus:outline-none hover:border-base-content w-full text-xs"
            />
          </div>
          <div className="mb-[0.35rem]">
            <label className="text-[13px]">{t("send-in-order")}</label>
            <div className="flex items-center gap-[8px] ml-[8px] mb-[5px]">
              <input
                type="radio"
                value={"true"}
                className="op-radio op-radio-xs"
                name="SendinOrder"
                checked={formData.SendinOrder === "true"}
                onChange={handleStrInput}
              />
              <div className="text-[12px]">{t("yes")}</div>
            </div>
            <div className="flex items-center gap-[8px] ml-[8px] mb-[5px]">
              <input
                type="radio"
                value={"false"}
                name="SendinOrder"
                className="op-radio op-radio-xs"
                checked={formData.SendinOrder === "false"}
                onChange={handleStrInput}
              />
              <div className="text-[12px]">{t("no")}</div>
            </div>
          </div>
          {isEnableSubscription && (
            <div className="text-xs mt-2">
              <span
                className={
                  isSubscribe ? "font-semibold" : "font-semibold text-gray-300"
                }
              >
                {t("auto-reminder")}
                {"  "}
                {!isSubscribe && isEnableSubscription && <Upgrade />}
              </span>
              <label
                className={`${
                  isSubscribe
                    ? "cursor-pointer "
                    : "pointer-events-none opacity-50"
                } relative block items-center mb-0`}
              >
                <input
                  checked={formData.AutomaticReminders}
                  onChange={handleAutoReminder}
                  type="checkbox"
                  className="op-toggle transition-all checked:[--tglbg:#3368ff] checked:bg-white mt-2"
                />
              </label>
            </div>
          )}
          {isSubscribe && formData?.AutomaticReminders === true && (
            <div className="text-xs mt-2">
              <label className="block">
                {t("remind-once")}
                <span className="text-red-500 text-[13px]">*</span>
              </label>
              <input
                type="number"
                value={formData.RemindOnceInEvery}
                name="RemindOnceInEvery"
                className="op-input op-input-bordered op-input-sm focus:outline-none hover:border-base-content w-full text-xs"
                onChange={handleStrInput}
                onInvalid={(e) =>
                  e.target.setCustomValidity(t("input-required"))
                }
                onInput={(e) => e.target.setCustomValidity("")}
                required
              />
            </div>
          )}
          <div className="mt-[1rem] flex justify-start">
            <button type="submit" className="op-btn op-btn-primary">
              {t("submit")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTemplate;
