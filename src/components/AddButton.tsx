import React from 'react';
import '../styles/AddButton.css';
import { Plus } from "lucide-react";

interface AddButtonProps {
    onClick: () => void;
}

function AddButton({ onClick }: AddButtonProps) {
    return (
        <button className="add-button" onClick={onClick}>
            <Plus size={32} color="#343A40" />
        </button>
    );
}

export default AddButton;