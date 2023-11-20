import Modal from "@/components/shared/Modal";
import React, { useState } from "react";
import { MagnifyingGlassIcon, UserPlusIcon } from "@heroicons/react/24/outline";
import IconWithLabelButton from "@/components/shared/IconWithLabelButton";
import { addToContacts, findUser, getContacts } from "@/service/database";
import Avatar from "@/components/Avatar";
import { getSupabaseUser } from "@/utils/auth";

interface props {
  user: any;
  showAddContactModal: boolean;
  setShowAddContactModal: Function;
}
const AddContactModal = ({
  user,
  showAddContactModal,
  setShowAddContactModal,
}: props) => {
  const [searchEmailValue, setSearchEmailValue] = useState<string>("");
  const [foundUser, setFoundUser] = useState<any>(null);

  const searchHandler = async () => {
    setFoundUser(null);
    if (!searchEmailValue || searchEmailValue.length == 0) return;
    const res = await findUser(searchEmailValue);
    if (res) {
      setFoundUser(res);
    }
  };
  const addToContactsHandler = async () => {
    if (!foundUser) return;
    // const supabaseUser = await getSupabaseUser();
    const res2 = await getContacts(user?.id);
    const res = await addToContacts(user?.id, foundUser?.id);
    console.log(res2, res);
  };
  return (
    <Modal
      visible={showAddContactModal}
      setVisible={setShowAddContactModal}
      title={"Add contact"}
    >
      <div
        className={
          "h-[300px] w-full flex flex-row items-center justify-between"
        }
      >
        <div
          className={
            "w-1/2 h-full flex flex-col gap-6 items-center justify-center p-2 border-r border-mainInput"
          }
        >
          <input
            type={"email"}
            className={
              "h-[40px] w-[80%] bg-mainDark border-b-2 border-b-actionHover px-1 outline-none"
            }
            placeholder={"Email"}
            value={searchEmailValue}
            onChange={(e) => setSearchEmailValue(e.target.value)}
          />
          <IconWithLabelButton
            label={"Search"}
            icon={<MagnifyingGlassIcon className={"h-4 w-4"} />}
            onClickHandler={searchHandler}
            classNames={
              "px-4 py-2  bg-action text-black hover:bg-actionHover rounded-full"
            }
          />
        </div>
        <div
          className={
            "w-1/2 h-full flex flex-col gap-6 items-center justify-center p-2"
          }
        >
          {foundUser && (
            <div className={"flex flex-col gap-4 items-center justify-center"}>
              <Avatar src={foundUser?.picture} />
              <div className={"flex flex-col items-center justify-center"}>
                <p className={"text-xl font-bold"}>{foundUser?.full_name}</p>
                <p className={"text-xs font-light text-gray-300"}>
                  {foundUser?.email}
                </p>
              </div>
              <IconWithLabelButton
                label={"Add to your contacts"}
                icon={<UserPlusIcon className={"h-4 w-4"} />}
                onClickHandler={addToContactsHandler}
                classNames={
                  "px-4 py-2  bg-action text-black hover:bg-actionHover rounded-full"
                }
              />
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default AddContactModal;
