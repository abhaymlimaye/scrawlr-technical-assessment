import React from "react"; 
import { createContext, useContext, useState, useEffect } from "react";

type List = { isSelected: boolean, buttonCount: number }; //List represents the state of each upvote list

interface UpvoteContextType {   //Context to store the state of all upvote lists and functions to update them
    lists: List[];
    toggleUpvote: (listIndex: number) => void;
    addUpvote: (listIndex: number) => void;
}

const defaultLists: List[] = [ //Initial state of upvote lists
    { isSelected: false, buttonCount: 1 },
    { isSelected: false, buttonCount: 1 },
    { isSelected: false, buttonCount: 1 },
];

const UpvoteContext = createContext<UpvoteContextType|undefined>(undefined); //Create context to store upvote lists

export const useUpvoteContext = () => { //Custom hook to access the upvote context
    const context = useContext(UpvoteContext);
    if (!context) {
      throw new Error("useUpvoteContext must be used within an UpvoteProvider");
    }
    return context;
};

export function UpvoteProvider({ children }: { children: React.ReactNode }) { //Provider to store the state of upvote lists
    const [lists, setLists] = useState<List[]>(() => {
        const savedData = localStorage.getItem("upvoteLists"); //Get saved data from local storage
        return savedData ? JSON.parse(savedData) : defaultLists; //Return saved data if available, else return default data
      });

    const toggleUpvote = (listIndex: number) => {
        setLists((prevLists) => 
            prevLists.map((list, index) => 
                index === listIndex ? { ...list, isSelected: !list.isSelected } : list //Toggle isSelected state of the list
            )
        );
    };

    const addUpvote = (listIndex: number) => {
        setLists((prevLists) => 
            prevLists.map((list, index) => 
                index === listIndex ? { ...list, buttonCount: list.buttonCount + 1 } : list //Increment buttonCount of the list
            )
        );
    };

    useEffect(() => {
        localStorage.setItem("upvoteLists", JSON.stringify(lists)); //Save updated data to local storage
      }, [lists]);

    return (
        <UpvoteContext.Provider value={{ lists, toggleUpvote, addUpvote}}>
            {children}
        </UpvoteContext.Provider>
    );
}