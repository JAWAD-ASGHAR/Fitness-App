import React, { useState } from "react";
import { RiFootprintLine } from "react-icons/ri";
import { TbTargetArrow } from "react-icons/tb";
import { AiOutlineFire } from "react-icons/ai";
import { TbWeight } from "react-icons/tb";
import { HiDotsVertical } from "react-icons/hi";
import { FiTrash2 } from "react-icons/fi";
import { GrAdd } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";

const StatisticsCards = ({ details, handleRemove }) => {
  const [open, setOpen] = useState(false);
  function handleDropDown() {
    setOpen((prevOpen) => !prevOpen);
  }

  return (
    <>
      <div className="bg-slate-100 px-8 py-4 rounded-lg relative dark:bg-[#2C2D31] dark:text-slate-100 transition-all duration-500">
        <div className="flex justify-between space-x-7">
          <div className="flex flex-col space-y-2 w-2/3">
            <div className="text-lg font-semibold">{details.title}</div>
            <div className="text-2xl font-bold">{details.value}</div>
            <div className="text-green-500">{details.improve}</div>
          </div>
          <div className="flex flex-col justify-between items-center py-1 relative">
            {details.icon}
            <HiDotsVertical
              className="w-5 rounded-full h-6 hover:opacity-60 hover:bg-slate-100 cursor-pointer"
              onClick={handleDropDown}
            />
            {open && (
              <div className="absolute top-24 right-0 bg-white shadow-lg rounded-lg py-1 w-32">
                <div
                  className="px-4 flex items-center gap-2 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleRemove(details.id)}
                >
                  <FiTrash2 /> remove
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const Dialog = ({ isOpen, onClose, children, uniqueKeys, addCard }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-5 rounded-lg w-72 relative">
        <div className="flex flex-col h-full justify-between gap-2">
          <div className="flex justify-between">
            <h5 className="mb-5 font-semibold">Manage Cards</h5>
            <button
              className="text-xl absolute top-6 right-7 hover:bg-gray-200 rounded-full"
              onClick={onClose}
            >
              <AiOutlineClose />
            </button>
          </div>

          {uniqueKeys.map((card) => (
            <button
              key={card.id}
              className="px-5 py-4 bg-gray-200 hover:bg-gray-300 w-full rounded text-left flex items-center gap-2"
              onClick={() => addCard(card.id)}
            >
              {card.icon}
              {card.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const getUniqueKeys = (originalCardStructure, cardStructure) => {
  return originalCardStructure.filter(
    (originalCard) => !cardStructure.some((card) => card.id === originalCard.id)
  );
};

const AddCardButton = ({
  cardStructure,
  setCardStructure,
  originalCardStructure,
}) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  const uniqueKeys = getUniqueKeys(originalCardStructure, cardStructure);

  const openDialog = () => {
    setDialogIsOpen(true);
  };

  const onDialogClose = () => {
    setDialogIsOpen(false);
  };

  const addCard = (id) => {
    setDialogIsOpen(false);
    const selectedCard = originalCardStructure.find((card) => card.id === id);
    if (selectedCard && !cardStructure.some((card) => card.id === id)) {
      const indexInOriginal = originalCardStructure.findIndex(
        (card) => card.id === id
      );
      const updatedCardStructure = [...cardStructure];
      updatedCardStructure.splice(indexInOriginal, 0, selectedCard);
      setCardStructure(updatedCardStructure);
    }
  };

  return (
    <div className="relative right-0 ml-8 mt-7">
      <button
        className="w-14 h-14 mt-2 bg-lime-400 rounded-md flex justify-center text-xl items-center"
        onClick={openDialog}
      >
        <GrAdd />
      </button>
      <Dialog
        isOpen={dialogIsOpen}
        uniqueKeys={uniqueKeys}
        onClose={onDialogClose}
        addCard={addCard}
      />
    </div>
  );
};

const Statistics = () => {
  const originalCardStructure = [
    {
      id: 1,
      title: "Meter Walked",
      value: "2901",
      improve: "+20%",
      icon: <RiFootprintLine className="w-6 h-6" />,
    },
    {
      id: 2,
      title: "Achieved",
      value: "92%",
      improve: "+35%",
      icon: <TbTargetArrow className="w-6 h-6" />,
    },
    {
      id: 3,
      title: "Cals Burned",
      value: "232",
      improve: "+2.4%",
      icon: <AiOutlineFire className="w-6 h-6" />,
    },
    {
      id: 4,
      title: "Weight KG",
      value: "62",
      improve: "+11%",
      icon: <TbWeight className="w-6 h-6" />,
    },
  ];

  const [cardStructure, setCardStructure] = useState(originalCardStructure);

  const handleRemoveCard = (id) => {
    const updatedCardStructure = cardStructure.filter((card) => card.id !== id);
    setCardStructure(updatedCardStructure);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 justify-center p-11 gap-2 ">
        {cardStructure.map((card) => (
          <StatisticsCards
            key={card.id}
            details={card}
            handleRemove={handleRemoveCard}
          />
        ))}
        {cardStructure.length < 4 && (
          <AddCardButton
            cardStructure={cardStructure}
            originalCardStructure={originalCardStructure}
            setCardStructure={setCardStructure}
          />
        )}
      </div>
    </>
  );
};

export default Statistics;
