import React from 'react';
import '../styles/UpvoteButton.css';
import { ArrowUp } from "lucide-react";

interface UpvoteButtonProps {
    isSelected: boolean;
    onClick: () => void;
}

function UpvoteButton({ isSelected, onClick }: UpvoteButtonProps) {
  return (
    <button className={`upvote-button ${isSelected ? 'selected' : 'default'}`} onClick={onClick}>
        <ArrowUp size={32} color={isSelected ? "#253CF2" : "#343A40"} />
    </button>
  );
}

export default UpvoteButton;