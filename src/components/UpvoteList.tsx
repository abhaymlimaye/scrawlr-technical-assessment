import { useUpvoteContext } from "../context/UpvoteContext";
import AddButton from "./AddButton";
import UpvoteButton from "./UpvoteButton";
import '../styles/UpvoteList.css';

function UpvoteList({ listIndex }: { listIndex: number }) {
    const { lists, toggleUpvote, addUpvote } = useUpvoteContext(); //Get upvote lists and functions from context

    const list = lists[listIndex]; //Get the upvote list at the specified index
  
  return (
    <div className="upvote-list">
      <div className="button-container">
        {
        Array.from({ length: list.buttonCount }, (_, index) => ( //Create upvote buttons based on buttonCount
            <UpvoteButton key={index} isSelected={list.isSelected} onClick={() => toggleUpvote(listIndex)}/>
            ))
        }
      </div>
      <AddButton onClick={() => addUpvote(listIndex)}/>
    </div>
  );
}

export default UpvoteList;